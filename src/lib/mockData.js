// נתוני דמו — מוצרים, חנויות ומחירים לדוגמה

export const CHAINS = {
  shufersal: { name: 'שופרסל', color: '#e31b23', logo: '🛒' },
  ramilevi: { name: 'רמי לוי', color: '#0057a8', logo: '🏪' },
  mega: { name: 'מגה', color: '#f97316', logo: '🏬' },
  victory: { name: 'ויקטורי', color: '#7c3aed', logo: '🏷️' },
  yeinot: { name: 'יינות ביתן', color: '#b45309', logo: '🍷' },
}

export const STORES = [
  // תל אביב והמרכז
  { id: 1,  chain: 'shufersal', branch: 'שופרסל דיל תל אביב - דיזנגוף',   address: 'דיזנגוף 50, תל אביב',          lat: 32.0809, lng: 34.7740 },
  { id: 2,  chain: 'ramilevi',  branch: 'רמי לוי גבעתיים',                 address: 'קוסמאי 2, גבעתיים',            lat: 32.0685, lng: 34.8125 },
  { id: 3,  chain: 'mega',      branch: 'מגה בול רמת גן',                  address: 'ביאליק 40, רמת גן',            lat: 32.0853, lng: 34.8227 },
  { id: 4,  chain: 'victory',   branch: 'ויקטורי תל אביב - הצפון',         address: 'אבן גבירול 105, תל אביב',      lat: 32.0908, lng: 34.7812 },
  { id: 5,  chain: 'shufersal', branch: 'שופרסל אקספרס רמת החייל',         address: 'שדרות המעיין 6, תל אביב',      lat: 32.1103, lng: 34.8324 },
  { id: 6,  chain: 'yeinot',    branch: 'יינות ביתן ראשון לציון',          address: 'הרצל 74, ראשון לציון',         lat: 31.9629, lng: 34.8010 },
  { id: 7,  chain: 'mega',      branch: 'מגה בול פתח תקווה',               address: 'ז\'בוטינסקי 7, פתח תקווה',    lat: 32.0879, lng: 34.8874 },
  { id: 8,  chain: 'ramilevi',  branch: 'רמי לוי חולון',                   address: 'סוקולוב 100, חולון',           lat: 32.0176, lng: 34.7769 },
  { id: 9,  chain: 'victory',   branch: 'ויקטורי נתניה - עיר ימים',        address: 'רבין 15, נתניה',               lat: 32.3215, lng: 34.8532 },
  { id: 10, chain: 'shufersal', branch: 'שופרסל דיל כפר סבא',             address: 'ויצמן 26, כפר סבא',            lat: 32.1754, lng: 34.9077 },
  // ירושלים
  { id: 11, chain: 'shufersal', branch: 'שופרסל דיל ירושלים - מלחה',      address: 'קניון מלחה, ירושלים',          lat: 31.7476, lng: 35.1883 },
  { id: 12, chain: 'ramilevi',  branch: 'רמי לוי ירושלים - תלפיות',       address: 'פייר קניג 6, ירושלים',         lat: 31.7523, lng: 35.2198 },
  { id: 13, chain: 'mega',      branch: 'מגה ירושלים - גילה',              address: 'גילה, ירושלים',                lat: 31.7300, lng: 35.1700 },
  { id: 14, chain: 'victory',   branch: 'ויקטורי ירושלים - גבעת שאול',    address: 'גבעת שאול, ירושלים',           lat: 31.7860, lng: 35.1780 },
  // חיפה והצפון
  { id: 15, chain: 'shufersal', branch: 'שופרסל דיל חיפה - הקריות',       address: 'חוצות המפרץ, קריית ביאליק',   lat: 32.8340, lng: 35.0820 },
  { id: 16, chain: 'ramilevi',  branch: 'רמי לוי חיפה - קניון לב',        address: 'קניון לב המפרץ, חיפה',         lat: 32.8184, lng: 35.0037 },
  { id: 17, chain: 'mega',      branch: 'מגה נהריה',                       address: 'גאולה 1, נהריה',               lat: 33.0050, lng: 35.0970 },
  // באר שבע והנגב
  { id: 18, chain: 'shufersal', branch: 'שופרסל דיל באר שבע - גרנד',     address: 'קניון גרנד, באר שבע',           lat: 31.2530, lng: 34.7920 },
  { id: 19, chain: 'ramilevi',  branch: 'רמי לוי באר שבע',                address: 'נחל עשן 1, באר שבע',           lat: 31.2601, lng: 34.7992 },
  { id: 20, chain: 'yeinot',    branch: 'יינות ביתן אשדוד',               address: 'יצחק רגר 4, אשדוד',            lat: 31.8044, lng: 34.6553 },
]

