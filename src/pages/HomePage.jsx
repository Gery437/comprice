import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchFoodProducts, getProductByBarcode } from '../lib/foodApi'
import { PRODUCTS, searchProducts } from '../lib/mockData'
import BarcodeScanner from '../components/BarcodeScanner'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const POPULAR_IDS = [1, 3, 40, 10]

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [showScanner, setShowScanner] = useState(false)
  const [radius, setRadius] = useState(5)
  const [barcodeLoading, setBarcodeLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [dropdownStyle, setDropdownStyle] = useState({})

  const debounceRef = useRef(null)
  const navigate = useNavigate()
  const inputWrapRef = useRef(null)

  const popularProducts = PRODUCTS.filter((p) => POPULAR_IDS.includes(p.id))

  // חשב מיקום הדרופדאון לפי מיקום ה-input בפועל על המסך
  const updateDropdownPos = useCallback(() => {
    if (!inputWrapRef.current) return
    const rect = inputWrapRef.current.getBoundingClientRect()
    setDropdownStyle({
      position: 'fixed',
      top: rect.bottom + 6,
      right: window.innerWidth - rect.right,
      left: rect.left,
      zIndex: 99999,
      maxHeight: '320px',
      overflowY: 'auto',
    })
  }, [])

  // עדכן מיקום בגלילה ו-resize
  useEffect(() => {
    if (!showDropdown) return
    window.addEventListener('scroll', updateDropdownPos, true)
    window.addEventListener('resize', updateDropdownPos)
    updateDropdownPos()
    return () => {
      window.removeEventListener('scroll', updateDropdownPos, true)
      window.removeEventListener('resize', updateDropdownPos)
    }
  }, [showDropdown, updateDropdownPos])

  // סגור בלחיצה מחוץ
  useEffect(() => {
    function handleClick(e) {
      if (inputWrapRef.current && !inputWrapRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // חיפוש
  useEffect(() => {
    clearTimeout(debounceRef.current)

    if (query.trim().length < 2) {
      setResults([])
      setShowDropdown(false)
      return
    }

    // תוצאות מיידיות מהמאגר המקומי
    const localResults = searchProducts(query).map((p) => ({ ...p, source: 'local' }))
    setResults(localResults.slice(0, 10))
    setShowDropdown(true)
    updateDropdownPos()

    // חיפוש API אחרי 500ms
    debounceRef.current = setTimeout(async () => {
      setSearching(true)
      try {
        const apiResults = await searchFoodProducts(query)
        const localIds = new Set(localResults.map((p) => String(p.barcode)))
        const uniqueApi = apiResults.filter((p) => !localIds.has(String(p.barcode)))
        setResults([...localResults, ...uniqueApi].slice(0, 12))
      } catch { /* שגיאת רשת — נשמור על תוצאות המקומיות */ }
      setSearching(false)
    }, 500)

    return () => clearTimeout(debounceRef.current)
  }, [query, updateDropdownPos])

  async function handleBarcodeDetected(barcode) {
    setShowScanner(false)
    setBarcodeLoading(true)
    setQuery(barcode)
    const product = await getProductByBarcode(barcode)
    if (product) navigate(`/product/${product.id}?radius=${radius}`, { state: { product } })
    setBarcodeLoading(false)
  }

  function goToProduct(product) {
    setShowDropdown(false)
    setQuery('')
    navigate(`/product/${product.id}?radius=${radius}`, { state: { product } })
  }

  return (
    <div dir="rtl">
      {/* Hero */}
      <div className="gradient-hero rounded-3xl p-8 mb-8 text-white text-center shadow-xl">
        <div className="text-5xl mb-3">🛒</div>
        <h1 className="text-3xl font-bold mb-2">מצא את המחיר הכי זול</h1>
        <p className="text-emerald-200 text-lg">בחנויות הקרובות אליך בלבד</p>
      </div>

      {/* בחירת רדיוס */}
      <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
        <span className="text-gray-500 text-sm font-medium">📍 חנויות עד</span>
        {[2, 5, 10, 20].map((r) => (
          <button
            key={r}
            onClick={() => setRadius(r)}
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

      {/* שורת חיפוש */}
      <div className="flex gap-3 mb-8" ref={inputWrapRef}>
        <div className="relative flex-1">
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {searching
              ? <span className="inline-block w-5 h-5 border-2 border-emerald-300 border-t-emerald-600 rounded-full animate-spin" />
              : <span className="text-xl">🔍</span>
            }
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => { if (results.length > 0) { setShowDropdown(true); updateDropdownPos() } }}
            placeholder="חפש מוצר לפי שם, מותג או ברקוד..."
            className="w-full pr-12 pl-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-400 focus:outline-none text-lg shadow-sm bg-white transition-colors"
          />
        </div>
        <Button
          onClick={() => setShowScanner(true)}
          variant="secondary"
          size="lg"
          className="rounded-2xl border-2 border-gray-200 px-4 shrink-0"
        >
          <span className="text-2xl">{barcodeLoading ? '⏳' : '📷'}</span>
        </Button>
      </div>

      {/* דרופדאון — fixed, מרחף מעל הכל */}
      {showDropdown && (
        <div
          style={dropdownStyle}
          className="bg-white rounded-2xl shadow-2xl border border-gray-100"
        >
          {results.length > 0 ? (
            results.map((product) => (
              <button
                key={String(product.id)}
                onMouseDown={(e) => { e.preventDefault(); goToProduct(product) }}
                className="w-full text-right flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition-colors border-b border-gray-50 last:border-0"
              >
                {product.imageUrl
                  ? <img src={product.imageUrl} alt="" className="w-9 h-9 object-contain rounded-lg shrink-0" />
                  : <span className="text-2xl shrink-0">{product.image}</span>
                }
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-gray-800 text-sm truncate">{product.name}</p>
                    {product.brand && (
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium shrink-0">
                        {product.brand}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs">{product.category} · {product.unit}</p>
                </div>
                <span className="text-emerald-500 text-xs shrink-0">השווה ←</span>
              </button>
            ))
          ) : !searching ? (
            <div className="p-5 text-center text-gray-400 text-sm">
              לא נמצאו תוצאות עבור "{query}"
            </div>
          ) : (
            <div className="p-5 text-center text-gray-400 text-sm">מחפש...</div>
          )}
        </div>
      )}

      {/* מוצרים פופולריים */}
      <div>
        <h2 className="text-lg font-bold text-gray-700 mb-4">🔥 מוצרים פופולריים</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {popularProducts.map((product) => (
            <Card key={product.id} onClick={() => goToProduct(product)} className="p-4 text-center">
              <div className="text-4xl mb-2">{product.image}</div>
              <p className="font-semibold text-gray-800 text-sm leading-tight">{product.name}</p>
              <p className="text-gray-400 text-xs mt-1">{product.unit}</p>
              <div className="mt-3">
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium">
                  השווה מחיר →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* כפתור רשימה */}
      <div className="mt-8 text-center">
        <Button onClick={() => navigate('/list')} variant="secondary" size="lg" className="rounded-2xl gap-3">
          <span className="text-2xl">🛒</span>
          <span>הרשימה שלי</span>
        </Button>
      </div>

      {showScanner && (
        <BarcodeScanner onDetected={handleBarcodeDetected} onClose={() => setShowScanner(false)} />
      )}
    </div>
  )
}
