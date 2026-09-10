
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './RecyclerDashboard.css'

function RecyclerDashboard() {
  const navigate = useNavigate()
  const [status, setStatus] = useState(
  localStorage.getItem('recyclerStatus') || 'Incoming Batch'
)

useEffect(() => {
  localStorage.setItem('recyclerStatus', status)
}, [status])

  const batch = {
    batchId: 'KC-BATCH-2026-0001',
    pickupId: 'KC-2026-0001',
    material: 'Metal',
    weight: '5 KG',
    value: '₹350',
    collector: 'Verified Collector',
    location: 'B Mattam, Andhra Pradesh',
  }

  const handleReceive = () => {
    setStatus('Received at Recycler')
  }

  const handleProcessing = () => {
    setStatus('Processing')
  }

  const handleRecycled = () => {
    setStatus('Recycling Completed')
  }

  return (
    <div className="recycler-page">

      <header className="recycler-header">

        <div className="recycler-logo">
          <span>♻</span>
          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>
        </div>

        <button
          className="recycler-back"
          onClick={() => navigate('/')}
        >
          ← Home
        </button>

      </header>

      <main className="recycler-main">

        <section className="recycler-welcome">

          <div>
            <span className="recycler-label">
              RECYCLER DASHBOARD
            </span>

            <h1>Manage your material batches.</h1>

            <p>
              Receive collected scrap, track processing
              and update recycling status.
            </p>
          </div>

          <div className="recycler-avatar">
            ♻️
          </div>

        </section>

        <section className="recycler-stats">

          <div className="recycler-stat">
            <span>📦</span>
            <div>
              <strong>1</strong>
              <small>Incoming Batch</small>
            </div>
          </div>

          <div className="recycler-stat">
            <span>⚙️</span>
            <div>
              <strong>3</strong>
              <small>Processing</small>
            </div>
          </div>

          <div className="recycler-stat">
            <span>♻️</span>
            <div>
              <strong>18</strong>
              <small>Recycled Batches</small>
            </div>
          </div>

        </section>

        <section className="recycler-grid">

          <div className="batch-details-card">

            <div className="batch-top">

              <div>
                <span className="batch-tag">
                  INCOMING MATERIAL BATCH
                </span>

                <h2>{batch.batchId}</h2>
              </div>

              <span className="incoming-badge">
                ● Incoming
              </span>

            </div>

            <div className="material-box">

              <div className="material-icon">
                🔩
              </div>

              <div>
                <span>MATERIAL</span>
                <strong>{batch.material}</strong>
              </div>

              <div className="material-weight">
                <span>WEIGHT</span>
                <strong>{batch.weight}</strong>
              </div>

            </div>

            <div className="recycler-details">

              <div className="recycler-detail">
                <span>🔗</span>
                <div>
                  <small>PICKUP ID</small>
                  <strong>{batch.pickupId}</strong>
                </div>
              </div>

              <div className="recycler-detail">
                <span>🚛</span>
                <div>
                  <small>COLLECTOR</small>
                  <strong>{batch.collector}</strong>
                </div>
              </div>

              <div className="recycler-detail">
                <span>📍</span>
                <div>
                  <small>COLLECTION LOCATION</small>
                  <strong>{batch.location}</strong>
                </div>
              </div>

              <div className="recycler-detail">
                <span>💰</span>
                <div>
                  <small>INDICATIVE VALUE</small>
                  <strong>{batch.value}</strong>
                </div>
              </div>

            </div>

            <div className="recycler-actions">

              {status === 'Incoming Batch' && (
                <button
                  className="receive-btn"
                  onClick={handleReceive}
                >
                  ✓ Confirm Material Received
                </button>
              )}

              {status === 'Received at Recycler' && (
                <button
                  className="processing-btn"
                  onClick={handleProcessing}
                >
                  ⚙️ Start Processing
                </button>
              )}

              {status === 'Processing' && (
                <button
                  className="recycled-btn"
                  onClick={handleRecycled}
                >
                  ♻️ Mark as Recycled
                </button>
              )}

              {status === 'Recycling Completed' && (
                <div className="recycling-completed">
                  <span>✓</span>

                  <div>
                    <strong>Recycling Completed</strong>
                    <small>
                      This material batch has been successfully processed.
                    </small>
                  </div>
                </div>
              )}

            </div>

          </div>

          <div className="recycler-status-card">

            <span className="recycler-status-label">
              BATCH STATUS
            </span>

            <h2>Recycling Journey</h2>

            <div className="recycler-timeline">

              <div className="recycler-timeline-item active">
                <span>✓</span>
                <div>
                  <strong>Collected</strong>
                  <small>Scrap collected from citizen</small>
                </div>
              </div>

              <div className="recycler-timeline-item active">
                <span>✓</span>
                <div>
                  <strong>Collection Centre</strong>
                  <small>Material received at centre</small>
                </div>
              </div>

              <div className="recycler-timeline-item">
                <span>3</span>
                <div>
                  <strong>Recycler</strong>
                  <small>Material received for recycling</small>
                </div>
              </div>

              <div className="recycler-timeline-item">
                <span>4</span>
                <div>
                  <strong>Processed</strong>
                  <small>Recycling completed</small>
                </div>
              </div>

            </div>

            <div className="recycler-current-status">
              <small>CURRENT STATUS</small>
              <strong>● {status}</strong>
            </div>

          </div>

        </section>

        <section className="recycler-info">

          <div>
            <span>🔐</span>
            <div>
              <strong>Verified Recycling</strong>
              <p>
                Material batches are linked to their collection records.
              </p>
            </div>
          </div>

          <div>
            <span>🌱</span>
            <div>
              <strong>Environmental Impact</strong>
              <p>
                Every processed batch contributes to measurable recycling impact.
              </p>
            </div>
          </div>

        </section>

      </main>

    </div>
  )
}

export default RecyclerDashboard