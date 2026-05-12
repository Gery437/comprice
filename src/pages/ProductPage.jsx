import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import { PRODUCTS, CHAINS, STORES, PRICES, PRICE_HISTORY, calcDistance } from '../lib/mockData'
import { getProductByBarcode } from '../lib/foodApi'
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
}

// יצירת מחירים אקראיים לסל מוצרים חדשים מה-API
function generateMockPrices(productId) {
  const basePrice = 5 + Math.random() * 35
  return STORES.map((store) => ({
    storeId: store.id,
    price: Math.round((basePrice + (Math.random() - 0.5) * basePrice * 0.25) * 10) / 10,
  }))
}

function getPricesNearbyDynamic(productId, prices, userLat, userLng, radiusKm) {
  const withDistance = prices
    .map((p) => {
      const store = STORES.find((s) => s.id === p.storeId)
      if (!store) return null
      const distance = calcDistance(userLat, userLng, store.lat, store.lng)
      return {
        ...p,
        store,
        chain: CHAINS[store.chain],
        distance: Math.round(distance * 10) / 10,
      }
    })
    .filter(Boolean)
    .sort((a, b) => a.distance - b.distance)

  // סינון לפי רדיוס
  const inRadius = withDistance.filter((p) => p.distance <= radiusKm)

  // fallback: אם אין חנויות בטווח — הצג 5 הקרובות ביותר
  const result = inRadius.length > 0 ? inRadius : withDistance.slice(0, 5)
  return result.sort((a, b) => a.price - b.price)
}

export default function ProductPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const location = useLocation()
  const radius = parseInt(searchParams.get('radius') || '5')

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  const [prices, setPrices] = useState([])
  const [locationError, setLocationError] = useState(null)
  const [addedToList, setAddedToList] = useState(false)

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

      // 3. אחרת נסה ברקוד ב-API
      if (!foundProduct && id.startsWith('off_')) {
        const barcode = id.replace('off_', '')
        foundProduct = await getProductByBarcode(barcode)
      }

      if (!foundProduct) {
        navigate('/')
        return
      }

      setProduct(foundProduct)

      // קבל מחירים
      const isNumericId = typeof foundProduct.id === 'number'
      const rawPrices = isNumericId
        ? PRICES[foundProduct.id] || []
        : generateMockPrices(foundProduct.id)

      // בקשת מיקום
      const tryGetLocation = () =>
        new Promise((resolve) => {
          if (!navigator.geolocation) {
            resolve({ lat: 32.0853, lng: 34.7818 })
            return
          }
          navigator.geolocation.getCurrentPosition(
            (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
            () => {
              setLocationError('משתמש במיקום ברירת מחדל (תל אביב)')
              resolve({ lat: 32.0853, lng: 34.7818 })
            },
            { timeout: 5000 }
          )
        })

      const loc = await tryGetLocation()
      const nearbyPrices = getPricesNearbyDynamic(foundProduct.id, rawPrices, loc.lat, loc.lng, radius)
      setPrices(nearbyPrices)
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

  const cheapest = prices[0]
  const mostExpensive = prices[prices.length - 1]
  const savings = cheapest && mostExpensive && prices.length > 1
    ? mostExpensive.price - cheapest.price
    : 0
  const isNumericId = typeof product.id === 'number'
  const history = isNumericId ? PRICE_HISTORY[product.id] : null

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
            ⚠️ {locationError}
          </div>
        )}

        {!isNumericId && (
          <div className="mt-3 bg-blue-50 border border-blue-200 text-blue-700 text-sm px-4 py-2 rounded-xl">
            💡 המחירים לדוגמה — חיבור למחירים אמיתיים בקרוב
          </div>
        )}
      </Card>

      {/* חיסכון */}
      {savings > 0.1 && (
        <div className="bg-emerald-600 text-white rounded-2xl p-5 mb-6 text-center shadow-lg">
          <p className="text-emerald-200 text-sm mb-1">חיסכון אפשרי בין הכי זול להכי יקר</p>
          <p className="text-4xl font-bold">₪{savings.toFixed(2)}</p>
          <p className="text-emerald-200 text-sm mt-1">ברדיוס {radius} ק"מ ממיקומך</p>
        </div>
      )}

      {/* רשימת חנויות */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        📍 {prices.length} חנויות {prices.some(p => p.distance > radius) ? '(הקרובות ביותר)' : `ברדיוס ${radius} ק"מ`}
      </h2>

      {prices.length === 0 ? (
        <Card className="p-8 text-center">
          <div className="text-4xl mb-3">📍</div>
          <p className="text-gray-500 font-medium">לא נמצאו חנויות ברדיוס {radius} ק"מ</p>
          <p className="text-gray-400 text-sm mt-2">נסה להגדיל את הרדיוס</p>
        </Card>
      ) : (
        <div className="space-y-3 mb-8">
          {prices.map((item, index) => {
            const isCheapest = index === 0
            return (
              <div
                key={item.storeId}
                className={`rounded-2xl p-4 flex items-center gap-4 shadow-sm transition-all ${
                  isCheapest ? 'cheapest' : 'bg-white border border-gray-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  isCheapest ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {index + 1}
                </div>

                <div className="text-2xl shrink-0">{item.chain.logo}</div>

                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-sm">{item.store.branch}</p>
                  <p className="text-gray-400 text-xs truncate">{item.store.address}</p>
                  <p className="text-gray-400 text-xs">{item.distance} ק"מ ממך</p>
                </div>

                <div className="text-left shrink-0">
                  <p className={`text-2xl font-bold ${isCheapest ? 'text-emerald-700' : 'text-gray-800'}`}>
                    ₪{item.price.toFixed(2)}
                  </p>
                  {isCheapest && (
                    <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                      הכי זול! 🏆
                    </span>
                  )}
                </div>
              </div>
            )
          })}
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
