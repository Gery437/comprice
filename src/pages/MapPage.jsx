import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { STORES as MOCK_STORES, CHAINS } from '../lib/mockData'
import { getHomeLocation } from '../lib/locationStorage'

const COMPRICE_API = 'https://comprice-api-production.up.railway.app'
const TEL_AVIV = { lat: 32.0853, lng: 34.7818 }

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

// Chain display info for chains that may come from Overpass and aren't in CHAINS
const CHAIN_INFO = {
  ...Object.fromEntries(Object.entries(CHAINS).map(([k, v]) => [k, v])),
  // yesh already defined in CHAINS as יש חסד — override with extended name
  yesh:    { name: 'יש חסד / יש בשכונה', color: '#0891b2', logo: '💙' },
  mega:    { name: 'מגה', color: '#f97316', logo: '🏬' },
  victory: { name: 'ויקטורי', color: '#7c3aed', logo: '🏷️' },
  yeinot:  { name: 'יינות ביתן', color: '#b45309', logo: '🍷' },
}

export default function MapPage() {
  const [userLocation, setUserLocation] = useState(null)
  // Convert mock STORES to API format as immediate fallback
  const mockStores = MOCK_STORES.map(s => ({
    id: `mock_${s.id}`,
    chainKey: s.chain,
    name: s.branch,
    address: s.address,
    city: '',
    lat: s.lat,
    lng: s.lng,
  }))

  const [stores, setStores] = useState(mockStores)
  const [storesLoading, setStoresLoading] = useState(true)
  const [realStoresLoaded, setRealStoresLoaded] = useState(false)
  const [selectedChains, setSelectedChains] = useState(() => new Set(Object.keys(CHAIN_INFO)))
  const [radius, setRadius] = useState(5)
  const retryRef = useRef(null)

  // Resolve user location
  useEffect(() => {
    const fallback = () => {
      const home = getHomeLocation()
      setUserLocation(home ? { lat: home.lat, lng: home.lng } : TEL_AVIV)
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        fallback,
        { timeout: 5000 }
      )
    } else {
      fallback()
    }
  }, [])

  // Fetch real store locations from API — retry every 20s until ready
  useEffect(() => {
    let cancelled = false

    async function loadStores() {
      try {
        const res = await fetch(`${COMPRICE_API}/api/stores`)
        const data = await res.json()
        if (cancelled) return

        if (data.stores?.length > 0) {
          setStores(data.stores)
          const presentChains = new Set(data.stores.map(st => st.chainKey))
          setSelectedChains(presentChains)
          setRealStoresLoaded(true)
          setStoresLoading(false)
        } else {
          // Server still scraping — retry in 20s
          setStoresLoading(true)
          retryRef.current = setTimeout(loadStores, 20000)
        }
      } catch {
        if (!cancelled) retryRef.current = setTimeout(loadStores, 20000)
      }
    }

    loadStores()
    return () => { cancelled = true; clearTimeout(retryRef.current) }
  }, [])

  function toggleChain(key) {
    setSelectedChains(prev => {
      const next = new Set(prev)
      if (next.has(key)) { next.delete(key) } else { next.add(key) }
      return next
    })
  }

  function toggleAllChains() {
    const all = new Set(stores.map(s => s.chainKey))
    if (selectedChains.size === all.size) setSelectedChains(new Set())
    else setSelectedChains(all)
  }

  const presentChainKeys = [...new Set(stores.map(s => s.chainKey))].sort()

  const visibleStores = userLocation
    ? stores.filter(s => {
        if (!selectedChains.has(s.chainKey)) return false
        const dist = haversineKm(userLocation.lat, userLocation.lng, s.lat, s.lng)
        return dist <= radius
      })
    : []

  if (!userLocation) {
    return (
      <div dir="rtl" className="flex items-center justify-center h-64">
        <span className="text-gray-400 text-lg animate-pulse">מאתר מיקום...</span>
      </div>
    )
  }

  return (
    <div dir="rtl" className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-xl font-bold text-gray-800">🗺️ מפת חנויות</h1>
        <div className="flex items-center gap-2">
          {storesLoading && !realStoresLoaded && (
            <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full animate-pulse">
              ⏳ מחפש חנויות אמיתיות...
            </span>
          )}
          {realStoresLoaded && (
            <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              ✓ נתונים אמיתיים
            </span>
          )}
          <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            {visibleStores.length} חנויות בטווח
          </span>
          <span className="text-xs text-gray-400">{stores.length} סה"כ</span>
        </div>
      </div>

      {/* Radius buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-gray-500 text-sm font-medium">📍 טווח:</span>
        {[2, 5, 10, 20].map(r => (
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

      {/* Chain filter chips */}
      <div className="flex flex-wrap gap-2 items-center">
        <button
          onClick={toggleAllChains}
          className="text-xs text-gray-500 underline underline-offset-2 shrink-0"
        >
          {selectedChains.size === presentChainKeys.length ? 'בטל הכל' : 'בחר הכל'}
        </button>
        {presentChainKeys.map(key => {
          const chain = CHAIN_INFO[key] || { name: key, color: '#888', logo: '🏪' }
          const count = stores.filter(s => s.chainKey === key).length
          return (
            <button
              key={key}
              onClick={() => toggleChain(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                selectedChains.has(key)
                  ? 'text-white border-transparent shadow-sm'
                  : 'bg-white text-gray-400 border-gray-200'
              }`}
              style={selectedChains.has(key) ? { backgroundColor: chain.color } : {}}
            >
              <span>{chain.logo}</span>
              <span>{chain.name}</span>
              <span className={`text-xs ${selectedChains.has(key) ? 'text-white/80' : 'text-gray-400'}`}>
                ({count})
              </span>
            </button>
          )
        })}
      </div>

      {/* Map */}
      <div style={{ height: 'calc(100vh - 360px)', minHeight: 320 }} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        <MapContainer
          center={[userLocation.lat, userLocation.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {/* User location */}
          <CircleMarker
            center={[userLocation.lat, userLocation.lng]}
            radius={10}
            pathOptions={{ color: '#1d4ed8', fillColor: '#3b82f6', fillOpacity: 0.9, weight: 2 }}
          >
            <Popup>
              <div dir="rtl" className="text-center">
                <p className="font-bold text-sm">📍 המיקום שלך</p>
              </div>
            </Popup>
          </CircleMarker>

          {/* Stores */}
          {visibleStores.map(store => {
            const chain = CHAIN_INFO[store.chainKey] || { name: store.chainKey, color: '#888', logo: '🏪' }
            const dist = haversineKm(userLocation.lat, userLocation.lng, store.lat, store.lng)
            return (
              <CircleMarker
                key={store.id}
                center={[store.lat, store.lng]}
                radius={8}
                pathOptions={{
                  color: chain.color,
                  fillColor: chain.color,
                  fillOpacity: 0.85,
                  weight: 1.5,
                }}
              >
                <Popup>
                  <div dir="rtl" style={{ minWidth: 160 }}>
                    <p className="font-bold text-sm">{chain.logo} {store.name}</p>
                    {store.address && <p className="text-gray-500 text-xs mt-0.5">{store.address}</p>}
                    {store.city && <p className="text-gray-500 text-xs">{store.city}</p>}
                    <p className="text-emerald-600 text-xs font-medium mt-1">
                      {dist.toFixed(1)} ק"מ ממך
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}
        </MapContainer>
      </div>

      {/* Legend */}
      {presentChainKeys.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
          <p className="text-sm font-bold text-gray-700 mb-3">מקרא</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
            {presentChainKeys.map(key => {
              const chain = CHAIN_INFO[key] || { name: key, color: '#888', logo: '🏪' }
              const count = stores.filter(s => s.chainKey === key).length
              return (
                <div key={key} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full shrink-0 border-2 border-white shadow-sm"
                    style={{ backgroundColor: chain.color }}
                  />
                  <span className="text-sm text-gray-700 font-medium">{chain.logo} {chain.name}</span>
                  <span className="text-xs text-gray-400 mr-auto">({count})</span>
                </div>
              )
            })}
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full shrink-0 bg-blue-500 border-2 border-white shadow-sm" />
              <span className="text-sm text-gray-700 font-medium">📍 המיקום שלך</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
