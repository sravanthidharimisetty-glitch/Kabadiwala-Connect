import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './RecyclerDashboard.css'

function RecyclerDashboard() {
  const navigate = useNavigate()

  const [status, setStatus] = useState('Batch Received')

  const batch = {
    id: 'KC-BATCH-2026-0001',
    pickupId: 'KC-2026-0001',
    material: 'Metal',
    weight: '5 KG',
    value: '₹350',
    collector: 'Verified Collector',
    source: 'B Mattam, Andhra Pradesh',
  }

  const handleProcessing = () => {
    setStatus('Processing')
  }

  const handleCompleted = () => {
    setStatus('Recycling Completed')
  }

  return (
    <div className="recycler-page">

      {/* HEADER */}
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


      {/* MAIN */}
      <main className="recycler-main">

        {/* WELCOME */}
        <section className="recycler-welcome">

          <div>
            <span className="recycler-label">
              RECYCLER DASHBOARD
            </span>

            <h1>Manage recycling batches.</h1>

            <p>
              Receive verified material batches, update processing
              status and maintain a transparent recycling record.
            </p>
          </div>

          <div className="recycler-avatar">
            ♻️
          </div>

        </section>


        {/* STATS */}
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
              <strong>28</strong>
              <small>Completed Batches</small>
            </div>
          </div>


          <div className="recycler-stat">
            <span>🌱</span>

            <div>
              <strong>142 KG</strong>
              <small>Material Recycled</small>
            </div>
          </div>

        </section>


        {/* GRID */}
        <section className="recycler-grid">


          {/* BATCH CARD */}
          <div className="recycler-batch-card">

            <div className="recycler-card-top">

              <div>
                <span className="batch-tag">
                  VERIFIED MATERIAL BATCH
                </span>

                <h2>{batch.id}</h2>
              </div>

              <span className="verified-badge">
                ✓ Verified
              </span>

            </div>


            {/* MATERIAL */}
            <div className="recycler-material">

              <div className="material-icon">
                🔩
              </div>

              <div>
                <small>MATERIAL</small>
                <strong>{batch.material}</strong>
              </div>

              <div>
                <small>WEIGHT</small>
                <strong>{batch.weight}</strong>
              </div>

            </div>


            {/* DETAILS */}
            <div className="recycler-details">

              <div>
                <small>PICKUP REFERENCE</small>
                <strong>{batch.pickupId}</strong>
              </div>

              <div>
                <small>COLLECTOR</small>
                <strong>{batch.collector}</strong>
              </div>

              <div>
                <small>SOURCE</small>
                <strong>{batch.source}</strong>
              </div>

              <div>
                <small>INDICATIVE VALUE</small>
                <strong>{batch.value}</strong>
              </div>

            </div>


            {/* ACTIONS */}
            <div className="recycler-actions">

              {status === 'Batch Received' && (
                <button
                  className="processing-btn"
                  onClick={handleProcessing}
                >
                  ⚙️ Start Processing
                </button>
              )}


              {status === 'Processing' && (
                <button
                  className="complete-btn"
                  onClick={handleCompleted}
                >
                  ✓ Mark Recycling Completed
                </button>
              )}


              {status === 'Recycling Completed' && (
                <div className="recycling-success">

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


          {/* STATUS CARD */}
          <div className="recycler-status-card">

            <span className="status-label">
              RECYCLING STATUS
            </span>

            <h2>Material Journey</h2>


            <div className="recycler-timeline">

              <div className="recycler-timeline-item completed">

                <div className="timeline-circle">
                  ✓
                </div>

                <div>
                  <strong>Collected</strong>
                  <small>
                    Scrap collected from citizen
                  </small>
                </div>

              </div>


              <div className="recycler-line"></div>


              <div className="recycler-timeline-item completed">

                <div className="timeline-circle">
                  ✓
                </div>

                <div>
                  <strong>Collection Centre</strong>
                  <small>
                    Material received at centre
                  </small>
                </div>

              </div>


              <div className="recycler-line"></div>


              <div
                className={`recycler-timeline-item ${
                  status !== 'Batch Received'
                    ? 'completed'
                    : 'current'
                }`}
              >

                <div className="timeline-circle">
                  {status !== 'Batch Received' ? '✓' : '3'}
                </div>

                <div>
                  <strong>Recycler</strong>
                  <small>
                    {status === 'Batch Received'
                      ? 'Batch received for recycling'
                      : 'Material is being processed'}
                  </small>
                </div>

              </div>


              <div className="recycler-line"></div>


              <div
                className={`recycler-timeline-item ${
                  status === 'Recycling Completed'
                    ? 'completed'
                    : ''
                }`}
              >

                <div className="timeline-circle">
                  {status === 'Recycling Completed' ? '✓' : '4'}
                </div>

                <div>
                  <strong>Processed</strong>

                  <small>
                    {status === 'Recycling Completed'
                      ? 'Recycling completed successfully'
                      : 'Waiting for processing'}
                  </small>
                </div>

              </div>

            </div>


            {/* CURRENT STATUS */}
            <div className="recycler-current-status">

              <small>CURRENT STATUS</small>

              <strong>
                ● {status}
              </strong>

            </div>

          </div>

        </section>


        {/* TRACEABILITY */}
        <section className="recycler-info">

          <div>
            <span>🔐</span>

            <div>
              <strong>Verified Chain</strong>

              <p>
                Every batch is linked to its collection record
                for transparent recycling.
              </p>
            </div>
          </div>


          <div>
            <span>📊</span>

            <div>
              <strong>Impact Records</strong>

              <p>
                Completed recycling contributes to measurable
                environmental impact.
              </p>
            </div>
          </div>


          <div>
            <span>🌱</span>

            <div>
              <strong>Circular Economy</strong>

              <p>
                Scrap is converted into reusable material through
                authorised recycling.
              </p>
            </div>
          </div>

        </section>


        {/* BATCH TRACKING BUTTON */}
        <button
          className="tracking-btn"
          onClick={() => navigate('/batch-tracking')}
        >
          🔗 View Digital Batch Tracking
        </button>

      </main>

    </div>
  )
}

export default RecyclerDashboard