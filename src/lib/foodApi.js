// Open Food Facts API — מאגר מיליוני מוצרי מזון חינמי
const OFF_BASE = 'https://world.openfoodfacts.org'
const OFF_IL = 'https://il.openfoodfacts.org'

// חיפוש מוצרים לפי שם (עברית + אנגלית)
export async function searchFoodProducts(query) {
  try {
    const url = `${OFF_BASE}/cgi/search.pl?action=process&search_terms=${encodeURIComponent(query)}&json=1&page_size=20&fields=code,product_name,product_name_he,brands,categories_tags,quantity,image_front_small_url,nutriscore_grade`
    const res = await fetch(url)
    if (!res.ok) throw new Error('שגיאת רשת')
    const data = await res.json()
    return (data.products || [])
      .filter((p) => p.product_name || p.product_name_he)
      .map(normalizeProduct)
  } catch {
    return []
  }
}

// חיפוש לפי ברקוד
export async function getProductByBarcode(barcode) {
  try {
    const url = `${OFF_BASE}/api/v2/product/${barcode}.json?fields=code,product_name,product_name_he,brands,categories_tags,quantity,image_front_small_url,nutriscore_grade`
    const res = await fetch(url)
    if (!res.ok) throw new Error('לא נמצא')
    const data = await res.json()
    if (data.status !== 1) return null
    return normalizeProduct(data.product)
  } catch {
    return null
  }
}

// נרמול מוצר מה-API לפורמט אחיד
function normalizeProduct(p) {
  const name = p.product_name_he || p.product_name || 'מוצר לא מזוהה'
  const category = getCategoryHebrew(p.categories_tags)
  const emoji = getCategoryEmoji(p.categories_tags, name)

  return {
    id: `off_${p.code}`,
    barcode: p.code || '',
    name,
    brand: p.brands || '',
    category,
    unit: p.quantity || 'יחידה',
    image: emoji,
    imageUrl: p.image_front_small_url || null,
    source: 'openfoodfacts',
  }
}

// קטגוריה לעברית
function getCategoryHebrew(tags = []) {
  const map = {
    'en:milks': 'מוצרי חלב',
    'en:dairy': 'מוצרי חלב',
    'en:yogurts': 'יוגורט',
    'en:cheeses': 'גבינות',
    'en:breads': 'לחם ומאפים',
    'en:cereals': 'דגנים',
    'en:meats': 'בשר',
    'en:poultry': 'עוף',
    'en:fish': 'דגים',
    'en:vegetables': 'ירקות',
    'en:fruits': 'פירות',
    'en:beverages': 'שתייה',
    'en:juices': 'מיצים',
    'en:snacks': 'חטיפים',
    'en:chocolates': 'שוקולד',
    'en:pastas': 'פסטה ואורז',
    'en:oils': 'שמנים',
    'en:eggs': 'ביצים',
    'en:frozen-foods': 'קפואים',
    'en:cleaning-products': 'ניקיון',
  }
  for (const tag of tags || []) {
    if (map[tag]) return map[tag]
  }
  return 'מזון כללי'
}

// אמוג\'י לפי קטגוריה
function getCategoryEmoji(tags = [], name = '') {
  const n = name.toLowerCase()
  if (n.includes('חלב') || n.includes('milk')) return '🥛'
  if (n.includes('לחם') || n.includes('bread')) return '🍞'
  if (n.includes('ביצ')) return '🥚'
  if (n.includes('שמן')) return '🫒'
  if (n.includes('קוטג') || n.includes('גבינ')) return '🧀'
  if (n.includes('עגבני') || n.includes('tomato')) return '🍅'
  if (n.includes('יוגורט') || n.includes('yogurt')) return '🍶'
  if (n.includes('פסטה') || n.includes('pasta')) return '🍝'
  if (n.includes('מים') || n.includes('water')) return '💧'
  if (n.includes('עוף') || n.includes('chicken')) return '🍗'
  if (n.includes('בשר') || n.includes('meat')) return '🥩'
  if (n.includes('דג') || n.includes('fish')) return '🐟'
  if (n.includes('תפוח') || n.includes('apple')) return '🍎'
  if (n.includes('בננ') || n.includes('banana')) return '🍌'
  if (n.includes('שוקו') || n.includes('chocolate')) return '🍫'
  if (n.includes('קפה') || n.includes('coffee')) return '☕'
  if (n.includes('תה') || n.includes('tea')) return '🍵'
  if (n.includes('מיץ') || n.includes('juice')) return '🧃'
  if (n.includes('בירה') || n.includes('beer')) return '🍺'
  if (n.includes('יין') || n.includes('wine')) return '🍷'
  if ((tags || []).some(t => t.includes('dairy'))) return '🥛'
  if ((tags || []).some(t => t.includes('vegetable'))) return '🥦'
  if ((tags || []).some(t => t.includes('fruit'))) return '🍎'
  if ((tags || []).some(t => t.includes('snack'))) return '🍿'
  return '🛒'
}
