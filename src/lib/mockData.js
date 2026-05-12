// נתוני דמו — מוצרים, חנויות ומחירים לדוגמה

export const CHAINS = {
  shufersal: { name: 'שופרסל',     color: '#e31b23', logo: '🛒' },
  ramilevi:  { name: 'רמי לוי',    color: '#0057a8', logo: '🏪' },
  mega:      { name: 'מגה',        color: '#f97316', logo: '🏬' },
  victory:   { name: 'ויקטורי',    color: '#7c3aed', logo: '🏷️' },
  yeinot:    { name: 'יינות ביתן', color: '#b45309', logo: '🍷' },
  yohananof: { name: 'יוחננוף',    color: '#16a34a', logo: '🟢' },
  osher:     { name: 'אושר עד',    color: '#dc2626', logo: '⭐' },
}

export const STORES = [
  // ── גוש דן ותל אביב ──
  { id:  1, chain: 'shufersal', branch: 'שופרסל דיל תל אביב - דיזנגוף',  address: 'דיזנגוף 50, תל אביב',        lat: 32.0809, lng: 34.7740 },
  { id:  2, chain: 'ramilevi',  branch: 'רמי לוי גבעתיים',                address: 'קוסמאי 2, גבעתיים',          lat: 32.0685, lng: 34.8125 },
  { id:  3, chain: 'mega',      branch: 'מגה בול רמת גן',                 address: 'ביאליק 40, רמת גן',          lat: 32.0853, lng: 34.8227 },
  { id:  4, chain: 'victory',   branch: 'ויקטורי תל אביב - הצפון',        address: 'אבן גבירול 105, תל אביב',    lat: 32.0908, lng: 34.7812 },
  { id:  5, chain: 'shufersal', branch: 'שופרסל אקספרס רמת החייל',        address: 'שדרות המעיין 6, תל אביב',    lat: 32.1103, lng: 34.8324 },
  { id:  6, chain: 'yeinot',    branch: 'יינות ביתן ראשון לציון',          address: 'הרצל 74, ראשון לציון',       lat: 31.9629, lng: 34.8010 },
  { id:  7, chain: 'mega',      branch: 'מגה בול פתח תקווה',              address: "ז'בוטינסקי 7, פתח תקווה",   lat: 32.0879, lng: 34.8874 },
  { id:  8, chain: 'ramilevi',  branch: 'רמי לוי חולון',                  address: 'סוקולוב 100, חולון',         lat: 32.0176, lng: 34.7769 },
  { id:  9, chain: 'osher',     branch: 'אושר עד תל אביב - לב העיר',      address: 'אלנבי 50, תל אביב',          lat: 32.0700, lng: 34.7820 },
  { id: 10, chain: 'yohananof', branch: 'יוחננוף תל אביב - פלורנטין',     address: 'וולפסון 2, תל אביב',         lat: 32.0570, lng: 34.7730 },
  { id: 11, chain: 'victory',   branch: 'ויקטורי בת ים',                  address: 'בן גוריון 50, בת ים',        lat: 32.0200, lng: 34.7500 },
  { id: 12, chain: 'shufersal', branch: 'שופרסל דיל ראשון לציון',         address: 'רוטשילד 20, ראשון לציון',    lat: 31.9700, lng: 34.8000 },
  { id: 13, chain: 'osher',     branch: 'אושר עד חולון',                  address: "ז'בוטינסקי 30, חולון",       lat: 32.0100, lng: 34.7720 },
  { id: 14, chain: 'yohananof', branch: 'יוחננוף גבעת שמואל',             address: 'ויצמן 1, גבעת שמואל',       lat: 32.0760, lng: 34.8480 },
  { id: 15, chain: 'mega',      branch: 'מגה בול כפר סבא',                address: 'ויצמן 10, כפר סבא',          lat: 32.1730, lng: 34.9070 },
  // ── שרון ומרכז ──
  { id: 16, chain: 'ramilevi',  branch: 'רמי לוי נתניה',                  address: 'הרצל 12, נתניה',             lat: 32.3300, lng: 34.8570 },
  { id: 17, chain: 'shufersal', branch: 'שופרסל דיל כפר סבא',            address: 'ויצמן 26, כפר סבא',          lat: 32.1754, lng: 34.9077 },
  { id: 18, chain: 'yeinot',    branch: 'יינות ביתן הרצליה',              address: 'סוקולוב 2, הרצליה',          lat: 32.1580, lng: 34.8430 },
  { id: 19, chain: 'yohananof', branch: 'יוחננוף רעננה',                  address: 'אחוזה 50, רעננה',            lat: 32.1840, lng: 34.8710 },
  { id: 20, chain: 'victory',   branch: 'ויקטורי נתניה - עיר ימים',       address: 'רבין 15, נתניה',             lat: 32.3215, lng: 34.8532 },
  // ── ירושלים ──
  { id: 21, chain: 'shufersal', branch: 'שופרסל דיל ירושלים - מלחה',     address: 'קניון מלחה, ירושלים',        lat: 31.7476, lng: 35.1883 },
  { id: 22, chain: 'ramilevi',  branch: 'רמי לוי ירושלים - תלפיות',      address: 'פייר קניג 6, ירושלים',       lat: 31.7523, lng: 35.2198 },
  { id: 23, chain: 'mega',      branch: 'מגה ירושלים - גילה',             address: 'גילה, ירושלים',              lat: 31.7300, lng: 35.1700 },
  { id: 24, chain: 'victory',   branch: 'ויקטורי ירושלים - גבעת שאול',   address: 'גבעת שאול, ירושלים',         lat: 31.7860, lng: 35.1780 },
  { id: 25, chain: 'osher',     branch: 'אושר עד ירושלים - מרכז',         address: 'יפו 100, ירושלים',           lat: 31.7780, lng: 35.2200 },
  { id: 26, chain: 'yeinot',    branch: 'יינות ביתן ירושלים - קטמון',     address: 'עזה 5, ירושלים',             lat: 31.7600, lng: 35.2100 },
  { id: 27, chain: 'yohananof', branch: 'יוחננוף ירושלים - רמות',         address: 'גולדברג 3, ירושלים',         lat: 31.8200, lng: 35.2000 },
  { id: 28, chain: 'ramilevi',  branch: 'רמי לוי מעלה אדומים',            address: 'יצחק רבין, מעלה אדומים',    lat: 31.7800, lng: 35.2990 },
  // ── חיפה והצפון ──
  { id: 29, chain: 'shufersal', branch: 'שופרסל דיל חיפה - הקריות',      address: 'חוצות המפרץ, קריית ביאליק', lat: 32.8340, lng: 35.0820 },
  { id: 30, chain: 'ramilevi',  branch: 'רמי לוי חיפה - קניון לב',       address: 'קניון לב המפרץ, חיפה',       lat: 32.8184, lng: 35.0037 },
  { id: 31, chain: 'mega',      branch: 'מגה נהריה',                      address: 'גאולה 1, נהריה',             lat: 33.0050, lng: 35.0970 },
  { id: 32, chain: 'victory',   branch: 'ויקטורי חיפה - הדר',             address: 'הנביאים 40, חיפה',           lat: 32.8100, lng: 35.0000 },
  { id: 33, chain: 'yohananof', branch: 'יוחננוף קריית אתא',              address: 'אחד העם 5, קריית אתא',      lat: 32.7960, lng: 35.1080 },
  { id: 34, chain: 'osher',     branch: 'אושר עד עכו',                    address: 'בן עמי 20, עכו',             lat: 32.9240, lng: 35.0760 },
  { id: 35, chain: 'yeinot',    branch: 'יינות ביתן קריית שמונה',          address: 'תל חי 1, קריית שמונה',      lat: 33.2070, lng: 35.5710 },
  { id: 36, chain: 'shufersal', branch: 'שופרסל דיל טבריה',               address: 'הגליל 10, טבריה',            lat: 32.7940, lng: 35.5310 },
  { id: 37, chain: 'yohananof', branch: 'יוחננוף נוף הגליל',              address: 'המלאכה 3, נוף הגליל',       lat: 32.7040, lng: 35.3270 },
  // ── באר שבע והנגב ──
  { id: 38, chain: 'shufersal', branch: 'שופרסל דיל באר שבע - גרנד',     address: 'קניון גרנד, באר שבע',        lat: 31.2530, lng: 34.7920 },
  { id: 39, chain: 'ramilevi',  branch: 'רמי לוי באר שבע',                address: 'נחל עשן 1, באר שבע',         lat: 31.2601, lng: 34.7992 },
  { id: 40, chain: 'yeinot',    branch: 'יינות ביתן אשדוד',               address: 'יצחק רגר 4, אשדוד',          lat: 31.8044, lng: 34.6553 },
  { id: 41, chain: 'osher',     branch: 'אושר עד אשקלון',                 address: 'בן גוריון 20, אשקלון',       lat: 31.6580, lng: 34.5710 },
  { id: 42, chain: 'victory',   branch: 'ויקטורי אילת',                   address: 'התמר 5, אילת',               lat: 29.5577, lng: 34.9519 },
  { id: 43, chain: 'mega',      branch: 'מגה דימונה',                     address: 'הפלמ"ח 3, דימונה',          lat: 31.0650, lng: 35.0330 },
  { id: 44, chain: 'shufersal', branch: 'שופרסל דיל קריית גת',            address: 'העצמאות 1, קריית גת',       lat: 31.6100, lng: 34.7640 },
  { id: 45, chain: 'yohananof', branch: 'יוחננוף אשדוד',                  address: 'הנביאים 8, אשדוד',           lat: 31.8000, lng: 34.6490 },
  // ── מרכז ומישור השרון ──
  { id: 46, chain: 'ramilevi',  branch: 'רמי לוי מודיעין',                address: 'קניון מודיעין, מודיעין',     lat: 31.9040, lng: 35.0000 },
  { id: 47, chain: 'yohananof', branch: 'יוחננוף רחובות',                 address: 'הרצל 30, רחובות',            lat: 31.8960, lng: 34.8080 },
  { id: 48, chain: 'victory',   branch: 'ויקטורי לוד',                    address: 'שמחוני 10, לוד',             lat: 31.9510, lng: 34.8950 },
  { id: 49, chain: 'shufersal', branch: 'שופרסל דיל רמלה',                address: 'בלפור 5, רמלה',              lat: 31.9280, lng: 34.8720 },
  { id: 50, chain: 'mega',      branch: 'מגה בול נס ציונה',               address: 'הרצל 40, נס ציונה',          lat: 31.9300, lng: 34.7980 },
]

