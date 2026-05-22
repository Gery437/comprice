import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'בית', icon: '🏠' },
    { to: '/list', label: 'הרשימה שלי', icon: '🛒' },
    { to: '/map', label: 'מפה', icon: '🗺️' },
  ]

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* לוגו */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            ₪
          </div>
          <div>
            <span className="text-emerald-700 font-bold text-lg leading-none">קומפרייס</span>
            <p className="text-gray-400 text-xs leading-none">השוואת מחירים</p>
          </div>
        </Link>

        {/* ניווט */}
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.to
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              <span>{link.icon}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
