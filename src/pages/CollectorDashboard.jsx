import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CollectorDashboard.css'

function CollectorDashboard() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('New Request')

  const pickup = {
    id: 'KC-2026-0001',
    material: 'Metal',
    weight: '5 KG',
    value: '₹350',
    address: 'B Mattam, Andhra Pradesh',
    date: '12 September 2026',
    time: '9:00 AM - 11:00 AM',
  }

  const handleAccept = () => {
    setStatus('Pickup Accepted')
  }

  const handleOnWay = () => {
    setStatus('Collector On The Way')
  }

  const handleCollected = () => {
    setStatus('Scrap Collected')
  }

  return (
    <div className="collector-page">

      <header className="collector-header">
        <div className="collector-logo">
          <span>♻</span>
          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>
        </div>

        <button
          className="collector-back"
          onClick={() => navigate('/')}
        >
          ← Home
        </button>
      </header>

      <main className="collector-main">

        <section className="collector-welcome">
          <div>
            <span className="collector-label">
              COLLECTOR DASHBOARD
            </span>

            <h1>Manage your pickups.</h1>

            <p>
              View nearby pickup requests, accept collections
              and update their status in real time.
            </p>
          </div>

          <div className="collector-avatar">
            🚛
          </div>
        </section>

        <section className="collector-stats">

          <div className="collector-stat">
            <span>📦</span>
            <div>
              <strong>1</strong>
              <small>New Request</small>
            </div>
          </div>

          <div className="collector-stat">
            <span>🚛</span>
            <div>
              <strong>4</strong>
              <small>Today's Pickups</small>
            </div>
          </div>

          <div className="collector-stat">
            <span>💰</span>
            <div>
              <strong>₹1,240</strong>
              <small>Total Earnings</small>
            </div>
          </div>

        </section>

        <section className="collector-grid">

          <div className="request-details-card">

            <div className="request-top">
              <div>
                <span className="request-tag">
                  NEW PICKUP REQUEST
                </span>

                <h2>Pickup #{pickup.id}</h2>
              </div>

              <span className="new-badge">
                ● New
              </span>
            </div>

            <div className="scrap-box">

              <div className="scrap-icon">
                🔩
              </div>

              <div>
                <span>SCRAP MATERIAL</span>
                <strong>{pickup.material}</strong>
              </div>

              <div className="scrap-weight">
                <span>WEIGHT</span>
                <strong>{pickup.weight}</strong>
              </div>

            </div>

            <div className="details-list">

              <div className="detail-item">
                <span>📍</span>

                <div>
                  <small>PICKUP ADDRESS</small>
                  <strong>{pickup.address}</strong>
                </div>
              </div>

              <div className="detail-item">
                <span>📅</span>

                <div>
                  <small>DATE & TIME</small>
                  <strong>
                    {pickup.date} · {pickup.time}
                  </strong>
                </div>
              </div>

              <div className="detail-item">
                <span>💰</span>

                <div>
                  <small>INDICATIVE VALUE</small>
                  <strong>{pickup.value}</strong>
                </div>
              </div>

            </div>

            <div className="collector-actions">

              {status === 'New Request' && (
                <button
                  className="accept-btn"
                  onClick={handleAccept}
                >
                  ✓ Accept Pickup
                </button>
              )}

              {status === 'Pickup Accepted' && (
                <button
                  className="way-btn"
                  onClick={handleOnWay}
                >
                  🚛 Mark as On The Way
                </button>
              )}

              {status === 'Collector On The Way' && (
                <button
                  className="collect-btn"
                  onClick={handleCollected}
                >
                  ✓ Mark Scrap Collected
                </button>
              )}

              {status === 'Scrap Collected' && (
                <div className="completed-message">

                  <span>✓</span>

                  <div>
                    <strong>Collection Completed</strong>

                    <small>
                      Scrap successfully collected from the citizen.
                    </small>
                  </div>

                  <button
                    className="batch-btn"
                    onClick={() => navigate('/batch-tracking')}
                  >
                    🔗 Generate Digital Batch QR
                  </button>

                </div>
              )}

            </div>

          </div>

          <div className="status-card">

            <span className="status-label">
              PICKUP STATUS
            </span>

            <h2>Track Collection</h2>

            <div className="timeline">

              <div className="timeline-item active">
                <span>✓</span>
                <div>
                  <strong>New Request</strong>
                  <small>Pickup request received</small>
                </div>
              </div>

              <div className="timeline-item active">
                <span>✓</span>
                <div>
                  <strong>Pickup Accepted</strong>
                  <small>Collector accepted request</small>
                </div>
              </div>

              <div className="timeline-item active">
                <span>✓</span>
                <div>
                  <strong>On The Way</strong>
                  <small>Collector is travelling</small>
                </div>
              </div>

              <div className="timeline-item">
                <span>4</span>
                <div>
                  <strong>Scrap Collected</strong>
                  <small>Collection completed</small>
                </div>
              </div>

            </div>

            <div className="current-status">
              <small>CURRENT STATUS</small>
              <strong>● {status}</strong>
            </div>

          </div>

        </section>

        <section className="collector-info">

          <div>
            <span>🔐</span>

            <div>
              <strong>Trusted Collection</strong>
              <p>
                Citizen details are used only for pickup coordination.
              </p>
            </div>
          </div>

          <div>
            <span>♻️</span>

            <div>
              <strong>Traceable Recycling</strong>
              <p>
                Every collected material can be linked to a digital batch.
              </p>
            </div>
          </div>

        </section>

      </main>

    </div>
  )
}

export default CollectorDashboard