export const PRODUCTS = [
  // ── מוצרי חלב ──
  { id:   1, barcode: '7290000066622', name: 'חלב תנובה 3% שומן',           brand: 'תנובה',      category: 'מוצרי חלב',   unit: '1 ליטר',    image: '🥛' },
  { id:   5, barcode: '7290000694870', name: 'קוטג׳ 5% שומן',               brand: 'תנובה',      category: 'מוצרי חלב',   unit: '250 גרם',   image: '🧀' },
  { id:   7, barcode: '7290005266564', name: 'יוגורט פרי תפוח-שזיף',        brand: 'דנונה',      category: 'מוצרי חלב',   unit: '150 גרם',   image: '🍶' },
  { id:  11, barcode: '7290000066639', name: 'חלב גולדן 1% שומן',           brand: 'תנובה',      category: 'מוצרי חלב',   unit: '1 ליטר',    image: '🥛' },
  { id:  12, barcode: '7290000066646', name: 'שמנת מתוקה 38%',              brand: 'תנובה',      category: 'מוצרי חלב',   unit: '250 מ״ל',  image: '🫙' },
  { id:  13, barcode: '7290000066653', name: 'גבינה צהובה גאודה פרוסה',     brand: 'תנובה',      category: 'גבינות',       unit: '200 גרם',   image: '🧀' },
  { id:  14, barcode: '7290000066660', name: 'גבינה לבנה 5%',               brand: 'תנובה',      category: 'גבינות',       unit: '250 גרם',   image: '🫙' },
  { id:  15, barcode: '7290000066677', name: 'חמאה מלוחה',                  brand: 'תנובה',      category: 'מוצרי חלב',   unit: '200 גרם',   image: '🧈' },
  { id: 200, barcode: '7290000066684', name: 'גבינה בולגרית 5%',            brand: 'תנובה',      category: 'גבינות',       unit: '200 גרם',   image: '🫙' },
  { id: 201, barcode: '7290000066691', name: 'גבינה עמק פרוסה',             brand: 'תנובה',      category: 'גבינות',       unit: '200 גרם',   image: '🧀' },
  { id: 202, barcode: '7290000066708', name: 'שמנת חמוצה 15%',              brand: 'תנובה',      category: 'מוצרי חלב',   unit: '200 מ״ל',  image: '🫙' },
  { id: 203, barcode: '7290000066715', name: 'לבן 1%',                      brand: 'תנובה',      category: 'מוצרי חלב',   unit: '500 מ״ל',  image: '🥛' },
  { id: 204, barcode: '7290000066722', name: 'קפיר 1.5%',                   brand: 'תנובה',      category: 'מוצרי חלב',   unit: '500 מ״ל',  image: '🥛' },
  { id: 205, barcode: '7290005266571', name: 'ריקוטה טרייה',                brand: 'גד',         category: 'גבינות',       unit: '250 גרם',   image: '🫙' },
  { id: 206, barcode: '7290005266588', name: 'יוגורט ביו טבעי',             brand: 'דנונה',      category: 'מוצרי חלב',   unit: '150 גרם',   image: '🍶' },
  { id: 207, barcode: '7290005266595', name: 'גבינה קשה פרמזן',             brand: 'גד',         category: 'גבינות',       unit: '100 גרם',   image: '🧀' },
  { id: 208, barcode: '7290005266601', name: 'חלב סויה',                    brand: 'אלפרו',      category: 'מוצרי חלב',   unit: '1 ליטר',    image: '🥛' },
  { id: 209, barcode: '7290005266618', name: 'לאבנה',                       brand: 'שטראוס',     category: 'גבינות',       unit: '250 גרם',   image: '🫙' },

  // ── לחם ומאפים ──
  { id:   2, barcode: '7290107235592', name: 'לחם אחיד פרוס',               brand: 'תנובה',      category: 'לחם ומאפים',  unit: 'כיכר',      image: '🍞' },
  { id:  16, barcode: '7290107235609', name: 'לחם שיפון כהה',               brand: 'אחלה',       category: 'לחם ומאפים',  unit: 'כיכר',      image: '🍞' },
  { id:  17, barcode: '7290107235616', name: 'פיתות מחיטה מלאה 6 יחידות',  brand: 'אחלה',       category: 'לחם ומאפים',  unit: 'שקית',      image: '🫓' },
  { id:  18, barcode: '7290107235623', name: 'לחמניות שומשום 6 יחידות',     brand: 'לחם הארץ',   category: 'לחם ומאפים',  unit: 'שקית',      image: '🍞' },
  { id: 210, barcode: '7290107235630', name: 'לחם כוסמין מלא',              brand: 'אחלה',       category: 'לחם ומאפים',  unit: 'כיכר',      image: '🍞' },
  { id: 211, barcode: '7290107235647', name: 'בייגלה ירושלמי',              brand: 'לחם הארץ',   category: 'לחם ומאפים',  unit: 'שקית',      image: '🥨' },
  { id: 212, barcode: '7290107235654', name: 'קרואסון חמאה',                brand: 'ברייד',      category: 'לחם ומאפים',  unit: 'שקית',      image: '🥐' },
  { id: 213, barcode: '7290107235661', name: 'לחם שיפון גרמני',             brand: 'לחם הארץ',   category: 'לחם ומאפים',  unit: 'כיכר',      image: '🍞' },
  { id: 214, barcode: '7290107235678', name: 'לחמניות חמאה 6 יחידות',       brand: 'ברייד',      category: 'לחם ומאפים',  unit: 'שקית',      image: '🍞' },

  // ── ירקות ──
  { id:   6, barcode: '0000000000061', name: 'עגבניות שרי',                 brand: 'תוצרת הארץ', category: 'ירקות',        unit: '500 גרם',   image: '🍅' },
  { id:  20, barcode: '0000000000201', name: 'עגבניות שדה',                 brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🍅' },
  { id:  21, barcode: '0000000000211', name: 'מלפפון',                      brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🥒' },
  { id:  22, barcode: '0000000000221', name: 'פלפל אדום',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🫑' },
  { id:  23, barcode: '0000000000231', name: 'פלפל צהוב',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🫑' },
  { id:  24, barcode: '0000000000241', name: 'גזר',                         brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🥕' },
  { id:  25, barcode: '0000000000251', name: 'בצל',                         brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🧅' },
  { id:  26, barcode: '0000000000261', name: 'שום',                         brand: 'תוצרת הארץ', category: 'ירקות',        unit: '250 גרם',   image: '🧄' },
  { id:  27, barcode: '0000000000271', name: 'חסה איסבג',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'יחידה',     image: '🥬' },
  { id:  28, barcode: '0000000000281', name: 'ברוקולי',                     brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'יחידה',     image: '🥦' },
  { id:  29, barcode: '0000000000291', name: 'כרובית',                      brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'יחידה',     image: '🥦' },
  { id:  30, barcode: '0000000000301', name: 'תפוח אדמה',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🥔' },
  { id:  31, barcode: '0000000000311', name: 'בטטה',                        brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🍠' },
  { id:  32, barcode: '0000000000321', name: 'זוקיני',                      brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🥒' },
  { id:  33, barcode: '0000000000331', name: 'חצילים',                      brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🍆' },
  { id:  34, barcode: '0000000000341', name: 'אפונה ירוקה קפואה',           brand: 'סנפרוסט',    category: 'ירקות',        unit: '500 גרם',   image: '🟢' },
  { id:  35, barcode: '0000000000351', name: 'תירס מתוק',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'יחידה',     image: '🌽' },
  { id: 215, barcode: '0000000002151', name: 'כרוב ירוק',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🥬' },
  { id: 216, barcode: '0000000002161', name: 'פטריות שמפיניון',             brand: 'תוצרת הארץ', category: 'ירקות',        unit: '250 גרם',   image: '🍄' },
  { id: 217, barcode: '0000000002171', name: 'שעועית ירוקה',                brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🫘' },
  { id: 218, barcode: '0000000002181', name: 'פלפל ירוק',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🫑' },
  { id: 219, barcode: '0000000002191', name: 'כרוב סגול',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🥬' },
  { id: 220, barcode: '0000000002201', name: 'פטרוזיליה',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'צרור',      image: '🌿' },
  { id: 221, barcode: '0000000002211', name: 'כוסברה',                      brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'צרור',      image: '🌿' },
  { id: 222, barcode: '0000000002221', name: 'סלרי',                        brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🌿' },
  { id: 223, barcode: '0000000002231', name: 'עירית',                       brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'צרור',      image: '🌿' },
  { id: 224, barcode: '0000000002241', name: 'חציל סיני',                   brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🍆' },
  { id: 225, barcode: '0000000002251', name: 'לפת',                         brand: 'תוצרת הארץ', category: 'ירקות',        unit: 'ק״ג',       image: '🥔' },

  // ── פירות ──
  { id:  40, barcode: '0000000000401', name: 'תפוחי גרנד סמיט',            brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍏' },
  { id:  41, barcode: '0000000000411', name: 'תפוחי פינק ליידי',            brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍎' },
  { id:  42, barcode: '0000000000421', name: 'בננות',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍌' },
  { id:  43, barcode: '0000000000431', name: 'תפוזים',                      brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍊' },
  { id:  44, barcode: '0000000000441', name: 'לימונים',                     brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍋' },
  { id:  45, barcode: '0000000000451', name: 'ענבים אדומים',                brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍇' },
  { id:  46, barcode: '0000000000461', name: 'ענבים ירוקים',                brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍇' },
  { id:  47, barcode: '0000000000471', name: 'אבטיח',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍉' },
  { id:  48, barcode: '0000000000481', name: 'מלון',                        brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍈' },
  { id:  49, barcode: '0000000000491', name: 'תותים',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: '250 גרם',   image: '🍓' },
  { id:  50, barcode: '0000000000501', name: 'אבוקדו',                      brand: 'תוצרת הארץ', category: 'פירות',        unit: 'יחידה',     image: '🥑' },
  { id:  51, barcode: '0000000000511', name: 'מנגו אלפונסו',                brand: 'תוצרת הארץ', category: 'פירות',        unit: 'יחידה',     image: '🥭' },
  { id:  52, barcode: '0000000000521', name: 'אננס',                        brand: 'תוצרת הארץ', category: 'פירות',        unit: 'יחידה',     image: '🍍' },
  { id:  53, barcode: '0000000000531', name: 'קלמנטינות',                   brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍊' },
  { id:  54, barcode: '0000000000541', name: 'אפרסקים',                     brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍑' },
  { id:  55, barcode: '0000000000551', name: 'שזיפים',                      brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🫐' },
  { id:  56, barcode: '0000000000561', name: 'אגסים',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍐' },
  { id: 226, barcode: '0000000002261', name: 'קיווי',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🥝' },
  { id: 227, barcode: '0000000002271', name: 'רימון',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍎' },
  { id: 228, barcode: '0000000002281', name: 'תמרים מג׳הול',               brand: 'ד"ר נחמיאס', category: 'פירות',        unit: '500 גרם',   image: '🌴' },
  { id: 229, barcode: '0000000002291', name: 'דובדבנים',                    brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍒' },
  { id: 230, barcode: '0000000002301', name: 'נקטרינות',                    brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍑' },
  { id: 231, barcode: '0000000002311', name: 'פפאיה',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: 'ק״ג',       image: '🍈' },
  { id: 232, barcode: '0000000002321', name: 'בלימה',                       brand: 'תוצרת הארץ', category: 'פירות',        unit: 'יחידה',     image: '🍋' },

  // ── בשר ועוף ──
  { id:  10, barcode: '7290009876543', name: 'חזה עוף טרי',                 brand: 'עוף טוב',    category: 'בשר ועוף',    unit: 'ק״ג',       image: '🍗' },
  { id:  60, barcode: '7290009876550', name: 'שוקיים עוף',                  brand: 'עוף טוב',    category: 'בשר ועוף',    unit: 'ק״ג',       image: '🍗' },
  { id:  61, barcode: '7290009876567', name: 'כנפיים עוף',                  brand: 'עוף טוב',    category: 'בשר ועוף',    unit: 'ק״ג',       image: '🍗' },
  { id:  62, barcode: '7290009876574', name: 'בשר טחון בקר 80%',           brand: 'מוסרה',      category: 'בשר ועוף',    unit: 'ק״ג',       image: '🥩' },
  { id:  63, barcode: '7290009876581', name: 'אנטריקוט בקר טרי',           brand: 'מוסרה',      category: 'בשר ועוף',    unit: 'ק״ג',       image: '🥩' },
  { id: 233, barcode: '7290009876598', name: 'פרגיות עוף',                  brand: 'עוף טוב',    category: 'בשר ועוף',    unit: 'ק״ג',       image: '🍗' },
  { id: 234, barcode: '7290009876604', name: 'נקניקיות עוף',                brand: 'אסם',        category: 'בשר ועוף',    unit: '300 גרם',   image: '🌭' },
  { id: 235, barcode: '7290009876611', name: 'בשר טחון עוף',                brand: 'עוף טוב',    category: 'בשר ועוף',    unit: 'ק״ג',       image: '🍗' },
  { id: 236, barcode: '7290009876628', name: 'כבד עוף',                     brand: 'עוף טוב',    category: 'בשר ועוף',    unit: 'ק״ג',       image: '🍗' },

  // ── דגים ──
  { id:  70, barcode: '7290001111110', name: 'פילה סלמון טרי',              brand: 'טוב טעם',    category: 'דגים',         unit: 'ק״ג',       image: '🐟' },
  { id:  71, barcode: '7290001111127', name: 'פילה דניס טרי',               brand: 'טוב טעם',    category: 'דגים',         unit: 'ק״ג',       image: '🐟' },
  { id:  72, barcode: '7290001111134', name: 'טונה בשמן זית שימורים',       brand: 'כרמית',      category: 'דגים',         unit: '170 גרם',   image: '🐟' },
  { id: 237, barcode: '7290001111141', name: 'דג אמנון טרי',                brand: 'טוב טעם',    category: 'דגים',         unit: 'ק״ג',       image: '🐟' },
  { id: 238, barcode: '7290001111158', name: 'שרימפס קפוא',                 brand: 'טוב טעם',    category: 'דגים',         unit: '500 גרם',   image: '🦐' },
  { id: 239, barcode: '7290001111165', name: 'קלמרי טבעות',                 brand: 'טוב טעם',    category: 'דגים',         unit: 'ק״ג',       image: '🦑' },

  // ── ביצים ──
  { id:   3, barcode: '7290000696874', name: 'ביצים L גדולות 12 יחידות',   brand: 'אגמון',      category: 'ביצים',        unit: 'קרטון',     image: '🥚' },
  { id:  80, barcode: '7290000696881', name: 'ביצים XL ענק 12 יחידות',     brand: 'אגמון',      category: 'ביצים',        unit: 'קרטון',     image: '🥚' },

  // ── שמנים ומרכיבים ──
  { id:   4, barcode: '7290004534213', name: 'שמן זית כתית מעולה',          brand: 'יד מרדכי',   category: 'שמנים',        unit: '750 מ״ל',  image: '🫒' },
  { id:  90, barcode: '7290004534220', name: 'שמן קנולה',                   brand: 'שמן טוב',    category: 'שמנים',        unit: '1 ליטר',    image: '🫙' },
  { id:  91, barcode: '7290004534237', name: 'סוכר לבן',                    brand: 'שוגר לייף',  category: 'מרכיבים',      unit: 'ק״ג',       image: '🍬' },
  { id:  92, barcode: '7290004534244', name: 'קמח לבן',                     brand: 'שבולת',      category: 'מרכיבים',      unit: 'ק״ג',       image: '🌾' },
  { id:  93, barcode: '7290004534251', name: 'אורז בסמטי',                  brand: 'ריצ׳מן',     category: 'פסטה ואורז',   unit: 'ק״ג',       image: '🍚' },

  // ── פסטה ──
  { id:   8, barcode: '7290000689419', name: 'פסטה ספגטי',                  brand: 'ברילה',      category: 'פסטה ואורז',   unit: '500 גרם',   image: '🍝' },
  { id:  94, barcode: '7290000689426', name: 'פסטה פנה',                    brand: 'ברילה',      category: 'פסטה ואורז',   unit: '500 גרם',   image: '🍝' },
  { id:  95, barcode: '7290000689433', name: 'פסטה פרפרים',                 brand: 'ברילה',      category: 'פסטה ואורז',   unit: '500 גרם',   image: '🍝' },

  // ── שתייה ──
  { id:   9, barcode: '7290001234567', name: 'מים מינרלים',                 brand: 'נביעות',     category: 'שתייה',        unit: '1.5 ליטר',  image: '💧' },
  { id: 100, barcode: '7290001234574', name: 'מים מינרלים',                 brand: 'מי עדן',     category: 'שתייה',        unit: '1.5 ליטר',  image: '💧' },
  { id: 101, barcode: '7290001234581', name: 'קולה',                        brand: 'קוקה קולה',  category: 'שתייה',        unit: '1.5 ליטר',  image: '🥤' },
  { id: 102, barcode: '7290001234598', name: 'מיץ תפוזים סחוט',             brand: 'טרופיקנה',   category: 'שתייה',        unit: '1 ליטר',    image: '🧃' },
  { id: 103, barcode: '7290001234604', name: 'קפה נמס',                     brand: 'נסקפה',      category: 'שתייה',        unit: '200 גרם',   image: '☕' },
  { id: 104, barcode: '7290001234611', name: 'תה ירוק',                     brand: 'ויסוצקי',    category: 'שתייה',        unit: '25 שקיות',  image: '🍵' },
  { id: 254, barcode: '7290001234618', name: 'ספרייט',                      brand: 'קוקה קולה',  category: 'שתייה',        unit: '1.5 ליטר',  image: '🥤' },
  { id: 255, barcode: '7290001234625', name: 'פנטה תפוז',                   brand: 'קוקה קולה',  category: 'שתייה',        unit: '1.5 ליטר',  image: '🥤' },
  { id: 256, barcode: '7290001234632', name: 'מים עם גז',                   brand: 'ישראל מים',  category: 'שתייה',        unit: '1.5 ליטר',  image: '💧' },
  { id: 257, barcode: '7290001234649', name: 'אייס טי לימון',               brand: 'ליפטון',     category: 'שתייה',        unit: '1.5 ליטר',  image: '🍵' },
  { id: 258, barcode: '7290001234656', name: 'רד בול',                      brand: 'רד בול',     category: 'שתייה',        unit: '250 מ״ל',  image: '⚡' },
  { id: 259, barcode: '7290001234663', name: 'מיץ תפוחים טבעי',             brand: 'טרופיקנה',   category: 'שתייה',        unit: '1 ליטר',    image: '🧃' },
  { id: 260, barcode: '7290001234670', name: 'חלב שוקו',                    brand: 'שטראוס',     category: 'שתייה',        unit: '1 ליטר',    image: '🥛' },
  { id: 261, barcode: '7290001234687', name: 'קפה טחון',                    brand: 'ארומה',      category: 'שתייה',        unit: '250 גרם',   image: '☕' },
  { id: 262, barcode: '7290001234694', name: 'תה צמחים',                    brand: 'ויסוצקי',    category: 'שתייה',        unit: '25 שקיות',  image: '🍵' },

  // ── חטיפים ומתוקים ──
  { id: 110, barcode: '7290002222201', name: 'שוקולד מריר 70%',             brand: 'עלית',       category: 'מתוקים',       unit: '100 גרם',   image: '🍫' },
  { id: 111, barcode: '7290002222218', name: 'במבה',                        brand: 'אסם',        category: 'חטיפים',       unit: '80 גרם',    image: '🍿' },
  { id: 112, barcode: '7290002222225', name: 'ביסלי גריל',                  brand: 'אסם',        category: 'חטיפים',       unit: '70 גרם',    image: '🍿' },
  { id: 113, barcode: '7290002222232', name: 'דבש טבעי',                    brand: 'יד מרדכי',   category: 'מתוקים',       unit: '500 גרם',   image: '🍯' },
  { id: 264, barcode: '7290002222249', name: 'פרינגלס מקורי',               brand: 'פרינגלס',    category: 'חטיפים',       unit: '165 גרם',   image: '🍿' },
  { id: 265, barcode: '7290002222256', name: 'צ׳יפס טייסטי',               brand: 'אסם',        category: 'חטיפים',       unit: '80 גרם',    image: '🍟' },
  { id: 266, barcode: '7290002222263', name: 'ריץ׳',                        brand: 'נביסקו',     category: 'חטיפים',       unit: '200 גרם',   image: '🍘' },
  { id: 267, barcode: '7290002222270', name: 'אוראו',                       brand: 'נביסקו',     category: 'מתוקים',       unit: '154 גרם',   image: '🍪' },
  { id: 268, barcode: '7290002222287', name: 'שוקולד חלב מילקה',            brand: 'מונדלז',     category: 'מתוקים',       unit: '100 גרם',   image: '🍫' },
  { id: 269, barcode: '7290002222294', name: 'גרנולה',                      brand: 'ניצן',       category: 'חטיפים',       unit: '500 גרם',   image: '🌾' },
  { id: 270, barcode: '7290002222300', name: 'שקדים קלויים מלוחים',         brand: 'תמרוץ',      category: 'חטיפים',       unit: '200 גרם',   image: '🌰' },
  { id: 271, barcode: '7290002222317', name: 'אגוזי מלך',                   brand: 'תמרוץ',      category: 'חטיפים',       unit: '200 גרם',   image: '🌰' },
  { id: 272, barcode: '7290002222324', name: 'פיסטוק',                      brand: 'תמרוץ',      category: 'חטיפים',       unit: '200 גרם',   image: '🌰' },
  { id: 273, barcode: '7290002222331', name: 'פופקורן חמאה',                brand: 'אסם',        category: 'חטיפים',       unit: '80 גרם',    image: '🍿' },

  // ── קפואים ──
  { id: 274, barcode: '7290006666001', name: 'פיצה מרגריטה',                brand: 'שטראוס',     category: 'קפואים',       unit: '400 גרם',   image: '🍕' },
  { id: 275, barcode: '7290006666018', name: 'גלידת שוקולד',                brand: 'ארטיק',      category: 'קפואים',       unit: '500 מ״ל',  image: '🍦' },
  { id: 276, barcode: '7290006666025', name: 'ירקות קפואים מעורבים',        brand: 'סנפרוסט',    category: 'קפואים',       unit: '500 גרם',   image: '🥦' },
  { id: 277, barcode: '7290006666032', name: 'שניצל עוף קפוא',              brand: 'תנובה',      category: 'קפואים',       unit: '500 גרם',   image: '🍗' },
  { id: 278, barcode: '7290006666049', name: 'פלאפל קפוא',                  brand: 'תנובה',      category: 'קפואים',       unit: '500 גרם',   image: '🧆' },
  { id: 279, barcode: '7290006666056', name: 'גלידת וניל',                  brand: 'ארטיק',      category: 'קפואים',       unit: '1 ליטר',    image: '🍦' },

  // ── שימורים ורטבים ──
  { id: 240, barcode: '7290007777001', name: 'רסק עגבניות',                 brand: 'אסם',        category: 'שימורים',      unit: '200 גרם',   image: '🍅' },
  { id: 241, barcode: '7290007777018', name: 'שימורי תירס',                 brand: 'גרינפילד',   category: 'שימורים',      unit: '425 גרם',   image: '🌽' },
  { id: 242, barcode: '7290007777025', name: 'שימורי חומוס',                brand: 'גרינפילד',   category: 'שימורים',      unit: '400 גרם',   image: '🫘' },
  { id: 243, barcode: '7290007777032', name: 'ממרח שוקולד ואגוזים',         brand: 'נוטלה',      category: 'ממרחים',       unit: '200 גרם',   image: '🍫' },
  { id: 244, barcode: '7290007777049', name: 'חמאת בוטנים',                 brand: 'שטראוס',     category: 'ממרחים',       unit: '340 גרם',   image: '🥜' },
  { id: 245, barcode: '7290007777056', name: 'ריבת תות',                    brand: 'שטראוס',     category: 'ממרחים',       unit: '340 גרם',   image: '🍓' },
  { id: 246, barcode: '7290007777063', name: 'מיונז',                       brand: 'הלמן',       category: 'רטבים',        unit: '430 גרם',   image: '🫙' },
  { id: 247, barcode: '7290007777070', name: 'קטשופ',                       brand: 'היינץ',      category: 'רטבים',        unit: '500 גרם',   image: '🍅' },
  { id: 248, barcode: '7290007777087', name: 'טחינה גולמית',                brand: 'אל ארז',     category: 'ממרחים',       unit: '500 גרם',   image: '🌰' },
  { id: 249, barcode: '7290007777094', name: 'חומוס מוכן',                  brand: 'תבורי',      category: 'ממרחים',       unit: '400 גרם',   image: '🫘' },
  { id: 250, barcode: '7290007777100', name: 'רוטב עגבניות לפסטה',          brand: 'אסם',        category: 'רטבים',        unit: '500 גרם',   image: '🍝' },

  // ── ניקיון ──
  { id: 120, barcode: '7290003333301', name: 'אבקת כביסה',                  brand: 'אריאל',      category: 'ניקיון',       unit: '3 ק״ג',     image: '🧺' },
  { id: 121, barcode: '7290003333318', name: 'נוזל כלים',                   brand: 'פיירי',      category: 'ניקיון',       unit: '500 מ״ל',  image: '🧴' },
  { id: 122, barcode: '7290003333325', name: 'נייר טואלט 10 גלילות',        brand: 'נגה',        category: 'ניקיון',       unit: '10 גלילות', image: '🧻' },
  { id: 281, barcode: '7290003333332', name: 'ג׳ל כביסה נוזלי',            brand: 'אריאל',      category: 'ניקיון',       unit: '1 ליטר',    image: '🧴' },
  { id: 282, barcode: '7290003333349', name: 'מרכך כביסה',                  brand: 'סנלן',       category: 'ניקיון',       unit: '1 ליטר',    image: '🧴' },
  { id: 283, barcode: '7290003333356', name: 'חומר ניקוי רב-שימושי',        brand: 'מיסטר מאסל', category: 'ניקיון',       unit: '750 מ״ל',  image: '🧹' },
  { id: 284, barcode: '7290003333363', name: 'שקיות אשפה גדולות',           brand: 'שחם',        category: 'ניקיון',       unit: '30 יחידות', image: '🗑️' },
  { id: 285, barcode: '7290003333370', name: 'נייר אלומיניום',              brand: 'עמינח',      category: 'ניקיון',       unit: "50 מ'",     image: '🫙' },
  { id: 286, barcode: '7290003333387', name: 'נייר מגבת',                   brand: 'פלנטי',      category: 'ניקיון',       unit: '2 גלילות',  image: '🧻' },

  // ── טיפוח אישי ──
  { id: 288, barcode: '7290008888001', name: 'שמפו',                        brand: 'פנטין',      category: 'טיפוח',        unit: '400 מ״ל',  image: '🧴' },
  { id: 289, barcode: '7290008888018', name: 'מרכך שיער',                   brand: 'פנטין',      category: 'טיפוח',        unit: '400 מ״ל',  image: '🧴' },
  { id: 290, barcode: '7290008888025', name: 'ג׳ל מקלחת',                  brand: 'ניוויאה',    category: 'טיפוח',        unit: '250 מ״ל',  image: '🧴' },
  { id: 291, barcode: '7290008888032', name: 'דאודורנט',                    brand: 'דאב',        category: 'טיפוח',        unit: '150 מ״ל',  image: '🧴' },
  { id: 292, barcode: '7290008888049', name: 'משחת שיניים',                 brand: 'קולגייט',    category: 'טיפוח',        unit: '75 מ״ל',   image: '🦷' },
  { id: 293, barcode: '7290008888056', name: 'נייר טואלט 12 גלילות',        brand: 'לוטוס',      category: 'טיפוח',        unit: '12 גלילות', image: '🧻' },
  { id: 294, barcode: '7290008888063', name: 'ממחטות נייר',                 brand: 'קלינקס',     category: 'טיפוח',        unit: '10 חבילות', image: '🤧' },
]

// יצירת מחירים אוטומטית לכל 50 החנויות
function makePrices(base) {
  const v = base * 0.22
  const mults = [
     0.30, -0.60,  0.10,  0.50,  0.30, -0.20, -0.40, -0.70,  0.40,  0.20,
     0.35, -0.50,  0.15, -0.30,  0.45, -0.10,  0.25, -0.65,  0.00, -0.40,
     0.20, -0.45,  0.35, -0.55,  0.10,  0.55, -0.35,  0.15, -0.20,  0.40,
    -0.10,  0.60, -0.25,  0.05, -0.50,  0.30, -0.15,  0.45,  0.00, -0.30,
     0.25, -0.70,  0.20, -0.40,  0.35,  0.10, -0.25,  0.50, -0.10,  0.15,
  ]
  return mults.map((m, i) => ({
    storeId: i + 1,
    price: Math.max(0.5, Math.round((base + v * m) * 10) / 10),
  }))
}

// מחירים לכל מוצר
export const PRICES = {
  1:   makePrices(6.9),
  2:   makePrices(7.5),
  3:   makePrices(19.9),
  4:   makePrices(39.9),
  5:   makePrices(8.9),
  6:   makePrices(14.9),
  7:   makePrices(5.9),
  8:   makePrices(9.9),
  9:   makePrices(4.5),
  10:  makePrices(39.9),
  11:  makePrices(6.5),
  12:  makePrices(12.9),
  13:  makePrices(18.9),
  14:  makePrices(9.9),
  15:  makePrices(14.9),
  16:  makePrices(8.9),
  17:  makePrices(7.5),
  18:  makePrices(9.9),
  20:  makePrices(7.9),
  21:  makePrices(4.9),
  22:  makePrices(12.9),
  23:  makePrices(12.9),
  24:  makePrices(5.9),
  25:  makePrices(4.9),
  26:  makePrices(6.9),
  27:  makePrices(5.9),
  28:  makePrices(9.9),
  29:  makePrices(8.9),
  30:  makePrices(4.9),
  31:  makePrices(6.9),
  32:  makePrices(7.9),
  33:  makePrices(8.9),
  34:  makePrices(8.9),
  35:  makePrices(4.9),
  40:  makePrices(9.9),
  41:  makePrices(11.9),
  42:  makePrices(7.9),
  43:  makePrices(8.9),
  44:  makePrices(7.9),
  45:  makePrices(19.9),
  46:  makePrices(17.9),
  47:  makePrices(4.9),
  48:  makePrices(9.9),
  49:  makePrices(14.9),
  50:  makePrices(5.9),
  51:  makePrices(9.9),
  52:  makePrices(12.9),
  53:  makePrices(9.9),
  54:  makePrices(12.9),
  55:  makePrices(14.9),
  56:  makePrices(11.9),
  60:  makePrices(28.9),
  61:  makePrices(22.9),
  62:  makePrices(42.9),
  63:  makePrices(89.9),
  70:  makePrices(79.9),
  71:  makePrices(59.9),
  72:  makePrices(12.9),
  80:  makePrices(22.9),
  90:  makePrices(14.9),
  91:  makePrices(8.9),
  92:  makePrices(7.9),
  93:  makePrices(18.9),
  94:  makePrices(9.9),
  95:  makePrices(9.9),
  100: makePrices(4.2),
  101: makePrices(7.9),
  102: makePrices(12.9),
  103: makePrices(29.9),
  104: makePrices(14.9),
  110: makePrices(8.9),
  111: makePrices(4.9),
  112: makePrices(4.9),
  113: makePrices(29.9),
  120: makePrices(49.9),
  121: makePrices(12.9),
  122: makePrices(19.9),
  200: makePrices(9.9),
  201: makePrices(18.9),
  202: makePrices(7.9),
  203: makePrices(6.9),
  204: makePrices(7.9),
  205: makePrices(14.9),
  206: makePrices(5.9),
  207: makePrices(19.9),
  208: makePrices(9.9),
  209: makePrices(12.9),
  210: makePrices(9.9),
  211: makePrices(8.9),
  212: makePrices(12.9),
  213: makePrices(9.9),
  214: makePrices(11.9),
  215: makePrices(5.9),
  216: makePrices(8.9),
  217: makePrices(9.9),
  218: makePrices(11.9),
  219: makePrices(5.9),
  220: makePrices(3.9),
  221: makePrices(3.9),
  222: makePrices(6.9),
  223: makePrices(3.9),
  224: makePrices(9.9),
  225: makePrices(5.9),
  226: makePrices(14.9),
  227: makePrices(9.9),
  228: makePrices(39.9),
  229: makePrices(29.9),
  230: makePrices(12.9),
  231: makePrices(14.9),
  232: makePrices(7.9),
  233: makePrices(29.9),
  234: makePrices(19.9),
  235: makePrices(32.9),
  236: makePrices(19.9),
  237: makePrices(49.9),
  238: makePrices(59.9),
  239: makePrices(69.9),
  240: makePrices(4.9),
  241: makePrices(5.9),
  242: makePrices(6.9),
  243: makePrices(19.9),
  244: makePrices(19.9),
  245: makePrices(12.9),
  246: makePrices(14.9),
  247: makePrices(12.9),
  248: makePrices(19.9),
  249: makePrices(12.9),
  250: makePrices(9.9),
  254: makePrices(7.9),
  255: makePrices(7.9),
  256: makePrices(4.2),
  257: makePrices(9.9),
  258: makePrices(8.9),
  259: makePrices(12.9),
  260: makePrices(11.9),
  261: makePrices(39.9),
  262: makePrices(14.9),
  264: makePrices(14.9),
  265: makePrices(5.9),
  266: makePrices(9.9),
  267: makePrices(9.9),
  268: makePrices(8.9),
  269: makePrices(19.9),
  270: makePrices(12.9),
  271: makePrices(14.9),
  272: makePrices(19.9),
  273: makePrices(5.9),
  274: makePrices(29.9),
  275: makePrices(24.9),
  276: makePrices(9.9),
  277: makePrices(29.9),
  278: makePrices(19.9),
  279: makePrices(39.9),
  281: makePrices(29.9),
  282: makePrices(19.9),
  283: makePrices(14.9),
  284: makePrices(12.9),
  285: makePrices(9.9),
  286: makePrices(14.9),
  288: makePrices(24.9),
  289: makePrices(24.9),
  290: makePrices(19.9),
  291: makePrices(14.9),
  292: makePrices(9.9),
  293: makePrices(29.9),
  294: makePrices(12.9),
}

// היסטוריית מחירים לגרף
export const PRICE_HISTORY = {
  1: [
    { month: 'דצמבר', shufersal: 6.50, ramilevi: 5.50, mega: 6.10 },
    { month: 'ינואר',  shufersal: 6.50, ramilevi: 5.70, mega: 6.20 },
    { month: 'פברואר', shufersal: 6.90, ramilevi: 5.80, mega: 6.30 },
    { month: 'מרץ',    shufersal: 6.90, ramilevi: 5.80, mega: 6.40 },
    { month: 'אפריל',  shufersal: 6.90, ramilevi: 5.90, mega: 6.50 },
    { month: 'מאי',    shufersal: 6.90, ramilevi: 5.90, mega: 6.50 },
  ],
  3: [
    { month: 'דצמבר', shufersal: 17.90, ramilevi: 15.90, mega: 17.00 },
    { month: 'ינואר',  shufersal: 18.50, ramilevi: 16.50, mega: 17.50 },
    { month: 'פברואר', shufersal: 19.90, ramilevi: 16.90, mega: 18.50 },
    { month: 'מרץ',    shufersal: 19.90, ramilevi: 16.90, mega: 18.50 },
    { month: 'אפריל',  shufersal: 19.90, ramilevi: 16.90, mega: 18.50 },
    { month: 'מאי',    shufersal: 19.90, ramilevi: 16.90, mega: 18.50 },
  ],
  10: [
    { month: 'דצמבר', shufersal: 35.90, ramilevi: 31.90, mega: 34.00 },
    { month: 'ינואר',  shufersal: 37.90, ramilevi: 33.90, mega: 35.90 },
    { month: 'פברואר', shufersal: 39.90, ramilevi: 34.90, mega: 37.90 },
    { month: 'מרץ',    shufersal: 39.90, ramilevi: 34.90, mega: 37.90 },
    { month: 'אפריל',  shufersal: 41.90, ramilevi: 34.90, mega: 38.90 },
    { month: 'מאי',    shufersal: 41.90, ramilevi: 34.90, mega: 38.90 },
  ],
}

// חישוב מרחק GPS
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
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// חיפוש מוצרים
export function searchProducts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.barcode.includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q))
  )
}

// מחירים לפי רדיוס
export function getPricesNearby(productId, userLat, userLng, radiusKm) {
  const prices = PRICES[productId] || []
  return prices
    .map((p) => {
      const store = STORES.find((s) => s.id === p.storeId)
      if (!store) return null
      const distance = calcDistance(userLat, userLng, store.lat, store.lng)
      if (distance > radiusKm) return null
      return { ...p, store, chain: CHAINS[store.chain], distance: Math.round(distance * 10) / 10 }
    })
    .filter(Boolean)
    .sort((a, b) => a.price - b.price)
}
