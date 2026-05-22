const KEY = 'homeLocation'

/** Returns saved home location or null */
export function getHomeLocation() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/** Save { lat, lng, label } */
export function setHomeLocation(data) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function clearHomeLocation() {
  localStorage.removeItem(KEY)
}

/**
 * Geocode a free-text address using Nominatim (OpenStreetMap).
 * Returns { lat, lng, label } or throws on failure.
 */
export async function geocodeAddress(query) {
  const url =
    `https://nominatim.openstreetmap.org/search?` +
    new URLSearchParams({
      q: query,
      format: 'json',
      limit: '1',
      countrycodes: 'il',
      'accept-language': 'he',
    })

  const res = await fetch(url, {
    headers: { 'User-Agent': 'ComPrice/1.0 (doublegil@gmail.com)' },
  })
  if (!res.ok) throw new Error('שגיאת רשת בגיאוקודינג')

  const data = await res.json()
  if (!data.length) throw new Error('לא נמצאה כתובת — נסה להיות יותר ספציפי')

  const first = data[0]
  return {
    lat: parseFloat(first.lat),
    lng: parseFloat(first.lon),
    label: first.display_name.split(',').slice(0, 3).join(', '),
  }
}