export const PRODUCTS = [
  // ── מוצרי חלב ──
  { id: 1,  barcode: '7290000066622', name: 'חלב תנובה 3% שומן',           brand: 'תנובה',   category: 'מוצרי חלב',    unit: '1 ליטר',     image: '🥛' },
  { id: 5,  barcode: '7290000694870', name: 'קוטג׳ 5% שומן',               brand: 'תנובה',   category: 'מוצרי חלב',    unit: '250 גרם',    image: '🧀' },
  { id: 7,  barcode: '7290005266564', name: 'יוגורט פרי תפוח-שזיף',        brand: 'דנונה',   category: 'מוצרי חלב',    unit: '150 גרם',    image: '🍶' },
  { id: 11, barcode: '7290000066639', name: 'חלב גולדן 1% שומן',           brand: 'תנובה',   category: 'מוצרי חלב',    unit: '1 ליטר',     image: '🥛' },
  { id: 12, barcode: '7290000066646', name: 'שמנת מתוקה 38%',              brand: 'תנובה',   category: 'מוצרי חלב',    unit: '250 מ״ל',   image: '🫙' },
  { id: 13, barcode: '7290000066653', name: 'גבינה צהובה גאודה פרוסה',     brand: 'תנובה',   category: 'גבינות',        unit: '200 גרם',    image: '🧀' },
  { id: 14, barcode: '7290000066660', name: 'גבינה לבנה 5%',               brand: 'תנובה',   category: 'גבינות',        unit: '250 גרם',    image: '🫙' },
  { id: 15, barcode: '7290000066677', name: 'חמאה מלוחה',                  brand: 'תנובה',   category: 'מוצרי חלב',    unit: '200 גרם',    image: '🧈' },

  // ── לחם ומאפים ──
  { id: 2,  barcode: '7290107235592', name: 'לחם אחיד פרוס',               brand: 'תנובה',   category: 'לחם ומאפים',   unit: 'כיכר',       image: '🍞' },
  { id: 16, barcode: '7290107235609', name: 'לחם שיפון כהה',               brand: 'אחלה',    category: 'לחם ומאפים',   unit: 'כיכר',       image: '🍞' },
  { id: 17, barcode: '7290107235616', name: 'פיתות מחיטה מלאה 6 יחידות',  brand: 'אחלה',    category: 'לחם ומאפים',   unit: 'שקית',       image: '🫓' },
  { id: 18, barcode: '7290107235623', name: 'לחמניות שומשום 6 יחידות',     brand: 'לחם הארץ',category: 'לחם ומאפים',   unit: 'שקית',       image: '🍞' },

  // ── ירקות ──
  { id: 6,  barcode: '0000000000061', name: 'עגבניות שרי',                 brand: 'תוצרת הארץ', category: 'ירקות',     unit: '500 גרם',    image: '🍅' },
  { id: 20, barcode: '0000000000201', name: 'עגבניות שדה',                 brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🍅' },
  { id: 21, barcode: '0000000000211', name: 'מלפפון',                      brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🥒' },
  { id: 22, barcode: '0000000000221', name: 'פלפל אדום',                   brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🫑' },
  { id: 23, barcode: '0000000000231', name: 'פלפל צהוב',                   brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🫑' },
  { id: 24, barcode: '0000000000241', name: 'גזר',                         brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🥕' },
  { id: 25, barcode: '0000000000251', name: 'בצל',                         brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🧅' },
  { id: 26, barcode: '0000000000261', name: 'שום',                         brand: 'תוצרת הארץ', category: 'ירקות',     unit: '250 גרם',    image: '🧄' },
  { id: 27, barcode: '0000000000271', name: 'חסה איסבג',                   brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'יחידה',      image: '🥬' },
  { id: 28, barcode: '0000000000281', name: 'ברוקולי',                     brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'יחידה',      image: '🥦' },
  { id: 29, barcode: '0000000000291', name: 'כרובית',                      brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'יחידה',      image: '🥦' },
  { id: 30, barcode: '0000000000301', name: 'תפוח אדמה',                   brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🥔' },
  { id: 31, barcode: '0000000000311', name: 'בטטה',                        brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🍠' },
  { id: 32, barcode: '0000000000321', name: 'זוקיני',                      brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🥒' },
  { id: 33, barcode: '0000000000331', name: 'חצילים',                      brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'ק״ג',        image: '🍆' },
  { id: 34, barcode: '0000000000341', name: 'אפונה ירוקה קפואה',           brand: 'סנפרוסט',    category: 'ירקות',     unit: '500 גרם',    image: '🟢' },
  { id: 35, barcode: '0000000000351', name: 'תירס מתוק',                   brand: 'תוצרת הארץ', category: 'ירקות',     unit: 'יחידה',      image: '🌽' },

  // ── פירות ──
  { id: 40, barcode: '0000000000401', name: 'תפוחי גרנד סמיט',            brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍏' },
  { id: 41, barcode: '0000000000411', name: 'תפוחי פינק ליידי',            brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍎' },
  { id: 42, barcode: '0000000000421', name: 'בננות',                       brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍌' },
  { id: 43, barcode: '0000000000431', name: 'תפוזים',                      brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍊' },
  { id: 44, barcode: '0000000000441', name: 'לימונים',                     brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍋' },
  { id: 45, barcode: '0000000000451', name: 'ענבים אדומים',                brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍇' },
  { id: 46, barcode: '0000000000461', name: 'ענבים ירוקים',                brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍇' },
  { id: 47, barcode: '0000000000471', name: 'אבטיח',                       brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍉' },
  { id: 48, barcode: '0000000000481', name: 'מלון',                        brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍈' },
  { id: 49, barcode: '0000000000491', name: 'תותים',                       brand: 'תוצרת הארץ', category: 'פירות',      unit: '250 גרם',    image: '🍓' },
  { id: 50, barcode: '0000000000501', name: 'אבוקדו',                      brand: 'תוצרת הארץ', category: 'פירות',      unit: 'יחידה',      image: '🥑' },
  { id: 51, barcode: '0000000000511', name: 'מנגו אלפונסו',                brand: 'תוצרת הארץ', category: 'פירות',      unit: 'יחידה',      image: '🥭' },
  { id: 52, barcode: '0000000000521', name: 'אנניס',                       brand: 'תוצרת הארץ', category: 'פירות',      unit: 'יחידה',      image: '🍍' },
  { id: 53, barcode: '0000000000531', name: 'קלמנטינות',                   brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍊' },
  { id: 54, barcode: '0000000000541', name: 'אפרסקים',                     brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍑' },
  { id: 55, barcode: '0000000000551', name: 'שזיפים',                      brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🫐' },
  { id: 56, barcode: '0000000000561', name: 'אגסים',                       brand: 'תוצרת הארץ', category: 'פירות',      unit: 'ק״ג',        image: '🍐' },

  // ── בשר ועוף ──
  { id: 10, barcode: '7290009876543', name: 'חזה עוף טרי',                 brand: 'עוף טוב',    category: 'בשר ועוף',  unit: 'ק״ג',        image: '🍗' },
  { id: 60, barcode: '7290009876550', name: 'שוקיים עוף',                  brand: 'עוף טוב',    category: 'בשר ועוף',  unit: 'ק״ג',        image: '🍗' },
  { id: 61, barcode: '7290009876567', name: 'כנפיים עוף',                  brand: 'עוף טוב',    category: 'בשר ועוף',  unit: 'ק״ג',        image: '🍗' },
  { id: 62, barcode: '7290009876574', name: 'בשר טחון בקר 80%',           brand: 'מוסרה',      category: 'בשר ועוף',  unit: 'ק״ג',        image: '🥩' },
  { id: 63, barcode: '7290009876581', name: 'אנטריקוט בקר טרי',           brand: 'מוסרה',      category: 'בשר ועוף',  unit: 'ק״ג',        image: '🥩' },

  // ── דגים ──
  { id: 70, barcode: '7290001111110', name: 'פילה סלמון טרי',              brand: 'טוב טעם',    category: 'דגים',       unit: 'ק״ג',        image: '🐟' },
  { id: 71, barcode: '7290001111127', name: 'פילה דניס טרי',               brand: 'טוב טעם',    category: 'דגים',       unit: 'ק״ג',        image: '🐟' },
  { id: 72, barcode: '7290001111134', name: 'טונה בשמן זית שימורים',       brand: 'כרמית',      category: 'דגים',       unit: '170 גרם',    image: '🐟' },

  // ── ביצים ──
  { id: 3,  barcode: '7290000696874', name: 'ביצים L גדולות 12 יחידות',   brand: 'אגמון',      category: 'ביצים',      unit: 'קרטון',      image: '🥚' },
  { id: 80, barcode: '7290000696881', name: 'ביצים XL ענק 12 יחידות',     brand: 'אגמון',      category: 'ביצים',      unit: 'קרטון',      image: '🥚' },

  // ── שמנים ומרכיבים ──
  { id: 4,  barcode: '7290004534213', name: 'שמן זית כתית מעולה',          brand: 'יד מרדכי',  category: 'שמנים',      unit: '750 מ״ל',   image: '🫒' },
  { id: 90, barcode: '7290004534220', name: 'שמן קנולה',                   brand: 'שמן טוב',   category: 'שמנים',      unit: '1 ליטר',     image: '🫙' },
  { id: 91, barcode: '7290004534237', name: 'סוכר לבן',                    brand: 'שוגר לייף', category: 'מרכיבים',    unit: 'ק״ג',        image: '🍬' },
  { id: 92, barcode: '7290004534244', name: 'קמח לבן',                     brand: 'שבולת',     category: 'מרכיבים',    unit: 'ק״ג',        image: '🌾' },
  { id: 93, barcode: '7290004534251', name: 'אורז בסמטי',                  brand: 'ריצ׳מן',    category: 'פסטה ואורז', unit: 'ק״ג',        image: '🍚' },

  // ── פסטה ──
  { id: 8,  barcode: '7290000689419', name: 'פסטה ספגטי',                  brand: 'ברילה',     category: 'פסטה ואורז', unit: '500 גרם',    image: '🍝' },
  { id: 94, barcode: '7290000689426', name: 'פסטה פנה',                    brand: 'ברילה',     category: 'פסטה ואורז', unit: '500 גרם',    image: '🍝' },
  { id: 95, barcode: '7290000689433', name: 'פסטה פרפרים',                 brand: 'ברילה',     category: 'פסטה ואורז', unit: '500 גרם',    image: '🍝' },

  // ── שתייה ──
  { id: 9,  barcode: '7290001234567', name: 'מים מינרלים',                 brand: 'נביעות',    category: 'שתייה',      unit: '1.5 ליטר',   image: '💧' },
  { id: 100,barcode: '7290001234574', name: 'מים מינרלים',                 brand: 'מי עדן',    category: 'שתייה',      unit: '1.5 ליטר',   image: '💧' },
  { id: 101,barcode: '7290001234581', name: 'קולה',                        brand: 'קוקה קולה', category: 'שתייה',      unit: '1.5 ליטר',   image: '🥤' },
  { id: 102,barcode: '7290001234598', name: 'מיץ תפוזים סחוט',             brand: 'טרופיקנה',  category: 'שתייה',      unit: '1 ליטר',     image: '🧃' },
  { id: 103,barcode: '7290001234604', name: 'קפה נמס',                     brand: 'נסקפה',     category: 'שתייה',      unit: '200 גרם',    image: '☕' },
  { id: 104,barcode: '7290001234611', name: 'תה ירוק',                     brand: 'ויסוצקי',   category: 'שתייה',      unit: '25 שקיות',   image: '🍵' },

  // ── חטיפים ומתוקים ──
  { id: 110,barcode: '7290002222201', name: 'שוקולד מריר 70%',             brand: 'עלית',      category: 'מתוקים',     unit: '100 גרם',    image: '🍫' },
  { id: 111,barcode: '7290002222218', name: 'במבה',                        brand: 'אסם',       category: 'חטיפים',     unit: '80 גרם',     image: '🍿' },
  { id: 112,barcode: '7290002222225', name: 'ביסלי גריל',                  brand: 'אסם',       category: 'חטיפים',     unit: '70 גרם',     image: '🍿' },
  { id: 113,barcode: '7290002222232', name: 'דבש טבעי',                    brand: 'יד מרדכי',  category: 'מתוקים',     unit: '500 גרם',    image: '🍯' },

  // ── ניקיון ──
  { id: 120,barcode: '7290003333301', name: 'אבקת כביסה',                  brand: 'אריאל',     category: 'ניקיון',     unit: '3 ק״ג',      image: '🧺' },
  { id: 121,barcode: '7290003333318', name: 'נוזל כלים',                   brand: 'פיירי',     category: 'ניקיון',     unit: '500 מ״ל',   image: '🧴' },
  { id: 122,barcode: '7290003333325', name: 'נייר טואלט 10 גלילות',        brand: 'נגה',       category: 'ניקיון',     unit: '10 גלילות',  image: '🧻' },
]

// יצירת מחירים אוטומטית לכל 20 החנויות
function makePrices(base) {
  const v = base * 0.22
  const mults = [0.3, -0.6, 0.1, 0.5, 0.3, -0.2, -0.4, -0.7, 0.4, 0.2, 0.35, -0.5, 0.15, -0.3, 0.45, -0.1, 0.25, -0.65, 0.0, -0.4]
  return mults.map((m, i) => ({
    storeId: i + 1,
    price: Math.max(0.5, Math.round((base + v * m) * 10) / 10),
  }))
}

// מחירים לכל מוצר בכל חנות
export const PRICES = {
  // חלב תנובה
  1: [
    { storeId: 1, price: 6.90 },
    { storeId: 2, price: 5.90 },
    { storeId: 3, price: 6.50 },
    { storeId: 4, price: 7.20 },
    { storeId: 5, price: 6.90 },
    { storeId: 6, price: 6.30 },
    { storeId: 7, price: 6.10 },
    { storeId: 8, price: 5.80 },
  ],
  // לחם אחיד
  2: [
    { storeId: 1, price: 7.50 },
    { storeId: 2, price: 6.90 },
    { storeId: 3, price: 7.20 },
    { storeId: 4, price: 7.80 },
    { storeId: 5, price: 7.50 },
    { storeId: 6, price: 7.10 },
    { storeId: 7, price: 6.80 },
    { storeId: 8, price: 7.00 },
  ],
  // ביצים
  3: [
    { storeId: 1, price: 19.90 },
    { storeId: 2, price: 16.90 },
    { storeId: 3, price: 18.50 },
    { storeId: 4, price: 20.50 },
    { storeId: 5, price: 19.90 },
    { storeId: 6, price: 18.90 },
    { storeId: 7, price: 17.50 },
    { storeId: 8, price: 16.50 },
  ],
  // שמן זית
  4: [
    { storeId: 1, price: 39.90 },
    { storeId: 2, price: 34.90 },
    { storeId: 3, price: 37.50 },
    { storeId: 4, price: 42.00 },
    { storeId: 5, price: 39.90 },
    { storeId: 6, price: 36.90 },
    { storeId: 7, price: 35.50 },
    { storeId: 8, price: 33.90 },
  ],
  // קוטג'
  5: [
    { storeId: 1, price: 8.90 },
    { storeId: 2, price: 7.50 },
    { storeId: 3, price: 8.20 },
    { storeId: 4, price: 9.10 },
    { storeId: 5, price: 8.90 },
    { storeId: 6, price: 8.30 },
    { storeId: 7, price: 7.90 },
    { storeId: 8, price: 7.40 },
  ],
  // עגבניות שרי
  6: [
    { storeId: 1, price: 14.90 },
    { storeId: 2, price: 12.90 },
    { storeId: 3, price: 13.50 },
    { storeId: 4, price: 15.50 },
    { storeId: 5, price: 14.90 },
    { storeId: 6, price: 13.90 },
    { storeId: 7, price: 12.50 },
    { storeId: 8, price: 12.00 },
  ],
  // יוגורט
  7: [
    { storeId: 1, price: 5.90 },
    { storeId: 2, price: 4.90 },
    { storeId: 3, price: 5.50 },
    { storeId: 4, price: 6.20 },
    { storeId: 5, price: 5.90 },
    { storeId: 6, price: 5.40 },
    { storeId: 7, price: 5.10 },
    { storeId: 8, price: 4.80 },
  ],
  // פסטה
  8: [
    { storeId: 1, price: 9.90 },
    { storeId: 2, price: 8.50 },
    { storeId: 3, price: 9.20 },
    { storeId: 4, price: 10.50 },
    { storeId: 5, price: 9.90 },
    { storeId: 6, price: 9.10 },
    { storeId: 7, price: 8.80 },
    { storeId: 8, price: 8.30 },
  ],
  // מים מינרלים
  9: [
    { storeId: 1, price: 4.50 },
    { storeId: 2, price: 3.90 },
    { storeId: 3, price: 4.20 },
    { storeId: 4, price: 4.80 },
    { storeId: 5, price: 4.50 },
    { storeId: 6, price: 4.10 },
    { storeId: 7, price: 3.80 },
    { storeId: 8, price: 3.70 },
  ],
  // חזה עוף
  10: [
    { storeId: 1, price: 39.90 },
    { storeId: 2, price: 34.90 },
    { storeId: 3, price: 37.90 },
    { storeId: 4, price: 41.00 },
    { storeId: 5, price: 39.90 },
    { storeId: 6, price: 36.90 },
    { storeId: 7, price: 35.50 },
    { storeId: 8, price: 33.50 },
  ],
  // מוצרי חלב נוספים
  11: makePrices(6.5),
  12: makePrices(12.9),
  13: makePrices(18.9),
  14: makePrices(9.9),
  15: makePrices(14.9),
  // לחם ומאפים
  16: makePrices(8.9),
  17: makePrices(7.5),
  18: makePrices(9.9),
  // ירקות
  20: makePrices(7.9),
  21: makePrices(4.9),
  22: makePrices(12.9),
  23: makePrices(12.9),
  24: makePrices(5.9),
  25: makePrices(4.9),
  26: makePrices(6.9),
  27: makePrices(5.9),
  28: makePrices(9.9),
  29: makePrices(8.9),
  30: makePrices(4.9),
  31: makePrices(6.9),
  32: makePrices(7.9),
  33: makePrices(8.9),
  34: makePrices(8.9),
  35: makePrices(4.9),
  // פירות
  40: makePrices(9.9),
  41: makePrices(11.9),
  42: makePrices(7.9),
  43: makePrices(8.9),
  44: makePrices(7.9),
  45: makePrices(19.9),
  46: makePrices(17.9),
  47: makePrices(4.9),
  48: makePrices(9.9),
  49: makePrices(14.9),
  50: makePrices(5.9),
  51: makePrices(9.9),
  52: makePrices(12.9),
  53: makePrices(9.9),
  54: makePrices(12.9),
  55: makePrices(14.9),
  56: makePrices(11.9),
  // בשר ועוף
  60: makePrices(28.9),
  61: makePrices(22.9),
  62: makePrices(42.9),
  63: makePrices(89.9),
  // דגים
  70: makePrices(79.9),
  71: makePrices(59.9),
  72: makePrices(12.9),
  // ביצים
  80: makePrices(22.9),
  // שמנים ומרכיבים
  90: makePrices(14.9),
  91: makePrices(8.9),
  92: makePrices(7.9),
  93: makePrices(18.9),
  // פסטה
  94: makePrices(9.9),
  95: makePrices(9.9),
  // שתייה
  100: makePrices(4.2),
  101: makePrices(7.9),
  102: makePrices(12.9),
  103: makePrices(29.9),
  104: makePrices(14.9),
  // חטיפים ומתוקים
  110: makePrices(8.9),
  111: makePrices(4.9),
  112: makePrices(4.9),
  113: makePrices(29.9),
  // ניקיון
  120: makePrices(49.9),
  121: makePrices(12.9),
  122: makePrices(19.9),
}

// היסטוריית מחירים לגרף (6 חודשים אחרונים)
export const PRICE_HISTORY = {
  1: [ // חלב תנובה
    { month: 'דצמבר', shufersal: 6.50, ramilevi: 5.50, mega: 6.10 },
    { month: 'ינואר', shufersal: 6.50, ramilevi: 5.70, mega: 6.20 },
    { month: 'פברואר', shufersal: 6.90, ramilevi: 5.80, mega: 6.30 },
    { month: 'מרץ', shufersal: 6.90, ramilevi: 5.80, mega: 6.40 },
    { month: 'אפריל', shufersal: 6.90, ramilevi: 5.90, mega: 6.50 },
    { month: 'מאי', shufersal: 6.90, ramilevi: 5.90, mega: 6.50 },
  ],
}

// חישוב מרחק בין שתי נקודות GPS (קילומטרים)
export function calcDistance(lat1, lng1, lat2, lng2) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// מוצרים לפי חיפוש (שם + מותג + קטגוריה + ברקוד)
export function searchProducts(query) {
  const q = query.trim()
  if (!q) return []
  return PRODUCTS.filter(
    (p) =>
      p.name.includes(q) ||
      p.barcode.includes(q) ||
      p.category.includes(q) ||
      (p.brand && p.brand.includes(q))
  )
}

// מחירים של מוצר לפי חנויות בטווח
export function getPricesNearby(productId, userLat, userLng, radiusKm) {
  const prices = PRICES[productId] || []
  return prices
    .map((p) => {
      const store = STORES.find((s) => s.id === p.storeId)
      if (!store) return null
      const distance = calcDistance(userLat, userLng, store.lat, store.lng)
      if (distance > radiusKm) return null
      return {
        ...p,
        store,
        chain: CHAINS[store.chain],
        distance: Math.round(distance * 10) / 10,
      }
    })
    .filter(Boolean)
    .sort((a, b) => a.price - b.price)
}
