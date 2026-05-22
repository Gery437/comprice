import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { STORES, CHAINS } from '../lib/mockData'
import { getHomeLocation } from '../lib/locationStorage'

const TEL_AVIV = { lat: 32.0853, lng: 34.7818 }

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export default function MapPage() {
  const [userLocation, setUserLocation] = useState(null)
  const [selectedChains, setSelectedChains] = useState(() => new Set(Object.keys(CHAINS)))
  const [radius, setRadius] = useState(5)

  useEffect(() => {
    // Try GPS first
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => {
          // Fallback to saved home location
          const home = getHomeLocation()
          setUserLocation(home ? { lat: home.lat, lng: home.lng } : TEL_AVIV)
        },
        { timeout: 5000 }
      )
    } else {
      const home = getHomeLocation()
      setUserLocation(home ? { lat: home.lat, lng: home.lng } : TEL_AVIV)
    }
  }, [])

  function toggleChain(key) {
    setSelectedChains((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const visibleStores = userLocation
    ? STORES.filter((s) => {
        if (!selectedChains.has(s.chain)) return false
        const dist = haversineKm(userLocation.lat, userLocation.lng, s.lat, s.lng)
        return dist <= radius
      })
    : []

  if (!userLocation) {
    return (
      <div dir="rtl" className="flex items-center justify-center h-64">
        <span className="text-gray-400 text-lg">מאתר מיקום...</span>
      </div>
    )
  }

  return (
    <div dir="rtl" className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-2xl font-bold text-gray-800">מפת חנויות</h1>
        <span className="text-sm text-gray-500 bg-emerald-50 px-3 py-1 rounded-full font-medium">
          {visibleStores.length} חנויות בטווח
        </span>
      </div>

      {/* Chain filter chips */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(CHAINS).map(([key, chain]) => (
          <button
            key={key}
            onClick={() => toggleChain(key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border transition-all ${
              selectedChains.has(key)
                ? 'text-white border-transparent shadow-sm'
                : 'bg-white text-gray-400 border-gray-200'
            }`}
            style={selectedChains.has(key) ? { backgroundColor: chain.color, borderColor: chain.color } : {}}
          >
            <span>{chain.logo}</span>
            <span className="hidden sm:inline">{chain.name}</span>
          </button>
        ))}
      </div>

      {/* Radius buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-gray-500 text-sm font-medium">טווח:</span>
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

      {/* Map */}
      <div style={{ height: 'calc(100vh - 340px)', minHeight: 300 }} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
        <MapContainer
          center={[userLocation.lat, userLocation.lng]}
          zoom={12}
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
            pathOptions={{ color: '#2563eb', fillColor: '#3b82f6', fillOpacity: 0.9 }}
          >
            <Popup>המיקום שלך</Popup>
          </CircleMarker>

          {/* Stores */}
          {visibleStores.map((store) => {
            const chain = CHAINS[store.chain]
            return (
              <CircleMarker
                key={store.id}
                center={[store.lat, store.lng]}
                radius={8}
                pathOptions={{
                  color: chain?.color || '#666',
                  fillColor: chain?.color || '#666',
                  fillOpacity: 0.8,
                }}
              >
                <Popup>
                  <div className="text-right" dir="rtl">
                    <p className="font-bold text-sm">
                      {chain?.logo} {store.branch}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{store.address}</p>
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}
        </MapContainer>
      </div>
    </div>
  )
}
