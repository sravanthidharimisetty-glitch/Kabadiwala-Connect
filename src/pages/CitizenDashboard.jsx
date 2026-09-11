import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './CitizenDashboard.css'

function CitizenDashboard() {
  const navigate = useNavigate()
  const location = useLocation()

  const [material, setMaterial] = useState(
    location.state?.detectedMaterial || ''
  )
  const [weight, setWeight] = useState('')
  const [pickupRequested, setPickupRequested] = useState(false)

  const prices = {
    Cardboard: 20,
    Plastic: 20,
    Metal: 70,
    'E-Waste': 120,
    Copper: 650,
  }

  const estimatedPrice =
    material && weight
      ? Number(weight) * prices[material]
      : 0

  const handlePickup = () => {
    if (!material || !weight) {
      alert('Please select scrap material and enter weight.')
      return
    }

    navigate('/pickup-details', {
      state: {
        material,
        weight,
        estimatedPrice,
      },
    })
  }

  return (
    <div className="citizen-page">

      {/* HEADER */}
      <header className="citizen-header">

        <div className="citizen-logo">
          <span>♻</span>

          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>

      </header>

      {/* MAIN CONTENT */}
      <main className="citizen-main">

        {/* WELCOME */}
        <section className="welcome-section">

          <div>
            <span className="dashboard-label">
              CITIZEN DASHBOARD
            </span>

            <h1>
              Turn your scrap into
              <span> value.</span>
            </h1>

            <p>
              Sell recyclable materials, get transparent prices
              and request a trusted doorstep pickup.
            </p>
          </div>

          <div className="welcome-icon">
            ♻️
          </div>

        </section>

        {/* STATS */}
        <section className="citizen-stats">

          <div className="stat-card">
            <span>♻️</span>

            <div>
              <strong>24.5 kg</strong>
              <small>Total Recycled</small>
            </div>
          </div>

          <div className="stat-card">
            <span>💰</span>

            <div>
              <strong>₹1,240</strong>
              <small>Total Earnings</small>
            </div>
          </div>

          <div className="stat-card">
            <span>🚛</span>

            <div>
              <strong>6</strong>
              <small>Pickups Completed</small>
            </div>
          </div>

        </section>

        {/* REQUEST GRID */}
        <section className="request-grid">

          {/* LEFT CARD */}
          <div className="request-card">

            <div className="card-heading">

              <div>
                <span className="step-number">
                  01
                </span>

                <h2>Sell Your Scrap</h2>
              </div>

              <span className="secure-badge">
                ✓ Trusted
              </span>

            </div>

            <p className="card-description">
              Select your material and enter its approximate weight.
              We'll calculate an indicative value for you.
            </p>

            {/* AI BUTTON */}
            <button
              className="ai-scrap-btn"
              onClick={() => navigate('/ai-scrap-scanner')}
            >
              🤖 Identify Scrap with AI
            </button>

            <div className="ai-divider">
              <span>OR SELECT MANUALLY</span>
            </div>

            {/* MATERIAL */}
            <label>
              Scrap Material
            </label>

            <div className="material-options">

              {Object.keys(prices).map((item) => (

                <button
                  key={item}
                  className={
                    material === item
                      ? 'material-option selected'
                      : 'material-option'
                  }
                  onClick={() => setMaterial(item)}
                >

                  <span className="material-emoji">

                    {item === 'Cardboard' && '📦'}
                    {item === 'Plastic' && '🥤'}
                    {item === 'Metal' && '🔩'}
                    {item === 'E-Waste' && '💻'}
                    {item === 'Copper' && '🔶'}

                  </span>

                  <span>{item}</span>

                </button>

              ))}

            </div>

            {/* WEIGHT */}
            <label htmlFor="weight">
              Approximate Weight
            </label>

            <div className="weight-input">

              <input
                id="weight"
                type="number"
                min="0"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />

              <span>KG</span>

            </div>

            {/* PRICE */}
            <div className="estimate-box">

              <div>

                <small>
                  INDICATIVE PRICE
                </small>

                <strong>
                  ₹{estimatedPrice.toLocaleString('en-IN')}
                </strong>

              </div>

              <span>💰</span>

            </div>

            {/* PICKUP */}
            <button
              className="pickup-request-btn"
              onClick={handlePickup}
            >
              Request Doorstep Pickup →
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="right-column">

            {/* HOW IT WORKS */}
            <div className="info-card">

              <span className="dashboard-label">
                HOW IT WORKS
              </span>

              <h2>
                Recycling made simple.
              </h2>

              <div className="process">

                <div className="process-item">

                  <span>1</span>

                  <div>
                    <strong>Select Scrap</strong>

                    <p>
                      Choose the material you want to sell.
                    </p>
                  </div>

                </div>

                <div className="process-item">

                  <span>2</span>

                  <div>
                    <strong>Get Estimated Price</strong>

                    <p>
                      See a transparent indicative value.
                    </p>
                  </div>

                </div>

                <div className="process-item">

                  <span>3</span>

                  <div>
                    <strong>Request Pickup</strong>

                    <p>
                      A trusted collector comes to your doorstep.
                    </p>
                  </div>

                </div>

                <div className="process-item">

                  <span>4</span>

                  <div>
                    <strong>Get Digital Receipt</strong>

                    <p>
                      Track your recycling journey digitally.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* TRUST */}
            <div className="trust-card">

              <div className="trust-icon">
                🔐
              </div>

              <div>

                <strong>
                  Transparent & Traceable
                </strong>

                <p>
                  Your collection can be digitally tracked
                  from pickup to authorised recycling.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* SUCCESS */}
        {pickupRequested && (

          <section className="success-card">

            <div className="success-icon">
              ✓
            </div>

            <div>

              <span>
                REQUEST CREATED
              </span>

              <h2>
                Pickup request submitted successfully!
              </h2>

              <p>
                A verified collector will be assigned to your request.
              </p>

            </div>

            <button
              onClick={() => setPickupRequested(false)}
            >
              Done
            </button>

          </section>

        )}

      </main>

    </div>
  )
}

export default CitizenDashboard