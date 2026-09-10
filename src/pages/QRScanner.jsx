import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Html5Qrcode } from 'html5-qrcode'
import './QRScanner.css'

function QRScanner() {
  const navigate = useNavigate()

  const scannerRef = useRef(null)
  const [scanning, setScanning] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current
          .stop()
          .catch(() => {})
      }
    }
  }, [])

  const startScanner = async () => {
    setError('')
    setScanning(true)

    const scanner = new Html5Qrcode('qr-reader')
    scannerRef.current = scanner

    try {
      await scanner.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: {
            width: 250,
            height: 250,
          },
        },
        async (decodedText) => {
          await scanner.stop()

          scannerRef.current = null
          setScanning(false)

          try {
            const url = new URL(decodedText)

            if (url.pathname.startsWith('/batch/')) {
              navigate(
                `${url.pathname}${url.search}${url.hash}`
              )
            } else {
              setError('This QR code is not a Kabadiwala Connect batch QR.')
            }
          } catch {
            setError('Invalid QR code.')
          }
        },
        () => {}
      )
    } catch (err) {
      console.error(err)
      setScanning(false)
      setError(
        'Camera could not start. Please allow camera permission and try again.'
      )
    }
  }

  const stopScanner = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop()
      } catch {
        // Scanner already stopped
      }

      scannerRef.current = null
    }

    setScanning(false)
  }

  return (
    <div className="scanner-page">

      <header className="scanner-header">

        <div className="scanner-logo">

          <span>♻</span>

          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>

        </div>

        <button
          className="scanner-back"
          onClick={() => navigate('/')}
        >
          ← Home
        </button>

      </header>


      <main className="scanner-main">

        <div className="scanner-card">

          <span className="scanner-label">
            MATERIAL TRACEABILITY
          </span>

          <h1>
            Scan Batch QR
          </h1>

          <p>
            Scan the QR code attached to the material batch
            to verify and track its recycling journey.
          </p>


          <div className="scanner-box">

            <div id="qr-reader"></div>

          </div>


          {!scanning && (
            <button
              className="start-scan-btn"
              onClick={startScanner}
            >
              📷 Start QR Scanner
            </button>
          )}


          {scanning && (
            <button
              className="stop-scan-btn"
              onClick={stopScanner}
            >
              Stop Scanner
            </button>
          )}


          {error && (
            <div className="scanner-error">
              {error}
            </div>
          )}


          <div className="scanner-info">

            <div>
              <span>1</span>
              <p>Allow camera access</p>
            </div>

            <div>
              <span>2</span>
              <p>Point camera at the QR</p>
            </div>

            <div>
              <span>3</span>
              <p>View verified batch</p>
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default QRScanner