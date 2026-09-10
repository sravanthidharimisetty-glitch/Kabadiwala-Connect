import { useNavigate } from 'react-router-dom'
import './AdminDashboard.css'
import { useState } from 'react'

function AdminDashboard() {
  const [recyclerStatus] = useState(
    localStorage.getItem('recyclerStatus') || 'Incoming Batch'
  )

  const isRecycled =
    recyclerStatus === 'Recycling Completed'

  const navigate = useNavigate()

  return (
    <div className="admin-page">

      <header className="admin-header">

        <div className="admin-logo">
          <span>♻</span>

          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>
        </div>

        <button
          className="admin-back"
          onClick={() => navigate('/')}
        >
          ← Home
        </button>

      </header>


      <main className="admin-main">

        <section className="admin-welcome">

          <div>
            <span className="admin-label">
              GOVERNMENT / ADMIN DASHBOARD
            </span>

            <h1>
              Monitor recycling impact.
            </h1>

            <p>
              Track collections, verified recyclers and environmental
              impact across the Kabadiwala Connect network.
            </p>
          </div>

          <div className="admin-avatar">
            🏛️
          </div>

        </section>


        {/* STATS */}

        <section className="admin-stats">

          <div className="admin-stat">
            <span>♻️</span>

            <div>
              <strong>18.6 T</strong>
              <small>Total Recycled</small>
            </div>
          </div>


          <div className="admin-stat">
            <span>👥</span>

            <div>
              <strong>248</strong>
              <small>Active Collectors</small>
            </div>
          </div>


          <div className="admin-stat">
            <span>🏭</span>

            <div>
              <strong>32</strong>
              <small>Verified Recyclers</small>
            </div>
          </div>


          <div className="admin-stat">
            <span>📦</span>

            <div>
              <strong>1,426</strong>
              <small>Material Batches</small>
            </div>
          </div>

        </section>


        {/* LATEST VERIFIED BATCH */}

        {isRecycled && (
          <section className="latest-batch-card">

            <div className="latest-batch-left">

              <span className="latest-label">
                LATEST VERIFIED BATCH
              </span>

              <h2>
                KC-BATCH-2026-0001
              </h2>

              <p>
                Metal • 5 KG • ₹350
              </p>

            </div>


            <div className="latest-batch-middle">

              <span className="latest-success">
                ✓ Recycling Completed
              </span>

              <small>
                Verified recycling record
              </small>

            </div>


            <button
              className="latest-batch-btn"
              onClick={() =>
                navigate('/batch/KC-BATCH-2026-0001')
              }
            >
              View Traceability →
            </button>

          </section>
        )}


        {/* MAIN GRID */}

        <section className="admin-grid">

          <div className="impact-card">

            <div className="card-heading">

              <div>
                <span>
                  ENVIRONMENTAL IMPACT
                </span>

                <h2>
                  Recycling overview
                </h2>
              </div>

              <span className="verified">
                ✓ Verified
              </span>

            </div>


            <div className="impact-list">

              <div className="impact-row">

                <div className="impact-icon">
                  📄
                </div>

                <div className="impact-info">
                  <strong>
                    Paper & Cardboard
                  </strong>

                  <small>
                    6.2 tonnes recycled
                  </small>
                </div>

                <strong>
                  33%
                </strong>

              </div>


              <div className="impact-row">

                <div className="impact-icon">
                  🧴
                </div>

                <div className="impact-info">
                  <strong>
                    Plastic
                  </strong>

                  <small>
                    4.8 tonnes recycled
                  </small>
                </div>

                <strong>
                  26%
                </strong>

              </div>


              <div className="impact-row">

                <div className="impact-icon">
                  🔩
                </div>

                <div className="impact-info">
                  <strong>
                    Metal
                  </strong>

                  <small>
                    3.9 tonnes recycled
                  </small>
                </div>

                <strong>
                  21%
                </strong>

              </div>


              <div className="impact-row">

                <div className="impact-icon">
                  📱
                </div>

                <div className="impact-info">
                  <strong>
                    E-Waste
                  </strong>

                  <small>
                    2.4 tonnes recycled
                  </small>
                </div>

                <strong>
                  13%
                </strong>

              </div>


              <div className="impact-row">

                <div className="impact-icon">
                  🍾
                </div>

                <div className="impact-info">
                  <strong>
                    Glass & Others
                  </strong>

                  <small>
                    1.3 tonnes recycled
                  </small>
                </div>

                <strong>
                  7%
                </strong>

              </div>

            </div>

          </div>


          {/* NETWORK STATUS */}

          <div className="admin-status-card">

            <span className="admin-status-label">
              NETWORK STATUS
            </span>

            <h2>
              Recycling Network
            </h2>


            <div className="network-item">

              <span>🟢</span>

              <div>
                <strong>
                  Collectors
                </strong>

                <small>
                  248 active
                </small>
              </div>

            </div>


            <div className="network-item">

              <span>🟢</span>

              <div>
                <strong>
                  Collection Centres
                </strong>

                <small>
                  14 operational
                </small>
              </div>

            </div>


            <div className="network-item">

              <span>🟢</span>

              <div>
                <strong>
                  Verified Recyclers
                </strong>

                <small>
                  32 connected
                </small>
              </div>

            </div>


            <div className="network-item">

              <span>🟢</span>

              <div>
                <strong>
                  Digital Traceability
                </strong>

                <small>
                  100% batch linked
                </small>
              </div>

            </div>

          </div>

        </section>


        {/* IMPACT BOXES */}

        <section className="admin-bottom">

          <div className="admin-impact-box">

            <span>🌱</span>

            <div>
              <strong>
                CO₂ Impact
              </strong>

              <p>
                Estimated <b>12.4 tonnes</b> of CO₂ emissions
                avoided through verified recycling.
              </p>
            </div>

          </div>


          <div className="admin-impact-box">

            <span>💰</span>

            <div>
              <strong>
                Collector Earnings
              </strong>

              <p>
                ₹8.7 lakh generated through recorded scrap
                transactions.
              </p>
            </div>

          </div>


          <div className="admin-impact-box">

            <span>🔗</span>

            <div>
              <strong>
                Traceable Materials
              </strong>

              <p>
                Every verified batch can be traced from collection
                to recycling.
              </p>
            </div>

          </div>

        </section>


        {/* FOOTER */}

        <section className="admin-footer-note">

          <strong>
            Trust Layer for Informal Recycling
          </strong>

          <p>
            Kabadiwala Connect creates a transparent digital record
            connecting citizens, collectors, collection centres and
            authorised recyclers.
          </p>

        </section>

      </main>

    </div>
  )
}

export default AdminDashboard