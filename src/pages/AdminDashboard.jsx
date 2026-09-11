import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminDashboard.css'

function AdminDashboard() {
  const navigate = useNavigate()

  const [filter, setFilter] = useState('All')

  const materials = [
    {
      name: 'Metal',
      weight: '5 KG',
      status: 'Recycled',
      percentage: 82,
    },
    {
      name: 'Plastic',
      weight: '38 KG',
      status: 'Processing',
      percentage: 64,
    },
    {
      name: 'Cardboard',
      weight: '52 KG',
      status: 'Recycled',
      percentage: 91,
    },
    {
      name: 'E-Waste',
      weight: '18 KG',
      status: 'Processing',
      percentage: 48,
    },
  ]

  const filteredMaterials =
    filter === 'All'
      ? materials
      : materials.filter((item) => item.status === filter)

  return (
    <div className="admin-page">

      {/* HEADER */}
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

        {/* WELCOME SECTION */}
        <section className="admin-welcome">

          <div>
            <span className="admin-label">
              GOVERNMENT / ADMIN DASHBOARD
            </span>

            <h1>Monitor recycling impact.</h1>

            <p>
              Track collection activity, verified material batches,
              recycling progress and environmental impact across the network.
            </p>
          </div>

          <div className="admin-icon">
            📊
          </div>

        </section>


        {/* STATS */}
        <section className="admin-stats">

          <div className="admin-stat-card">
            <span>👥</span>

            <div>
              <strong>1,248</strong>
              <small>Registered Collectors</small>
            </div>
          </div>


          <div className="admin-stat-card">
            <span>♻️</span>

            <div>
              <strong>2,846 KG</strong>
              <small>Total Scrap Collected</small>
            </div>
          </div>


          <div className="admin-stat-card">
            <span>📦</span>

            <div>
              <strong>486</strong>
              <small>Material Batches</small>
            </div>
          </div>


          <div className="admin-stat-card">
            <span>🌱</span>

            <div>
              <strong>1.92 T</strong>
              <small>CO₂ Impact Reduced</small>
            </div>
          </div>

        </section>


        {/* DASHBOARD GRID */}
        <section className="admin-grid">

          {/* MATERIAL ACTIVITY */}
          <div className="admin-card">

            <div className="admin-card-header">

              <div>
                <span className="section-label">
                  RECYCLING OVERVIEW
                </span>

                <h2>Material activity</h2>
              </div>

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Recycled">Recycled</option>
                <option value="Processing">Processing</option>
              </select>

            </div>


            <div className="material-list">

              {filteredMaterials.map((item) => (

                <div
                  className="material-row"
                  key={item.name}
                >

                  <div className="material-name">

                    <div className="material-dot">
                      ♻
                    </div>

                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.weight}</small>
                    </div>

                  </div>


                  <div className="material-progress">

                    <div className="progress-track">

                      <div
                        className="progress-fill"
                        style={{
                          width: `${item.percentage}%`,
                        }}
                      />

                    </div>

                    <small>
                      {item.percentage}%
                    </small>

                  </div>


                  <span
                    className={
                      item.status === 'Recycled'
                        ? 'status-pill recycled'
                        : 'status-pill processing'
                    }
                  >
                    {item.status}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* NETWORK STATUS */}
          <div className="admin-card network-card">

            <span className="section-label">
              NETWORK STATUS
            </span>

            <h2>Collection network</h2>

            <div className="network-circle">
              <strong>94%</strong>
              <small>Active</small>
            </div>


            <div className="network-stats">

              <div>
                <strong>1,174</strong>
                <span>Active Collectors</span>
              </div>

              <div>
                <strong>74</strong>
                <span>Offline</span>
              </div>

              <div>
                <strong>86</strong>
                <span>Collection Centres</span>
              </div>

              <div>
                <strong>24</strong>
                <span>Verified Recyclers</span>
              </div>

            </div>

          </div>

        </section>


        {/* ENVIRONMENTAL IMPACT */}
        <section className="impact-card">

          <div className="impact-content">

            <span className="section-label">
              ENVIRONMENTAL IMPACT
            </span>

            <h2>
              Turning scrap into measurable impact.
            </h2>

            <p>
              Verified collection and recycling records help
              authorities understand waste flows and measure
              environmental outcomes.
            </p>

          </div>


          <div className="impact-metrics">

            <div>
              <strong>2.84 T</strong>
              <span>Waste Diverted</span>
            </div>

            <div>
              <strong>1.92 T</strong>
              <span>CO₂ Reduced</span>
            </div>

            <div>
              <strong>486</strong>
              <span>Traceable Batches</span>
            </div>

          </div>

        </section>


        {/* RECENT ACTIVITY */}
        <section className="admin-card activity-card">

          <div className="admin-card-header">

            <div>
              <span className="section-label">
                RECENT ACTIVITY
              </span>

              <h2>Latest network updates</h2>
            </div>

            <span className="live-indicator">
              ● LIVE DEMO
            </span>

          </div>


          <div className="activity-list">

            <div className="activity-row">

              <span>♻️</span>

              <div>
                <strong>
                  Batch KC-BATCH-2026-0001 recycled
                </strong>

                <small>
                  Metal · 5 KG · Verified Recycler
                </small>
              </div>

              <time>
                Just now
              </time>

            </div>


            <div className="activity-row">

              <span>📦</span>

              <div>
                <strong>
                  New material batch received
                </strong>

                <small>
                  Cardboard · Collection Centre
                </small>
              </div>

              <time>
                12 min ago
              </time>

            </div>


            <div className="activity-row">

              <span>👤</span>

              <div>
                <strong>
                  New collector registered
                </strong>

                <small>
                  Collector verification pending
                </small>
              </div>

              <time>
                28 min ago
              </time>

            </div>

          </div>

        </section>


        {/* INFO CARDS */}
        <section className="admin-info">

          <div>

            <span>🔐</span>

            <div>
              <strong>Verified Records</strong>

              <p>
                Collection and recycling events are digitally recorded.
              </p>
            </div>

          </div>


          <div>

            <span>📍</span>

            <div>
              <strong>Network Visibility</strong>

              <p>
                Authorities can monitor collection activity and material flow.
              </p>
            </div>

          </div>


          <div>

            <span>🌱</span>

            <div>
              <strong>Impact Measurement</strong>

              <p>
                Environmental outcomes can be measured from verified data.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

export default AdminDashboard