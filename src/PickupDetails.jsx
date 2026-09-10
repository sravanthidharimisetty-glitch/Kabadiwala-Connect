import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './PickupDetails.css'


function PickupDetails() {
  const navigate = useNavigate()
  const location = useLocation()

  const material = location.state?.material || 'Metal'
  const weight = location.state?.weight || 5
  const price = location.state?.price || 350

  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [phone, setPhone] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const handleConfirm = () => {
    if (!address || !date || !time || !phone) {
      alert('Please fill all pickup details.')
      return
    }

    setConfirmed(true)
  }

  return (
    <div className="pickup-page">

      <header className="pickup-header">
        <div className="pickup-logo">
          <span>♻</span>

          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate('/citizen')}
        >
          ← Back to Dashboard
        </button>
      </header>

      <main className="pickup-main">

        <div className="pickup-title">
          <span>PICKUP REQUEST</span>

          <h1>
            Schedule your doorstep pickup.
          </h1>

          <p>
            Enter your pickup details and a trusted collector
            will be assigned to your request.
          </p>
        </div>

        {!confirmed ? (

          <div className="pickup-grid">

            {/* FORM */}

            <div className="pickup-card">

              <h2>Pickup Details</h2>

              <label>Pickup Address</label>

              <textarea
                placeholder="Enter your complete pickup address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <div className="form-row">

                <div>
                  <label>Preferred Date</label>

                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <label>Preferred Time</label>

                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="">Select time</option>
                    <option>9:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 1:00 PM</option>
                    <option>2:00 PM - 4:00 PM</option>
                    <option>4:00 PM - 6:00 PM</option>
                  </select>
                </div>

              </div>

              <label>Contact Number</label>

              <input
                type="tel"
                placeholder="Enter contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                className="confirm-btn"
                onClick={handleConfirm}
              >
                Confirm Pickup →
              </button>

            </div>


            {/* SUMMARY */}

            <div className="summary-card">

              <span className="summary-label">
                SCRAP SUMMARY
              </span>

              <h2>Your Collection</h2>

              <div className="summary-item">
                <span>Material</span>
                <strong>{material}</strong>
              </div>

              <div className="summary-item">
                <span>Approx. Weight</span>
                <strong>{weight} KG</strong>
              </div>

              <div className="summary-item">
                <span>Indicative Value</span>
                <strong>₹{Number(price).toLocaleString('en-IN')}</strong>
              </div>

              <div className="summary-divider"></div>

              <div className="secure-note">
                🔐 Your details are securely used only for pickup coordination.
              </div>

            </div>

          </div>

        ) : (

          <div className="confirmation-card">

            <div className="confirmation-icon">
              ✓
            </div>

            <span>REQUEST CONFIRMED</span>

            <h1>
              Your pickup is booked!
            </h1>

            <p>
              A verified Kabadiwala collector will be assigned
              to your pickup shortly.
            </p>

            <div className="pickup-id">
              <small>PICKUP ID</small>
              <strong>KC-2026-0001</strong>
            </div>

            <div className="status-box">
              <span>●</span>
              Searching for Collector
            </div>

            <button
              onClick={() => navigate('/citizen')}
              className="dashboard-btn"
            >
              Go to Dashboard
            </button>

          </div>

        )}

      </main>

    </div>
  )
}

export default PickupDetails