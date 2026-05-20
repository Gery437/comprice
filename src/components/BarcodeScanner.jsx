import { useEffect, useRef, useState } from 'react'
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode'

export default function BarcodeScanner({ onDetected, onClose }) {
  const scannerRef = useRef(null)
  const [err, setErr] = useState('')
  const [ready, setReady] = useState(false)

  async function stopScanner() {
    if (scannerRef.current) {
      try { await scannerRef.current.stop() } catch {}
      try { scannerRef.current.clear() } catch {}
      scannerRef.current = null
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    async function start() {
      try {
        const scanner = new Html5Qrcode('barcode-reader-div', {
          formatsToSupport: [
            Html5QrcodeSupportedFormats.EAN_13,
            Html5QrcodeSupportedFormats.EAN_8,
            Html5QrcodeSupportedFormats.UPC_A,
            Html5QrcodeSupportedFormats.UPC_E,
            Html5QrcodeSupportedFormats.CODE_128,
            Html5QrcodeSupportedFormats.CODE_39,
            Html5QrcodeSupportedFormats.QR_CODE,
          ],
          verbose: false,
        })
        scannerRef.current = scanner

        await scanner.start(
          { facingMode: 'environment' },
          { fps: 15, qrbox: { width: 280, height: 120 } },
          async (code) => {
            await stopScanner()
            onDetected(code)
            onClose()
          },
          () => {}
        )
        setReady(true)
      } catch {
        setErr('לא ניתן לפתוח מצלמה — בדוק הרשאות ונסה שוב')
      }
    }

    const t = setTimeout(start, 200)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
      stopScanner()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col" dir="rtl">
      {/* Header */}
      <div className="relative z-20 flex items-center justify-between px-5 pt-10 pb-3 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          <h3 className="text-lg font-bold text-white">📷 סרוק ברקוד</h3>
          <p className="text-slate-300 text-xs mt-0.5">כוון לברקוד על האריזה</p>
        </div>
        <button
          onClick={async () => { await stopScanner(); onClose() }}
          className="text-white text-xl w-10 h-10 flex items-center justify-center rounded-xl bg-black/50"
        >✕</button>
      </div>

      {/* Scanner container */}
      <div className="relative flex-1 overflow-hidden">
        <div id="barcode-reader-div" className="w-full h-full" />

        {/* Animated scan line overlay */}
        {ready && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-72 h-32">
              <div
                className="absolute left-1 right-1 h-0.5 bg-red-500 animate-scan-line"
                style={{ boxShadow: '0 0 8px 2px rgba(239,68,68,0.8)' }}
              />
            </div>
          </div>
        )}

        {err && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <p className="text-red-400 text-sm text-center bg-red-500/20 border border-red-500/30 rounded-xl px-5 py-4 mx-6">
              {err}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-20 px-5 py-6 bg-gradient-to-t from-black/80 to-transparent">
        <button
          onClick={async () => { await stopScanner(); onClose() }}
          className="w-full py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
        >ביטול</button>
      </div>
    </div>
  )
}
