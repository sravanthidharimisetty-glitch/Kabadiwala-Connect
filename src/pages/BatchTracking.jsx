import { useNavigate, useParams } from 'react-router-dom'
import QRCode from 'react-qr-code'
import './BatchTracking.css'

function BatchTracking() {
  const navigate = useNavigate()
  const { batchId } = useParams()

  const recyclerStatus =
    localStorage.getItem('recyclerStatus') || 'Incoming Batch'

  const batch = {
    batchId: batchId || 'KC-BATCH-2026-0001',
    pickupId: 'KC-2026-0001',
    material: 'Metal',
    weight: '5 KG',
    value: '₹350',
    collector: 'Verified Collector',
    location: 'B Mattam, Andhra Pradesh',
  }

  const journey = [
    {
      number: '✓',
      title: 'Collected',
      description: 'Scrap collected from citizen',
      completed: true,
    },
    {
      number: '✓',
      title: 'Collection Centre',
      description: 'Material received at collection centre',
      completed: true,
    },
    {
      number:
        recyclerStatus === 'Received at Recycler' ||
        recyclerStatus === 'Processing' ||
        recyclerStatus === 'Recycling Completed'
          ? '✓'
          : '3',
      title: 'Recycler',
      description:
        recyclerStatus === 'Incoming Batch'
          ? 'Waiting for recycler'
          : 'Material received for recycling',
      completed:
        recyclerStatus === 'Received at Recycler' ||
        recyclerStatus === 'Processing' ||
        recyclerStatus === 'Recycling Completed',
    },
    {
      number:
        recyclerStatus === 'Recycling Completed'
          ? '✓'
          : '4',
      title: 'Processed',
      description:
        recyclerStatus === 'Recycling Completed'
          ? 'Recycling completed successfully'
          : 'Recycling pending',
      completed:
        recyclerStatus === 'Recycling Completed',
    },
  ]

  return (
    <div className="batch-page">

      {/* HEADER */}
      <header className="batch-header">

        <div className="batch-logo">

          <span>♻</span>

          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>

        </div>

        <button
          className="batch-home-btn"
          onClick={() => navigate('/')}
        >
          ← Home
        </button>

      </header>


      {/* MAIN */}
      <main className="batch-main">

        {/* HERO */}
        <section className="batch-hero">

          <div>

            <span className="batch-label">
              DIGITAL MATERIAL TRACEABILITY
            </span>

            <h1>
              Track your scrap journey.
            </h1>

            <p>
              Follow this material batch from collection
              to verified recycling.
            </p>

          </div>

          <div className="batch-verified">
            ✓ Verified Batch
          </div>

        </section>


        {/* MAIN CARDS */}
        <section className="batch-layout">

          {/* BATCH CARD */}
          <div className="batch-card">

            <div className="batch-card-top">

              <div>

                <span>BATCH ID</span>

                <h2>
                  {batch.batchId}
                </h2>

              </div>

              <div className="batch-status">

                ●{' '}

                {recyclerStatus === 'Incoming Batch'
                  ? 'In Transit'
                  : recyclerStatus}

              </div>

            </div>


            {/* QR + INFORMATION */}
            <div className="qr-section">

              {/* REAL QR CODE */}
              <div className="qr-placeholder">

                <QRCode
                  value={`${window.location.origin}/batch/${batch.batchId}`}
                  size={150}
                />

                <small>
                  SCAN TO VERIFY
                </small>

                {/* QR SCANNER BUTTON */}
                <button
                  className="scan-qr-btn"
                  onClick={() => navigate('/qr-scanner')}
                >
                  📷 Scan QR Code
                </button>

              </div>


              {/* BATCH INFORMATION */}
              <div className="batch-information">

                <div className="info-row">

                  <span>♻️</span>

                  <div>
                    <small>MATERIAL</small>
                    <strong>
                      {batch.material}
                    </strong>
                  </div>

                </div>


                <div className="info-row">

                  <span>⚖️</span>

                  <div>
                    <small>WEIGHT</small>
                    <strong>
                      {batch.weight}
                    </strong>
                  </div>

                </div>


                <div className="info-row">

                  <span>💰</span>

                  <div>
                    <small>VALUE</small>
                    <strong>
                      {batch.value}
                    </strong>
                  </div>

                </div>


                <div className="info-row">

                  <span>🚛</span>

                  <div>
                    <small>COLLECTOR</small>
                    <strong>
                      {batch.collector}
                    </strong>
                  </div>

                </div>


                <div className="info-row">

                  <span>📍</span>

                  <div>
                    <small>LOCATION</small>
                    <strong>
                      {batch.location}
                    </strong>
                  </div>

                </div>

              </div>

            </div>


            {/* PICKUP REFERENCE */}
            <div className="pickup-reference">

              <span>
                PICKUP REFERENCE
              </span>

              <strong>
                {batch.pickupId}
              </strong>

            </div>

          </div>


          {/* JOURNEY CARD */}
          <div className="journey-card">

            <span className="journey-label">
              MATERIAL JOURNEY
            </span>

            <h2>
              From scrap to impact
            </h2>


            <div className="journey-list">

              {journey.map((item, index) => (

                <div
                  className={`journey-item ${
                    item.completed
                      ? 'completed'
                      : ''
                  }`}
                  key={item.title}
                >

                  <div className="journey-marker">
                    {item.number}
                  </div>


                  {index !== journey.length - 1 && (

                    <div
                      className={`journey-line ${
                        item.completed
                          ? 'completed-line'
                          : ''
                      }`}
                    />

                  )}


                  <div className="journey-content">

                    <strong>
                      {item.title}
                    </strong>

                    <small>
                      {item.description}
                    </small>

                  </div>

                </div>

              ))}

            </div>


            {/* CURRENT STATUS */}
            <div className="current-batch-status">

              <small>
                CURRENT STATUS
              </small>

              <strong>

                ●{' '}

                {recyclerStatus === 'Incoming Batch'
                  ? 'Collection Centre'
                  : recyclerStatus}

              </strong>


              <p>

                {recyclerStatus === 'Recycling Completed'
                  ? 'This material has been successfully recycled and verified.'
                  : recyclerStatus === 'Processing'
                    ? 'The material is currently being processed by the recycler.'
                    : recyclerStatus === 'Received at Recycler'
                      ? 'The authorised recycler has received this material batch.'
                      : 'Your material is moving towards the authorised recycling network.'}

              </p>

            </div>

          </div>

        </section>


        {/* TRUST SECTION */}
        <section className="trust-section">

          <div>

            <span>🔐</span>

            <div>

              <strong>
                Verified Chain
              </strong>

              <p>
                Collection and recycling records are linked
                to this unique batch ID.
              </p>

            </div>

          </div>


          <div>

            <span>📊</span>

            <div>

              <strong>
                Transparent Records
              </strong>

              <p>
                Material weight, value and movement can be
                digitally recorded.
              </p>

            </div>

          </div>


          <div>

            <span>🌱</span>

            <div>

              <strong>
                Environmental Impact
              </strong>

              <p>
                Successful recycling contributes to measurable
                environmental impact.
              </p>

            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

export default BatchTracking