import { useState, useEffect, useMemo } from 'react'
import { useParams, useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import { PRODUCTS, CHAINS, PRICE_HISTORY } from '../lib/mockData'
import { getHomeLocation } from '../lib/locationStorage'
import { getProductByBarcode, getRealPrices, getRealStores } from '../lib/foodApi'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const CHAIN_COLORS = {
  shufersal: '#e31b23',
  ramilevi: '#0057a8',
  mega: '#f97316',
  victory: '#7c3aed',
  yeinot: '#b45309',
  yesh: '#0891b2',
  osher: '#16a34a',
  yohananof: '#d97706',
}

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}


export default function ProductPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const radius = parseInt(searchParams.get('radius') || '5')

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [realPrices, setRealPrices] = useState(null)     // { chainKey: price }
  const [realStores, setRealStores] = useState([])       // חנויות אמיתיות
  const [userLocation, setUserLocation] = useState(null)
  const [locationError, setLocationError] = useState(null)
  const [addedToList, setAddedToList] = useState(false)
  const [pricesLoading, setPricesLoading] = useState(false)

  // חנויות קרובות אמיתיות = ממזג realPrices + realStores + מיקום
  const nearbyRealStores = useMemo(() => {
    if (!realPrices || !userLocation || !realStores.length) return []
    return realStores
      .filter(s => realPrices[s.chainKey] !== undefined)
      .map(s => ({
        ...s,
        price: realPrices[s.chainKey],
        distance: Math.round(haversineKm(userLocation.lat, userLocation.lng, s.lat, s.lng) * 10) / 10,
      }))
      .filter(s => s.distance <= radius)
      .sort((a, b) => a.price - b.price || a.distance - b.distance)
  }, [realPrices, userLocation, realStores, radius])

  useEffect(() => {
    async function loadProduct() {
      setLoading(true)

      // 1. בדוק אם הגיע מה-state של הניווט (מוצר מה-API)
      let foundProduct = location.state?.product || null

      // 2. אחרת חפש במוצרי הדמו
      if (!foundProduct) {
        const isNumeric = /^\d+$/.test(id)
        if (isNumeric) {
          foundProduct = PRODUCTS.find((p) => p.id === parseInt(id)) || null
        }
      }

      // 3. אחרת נסה ברקוד
      if (!foundProduct && (id.startsWith('off_') || id.startsWith('barcode_'))) {
        const barcode = id.replace('off_', '').replace('barcode_', '')
        const apiProduct = await getProductByBarcode(barcode)
        foundProduct = apiProduct || {
          id: `barcode_${barcode}`,
          barcode,
          name: `מוצר ${barcode}`,
          category: 'מוצר כללי',
          unit: 'יחידה',
          image: '🛒',
          source: 'direct',
        }
      }

      if (!foundProduct) {
        navigate('/')
        return
      }

      setProduct(foundProduct)

      // טען מחירים אמיתיים + חנויות אמיתיות במקביל
      const barcode = foundProduct.barcode ||
        (String(foundProduct.id).startsWith('off_') ? foundProduct.id.replace('off_', '') : null)

      if (barcode) {
        setPricesLoading(true)
        Promise.all([
          getRealPrices(barcode),
          getRealStores(),
        ]).then(([rp, stores]) => {
          if (rp) setRealPrices(rp)
          if (stores?.length) setRealStores(stores)
          setPricesLoading(false)
        })
      }

      // בקשת מיקום
      const tryGetLocation = () =>
        new Promise((resolve) => {
          const fallback = () => {
            const home = getHomeLocation()
            if (home) {
              setLocationError(`📍 משתמש במיקום בית: ${home.label}`)
              resolve({ lat: home.lat, lng: home.lng })
            } else {
              setLocationError('⚠️ GPS לא זמין — משתמש במיקום ברירת מחדל (תל אביב). הגדר מיקום בית בדף הראשי.')
              resolve({ lat: 32.0853, lng: 34.7818 })
            }
          }
          if (!navigator.geolocation) { fallback(); return }
          navigator.geolocation.getCurrentPosition(
            (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
            fallback,
            { timeout: 5000 }
          )
        })

      const loc = await tryGetLocation()
      setUserLocation(loc)
      setLoading(false)
    }

    loadProduct()
  }, [id, radius, navigate, location.state])


  function addToShoppingList() {
    const existing = JSON.parse(localStorage.getItem('shoppingList') || '[]')
    const alreadyIn = existing.find((item) => item.productId === String(product.id))
    if (!alreadyIn) {
      existing.push({
        productId: String(product.id),
        name: product.name,
        image: product.image,
        imageUrl: product.imageUrl || null,
        unit: product.unit,
        quantity: 1,
        addedAt: new Date().toISOString(),
      })
      localStorage.setItem('shoppingList', JSON.stringify(existing))
    }
    setAddedToList(true)
    setTimeout(() => setAddedToList(false), 2000)
  }

  if (loading) return <LoadingSpinner text="טוען פרטי מוצר..." />
  if (!product) return null

  const isNumericId = typeof product.id === 'number'
  const history = isNumericId ? (PRICE_HISTORY[product.id] || null) : null

  // נתוני חיסכון — רק כשיש חנויות אמיתיות עם מחיר
  const savings = (() => {
    if (nearbyRealStores.length > 1) {
      const prices = nearbyRealStores.map(s => s.price)
      return Math.max(...prices) - Math.min(...prices)
    }
    return 0
  })()

  return (
    <div dir="rtl">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-emerald-600 font-medium mb-6 hover:gap-3 transition-all">
        ← חזרה
      </button>

      {/* פרטי מוצר */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center shadow-inner shrink-0 overflow-hidden">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain p-1" />
            ) : (
              <span className="text-5xl">{product.image}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-gray-800 leading-tight">{product.name}</h1>
            {product.brand && <p className="text-emerald-600 text-sm font-medium mt-0.5">{product.brand}</p>}
            <p className="text-gray-500 text-sm">{product.category} • {product.unit}</p>
            {product.barcode && <p className="text-gray-400 text-xs mt-1">ברקוד: {product.barcode}</p>}
          </div>
          <Button onClick={addToShoppingList} variant={addedToList ? 'secondary' : 'primary'} size="sm" className="shrink-0">
            {addedToList ? '✓ נוסף!' : '+ רשימה'}
          </Button>
        </div>

        {locationError && (
          <div className="mt-3 bg-amber-50 border border-amber-200 text-amber-700 text-sm px-4 py-2 rounded-xl">
            {locationError}
          </div>
        )}

        {/* סטטוס מחירים */}
        {pricesLoading && (
          <div className="mt-3 bg-blue-50 border border-blue-200 text-blue-700 text-sm px-4 py-2 rounded-xl animate-pulse">
            🔍 מחפש מחירים אמיתיים...
          </div>
        )}
        {!pricesLoading && realPrices && Object.keys(realPrices).length === 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-200 text-amber-700 text-sm px-4 py-2 rounded-xl">
            🔍 לא נמצאו מחירים עבור ברקוד זה ברשתות השמורות
          </div>
        )}
      </Card>

      {/* חיסכון */}
      {savings > 0.1 && (
        <div className="bg-emerald-600 text-white rounded-2xl p-5 mb-6 text-center shadow-lg">
          <p className="text-emerald-200 text-sm mb-1">
            חיסכון אפשרי בין חנויות בטווח {radius} ק"מ
          </p>
          <p className="text-4xl font-bold">₪{savings.toFixed(2)}</p>
        </div>
      )}

      {/* ── אין חנויות בטווח אבל יש מחירים — השוואת רשתות ── */}
      {realPrices && Object.keys(realPrices).length > 0 && nearbyRealStores.length === 0 && !pricesLoading && (() => {
        const entries = Object.entries(realPrices).sort((a, b) => a[1] - b[1])
        const maxPrice = entries[entries.length - 1]?.[1] ?? 0
        const minPrice = entries[0]?.[1] ?? 0
        const chainSavings = entries.length > 1 ? maxPrice - minPrice : 0
        return (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-bold text-gray-700">💰 מחיר לפי רשת</h2>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">אמיתי</span>
              <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">⏳ חנויות טוענות...</span>
            </div>
            {chainSavings > 0.1 && (
              <div className="bg-emerald-600 text-white rounded-2xl p-4 mb-4 text-center shadow-lg">
                <p className="text-emerald-200 text-sm mb-1">חיסכון בין הרשתות</p>
                <p className="text-3xl font-bold">₪{chainSavings.toFixed(2)}</p>
              </div>
            )}
            <div className="space-y-3">
              {entries.map(([chainKey, price], index) => {
                const chain = CHAINS[chainKey]
                if (!chain) return null
                const isCheapest = index === 0
                return (
                  <div key={chainKey} className={`rounded-2xl p-4 flex items-center gap-4 shadow-sm ${isCheapest ? 'cheapest' : 'bg-white border border-gray-100'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${isCheapest ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'}`}>{index + 1}</div>
                    <div className="text-2xl shrink-0">{chain.logo}</div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">{chain.name}</p>
                    </div>
                    <div className="text-left shrink-0">
                      <p className={`text-2xl font-bold ${isCheapest ? 'text-emerald-700' : 'text-gray-800'}`}>₪{price.toFixed(2)}</p>
                      {isCheapest && <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full">הכי זול! 🏆</span>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })()}

      {/* ── תצוגה אמיתית: חנויות + מחירים ── */}
      {nearbyRealStores.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-lg font-bold text-gray-700">
              📍 {nearbyRealStores.length} חנויות קרובות ברדיוס {radius} ק"מ
            </h2>
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">מחירים אמיתיים</span>
          </div>
          <div className="space-y-3">
            {nearbyRealStores.map((store, index) => {
              const chain = CHAINS[store.chainKey] || { name: store.chainKey, logo: '🏪' }
              const isCheapest = index === 0
              return (
                <div
                  key={store.id}
                  className={`rounded-2xl p-4 flex items-center gap-4 shadow-sm ${
                    isCheapest ? 'cheapest' : 'bg-white border border-gray-100'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    isCheapest ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>{index + 1}</div>
                  <div className="text-2xl shrink-0">{chain.logo}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-sm">{store.name}</p>
                    {(store.address || store.city) && (
                      <p className="text-gray-500 text-xs truncate">
                        {[store.address, store.city].filter(Boolean).join(', ')}
                      </p>
                    )}
                    <p className="text-gray-400 text-xs">{store.distance} ק"מ ממך</p>
                  </div>
                  <div className="text-left shrink-0 flex flex-col items-end gap-1.5">
                    <p className={`text-2xl font-bold ${isCheapest ? 'text-emerald-700' : 'text-gray-800'}`}>
                      ₪{store.price.toFixed(2)}
                    </p>
                    {isCheapest && (
                      <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full">הכי זול! 🏆</span>
                    )}
                    <a
                      href={`https://waze.com/ul?ll=${store.lat},${store.lng}&navigate=yes`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs bg-[#05c8f7] hover:bg-[#00b0d8] text-white font-semibold px-2 py-1 rounded-lg transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <img src="https://www.waze.com/favicon.ico" alt="Waze" className="w-3.5 h-3.5" />
                      Waze
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}



      {/* גרף היסטוריה — רק למוצרי דמו */}
      {history && (
        <Card className="p-5 mb-6">
          <h3 className="text-lg font-bold text-gray-700 mb-4">📊 היסטוריית מחירים (6 חודשים)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={history} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: 'Segoe UI' }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `₪${v}`} />
              <Tooltip formatter={(v) => [`₪${v}`, '']} />
              <Legend />
              <Line type="monotone" dataKey="shufersal" name="שופרסל" stroke={CHAIN_COLORS.shufersal} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="ramilevi" name="רמי לוי" stroke={CHAIN_COLORS.ramilevi} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="mega" name="מגה" stroke={CHAIN_COLORS.mega} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      )}
    </div>
  )
}
