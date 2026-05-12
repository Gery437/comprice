import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="text-center py-20" dir="rtl">
      <div className="text-7xl mb-6">🔍</div>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">העמוד לא נמצא</h1>
      <p className="text-gray-400 mb-8">הכתובת שהזנת לא קיימת</p>
      <Button onClick={() => navigate('/')} variant="primary" size="lg">
        חזרה לדף הבית
      </Button>
    </div>
  )
}
