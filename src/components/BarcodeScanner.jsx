import { useEffect, useRef, useState } from 'react'
import Button from './ui/Button'

export default function BarcodeScanner({ onDetected, onClose }) {
  const scannerRef = useRef(null)
  const [error, setError] = useState(null)
  const [scanning, setScanning] = useState(false)
  const html5QrRef = useRef(null)

  useEffect(() => {
    let html5Qr = null

    const startScanner = async () => {
      try {
        const { Html5Qrcode } = await import('html5-qrcode')
        html5Qr = new Html5Qrcode('barcode-reader')
        html5QrRef.current = html5Qr
        setScanning(true)

        await html5Qr.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 250, height: 150 } },
          (decodedText) => {
            onDetected(decodedText)
            html5Qr.stop().catch(() => {})
          },
          () => {}
        )
      } catch (err) {
        setError('לא ניתן לגשת למצלמה. ודא שנתת הרשאה.')
        setScanning(false)
      }
    }

    startScanner()

    return () => {
      if (html5QrRef.current) {
        html5QrRef.current.stop().catch(() => {})
      }
    }
  }, [onDetected])

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">סריקת ברקוד</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        {error ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">📷</div>
            <p className="text-red-500 font-medium">{error}</p>
            <p className="text-gray-400 text-sm mt-2">נסה להכניס ברקוד ידנית בחיפוש</p>
          </div>
        ) : (
          <>
            <div className="rounded-2xl overflow-hidden bg-gray-900 mb-4">
              <div id="barcode-reader" ref={scannerRef} className="w-full" />
            </div>
            {scanning && (
              <p className="text-center text-emerald-600 text-sm font-medium animate-pulse">
                📷 מחפש ברקוד... כוון את המצלמה
              </p>
            )}
          </>
        )}

        <div className="mt-4">
          <Button variant="secondary" onClick={onClose} className="w-full">
            ביטול
          </Button>
        </div>
      </div>
    </div>
  )
}
