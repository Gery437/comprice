import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS, STORES, CHAINS, PRICES, calcDistance } from '../lib/mockData'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function ShoppingListPage() {
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [comparison, setComparison] = useState([])
  const [loading, setLoading] = useState(false)
  const [radius, setRadius] = useState(5)
  const [userLocation, setUserLocation] = useState({ lat: 32.0853, lng: 34.7818 })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('shoppingList') || '[]')
    setItems(saved)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => {}
      )
    }
  }, [])

  function saveItems(newItems) {
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
    setComparison([])
  }

  function removeItem(productId) {
    if (!window.confirm('להסיר מוצר זה מהרשימה?')) return
    saveItems(items.filter((i) => i.productId !== productId))
  }

  function updateQty(productId, delta) {
    const updated = items.map((i) =>
      i.productId === productId
        ? { ...i, quantity: Math.max(1, i.quantity + delta) }
        : i
    )
    saveItems(updated)
  }

  function clearAll() {
    if (!window.confirm('למחוק את כל הרשימה?')) return
    saveItems([])
    setComparison([])
  }

  function compareBasket() {
    setLoading(true)

    // לכל חנות — חשב את סך המחיר של כל הפריטים ברשימה
    const storeScores = {}

    STORES.forEach((store) => {
      const distance = calcDistance(userLocation.lat, userLocation.lng, store.lat, store.lng)
      if (distance > radius) return

      let total = 0
      let found = 0

      items.forEach((item) => {
        const productPrices = PRICES[item.productId] || []
        const storePrice = productPrices.find((p) => p.storeId === store.id)
        if (storePrice) {
          total += storePrice.price * item.quantity
          found++
        }
      })

      if (found > 0) {
        storeScores[store.id] = {
          store,
          chain: CHAINS[store.chain],
          total: Math.round(total * 100) / 100,
          found,
          missing: items.length - found,
          distance: Math.round(distance * 10) / 10,
        }
      }
    })

    const sorted = Object.values(storeScores).sort((a, b) => a.total - b.total)
    setComparison(sorted)
    setLoading(false)
  }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div dir="rtl">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 text-emerald-600 font-medium mb-6 hover:gap-3 transition-all">
        ← חזרה לחיפוש
      </button>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">🛒 הרשימה שלי</h1>
          <p className="text-gray-400 text-sm mt-0.5">{totalItems} פריטים</p>
        </div>
        {items.length > 0 && (
          <Button variant="danger" size="sm" onClick={clearAll}>
            🗑️ נקה הכל
          </Button>
        )}
      </div>

      {items.length === 0 ? (
        <Card className="p-12 text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">הרשימה ריקה</h2>
          <p className="text-gray-400 mb-6">חפש מוצרים והוסף אותם לרשימה</p>
          <Button onClick={() => navigate('/')} variant="primary">
            חפש מוצרים
          </Button>
        </Card>
      ) : (
        <>
          {/* פריטים */}
          <div className="space-y-3 mb-6">
            {items.map((item) => (
              <Card key={item.productId} className="p-4 flex items-center gap-4">
                <span className="text-3xl">{item.image}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.unit}</p>
                  <p className="text-gray-300 text-xs">נוסף: {new Date(item.addedAt).toLocaleDateString('he-IL')}</p>
                </div>

                {/* כמות */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.productId, -1)}
                    className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-bold text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.productId, 1)}
                    className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-gray-300 hover:text-red-400 transition-colors text-xl leading-none mr-1"
                >
                  ×
                </button>
              </Card>
            ))}
          </div>

          {/* רדיוס */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="text-gray-500 text-sm font-medium">📍 חנויות עד</span>
            {[2, 5, 10, 20].map((r) => (
              <button
                key={r}
                onClick={() => { setRadius(r); setComparison([]) }}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  radius === r
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300'
                }`}
              >
                {r} ק"מ
              </button>
            ))}
          </div>

          {/* כפתור השוואה */}
          <Button onClick={compareBasket} variant="primary" size="lg" className="w-full rounded-2xl mb-6">
            💰 מצא לי את החנות הכי זולה לסל זה
          </Button>

          {/* תוצאות השוואה */}
          {loading && <LoadingSpinner text="מחשב את הסל הכי זול..." />}

          {comparison.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-700 mb-4">
                🏆 תוצאות עבור {items.length} מוצרים
              </h2>
              <div className="space-y-3">
                {comparison.map((c, index) => {
                  const isCheapest = index === 0
                  const savings = comparison[comparison.length - 1].total - c.total
                  return (
                    <div
                      key={c.store.id}
                      className={`rounded-2xl p-4 flex items-center gap-4 shadow-sm ${
                        isCheapest ? 'cheapest' : 'bg-white border border-gray-100'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold shrink-0 ${
                        isCheapest ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {index + 1}
                      </div>

                      <span className="text-2xl">{c.chain.logo}</span>

                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-800 text-sm">{c.store.branch}</p>
                        <p className="text-gray-400 text-xs truncate">{c.store.address}</p>
                        <p className="text-gray-400 text-xs">{c.distance} ק"מ • {c.found}/{items.length} מוצרים</p>
                      </div>

                      <div className="text-left shrink-0">
                        <p className={`text-2xl font-bold ${isCheapest ? 'text-emerald-700' : 'text-gray-800'}`}>
                          ₪{c.total.toFixed(2)}
                        </p>
                        {isCheapest && savings > 0 && (
                          <p className="text-xs text-emerald-600 font-semibold">
                            חיסכון של ₪{savings.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
