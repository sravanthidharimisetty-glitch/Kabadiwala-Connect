import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

import CitizenDashboard from './pages/CitizenDashboard'
import PickupDetails from './PickupDetails'
import CollectorDashboard from './pages/CollectorDashboard'
import RecyclerDashboard from './pages/RecyclerDashboard'
import BatchTracking from './pages/BatchTracking'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import QRScanner from './pages/QRScanner'
import AIScrapScanner from './pages/AIScrapScanner'


function Home() {
  const navigate = useNavigate()

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">

          <span className="logo-icon">
            ♻
          </span>

          <div>
            <h2>Kabadiwala</h2>
            <span>CONNECT</span>
          </div>

        </div>


        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#how">
            How It Works
          </a>

          <a href="#impact">
            Impact
          </a>

          <a href="#about">
            About
          </a>

        </div>


        {/* LOGIN - FIXED */}
        <button
          className="login-btn"
          onClick={() => navigate('/login')}
        >
          Login
        </button>

      </nav>


      {/* HERO */}
      <section
        className="hero-section"
        id="home"
      >

        <div className="hero-content">

          <div className="badge">
            ♻️ Turning Scrap into Impact
          </div>


          <h1>
            Give Your Scrap
            <br />
            <span>a New Purpose.</span>
          </h1>


          <p>
            Connect with trusted kabadiwalas, authorised recyclers,
            and collection centres — all in one simple platform.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate('/citizen')}
            >
              Sell Your Scrap →
            </button>


            <button
              className="secondary-btn"
              onClick={() =>
                alert('Collector registration coming next!')
              }
            >
              Become a Collector
            </button>

          </div>


          <div className="trust-row">

            <div>
              <strong>10K+</strong>
              <span>Collectors</span>
            </div>

            <div>
              <strong>50K+</strong>
              <span>Collections</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Traceable</span>
            </div>

          </div>

        </div>


        {/* HERO CARD */}
        <div className="hero-card-area">

          <div className="main-card">

            <div className="card-top">

              <div>

                <span className="small-label">
                  TODAY'S COLLECTION
                </span>

                <h3>
                  12.8 kg
                </h3>

              </div>


              <div className="green-circle">
                ♻
              </div>

            </div>


            <div className="material-list">

              <div className="material">

                <div className="material-icon paper">
                  📦
                </div>

                <div>
                  <strong>Cardboard</strong>
                  <span>5.2 kg</span>
                </div>

                <b>₹104</b>

              </div>


              <div className="material">

                <div className="material-icon plastic">
                  🥤
                </div>

                <div>
                  <strong>Plastic</strong>
                  <span>3.6 kg</span>
                </div>

                <b>₹72</b>

              </div>


              <div className="material">

                <div className="material-icon metal">
                  🔩
                </div>

                <div>
                  <strong>Metal</strong>
                  <span>4.0 kg</span>
                </div>

                <b>₹280</b>

              </div>

            </div>


            <div className="total-row">

              <span>
                Estimated Value
              </span>

              <strong>
                ₹456
              </strong>

            </div>


            <button
              className="pickup-btn"
              onClick={() => navigate('/citizen')}
            >
              Request Pickup
            </button>

          </div>


          <div className="floating-card">

            <span className="check">
              ✓
            </span>

            <div>

              <strong>
                Pickup Confirmed
              </strong>

              <small>
                Collector is on the way
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section
        className="features"
        id="how"
      >

        <div className="section-heading">

          <span>
            WHY KABADIWALA CONNECT?
          </span>

          <h2>
            From Scrap to
            <span> Smart Recycling</span>
          </h2>

          <p>
            We bring citizens, collectors and recyclers together
            to create a cleaner and more transparent recycling ecosystem.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              📱
            </div>

            <h3>
              Easy Pickup
            </h3>

            <p>
              Request a scrap pickup from your home with just a few clicks.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💰
            </div>

            <h3>
              Fair Pricing
            </h3>

            <p>
              Get transparent indicative prices before your scrap is collected.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🔍
            </div>

            <h3>
              AI Assisted
            </h3>

            <p>
              Identify scrap categories quickly using AI-powered assistance.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🔗
            </div>

            <h3>
              Traceable Recycling
            </h3>

            <p>
              Track your material from collection to authorised recycling.
            </p>

          </div>

        </div>

      </section>


      {/* IMPACT */}
      <section
        className="impact-section"
        id="impact"
      >

        <div>

          <span className="section-label">
            OUR IMPACT
          </span>


          <h2>
            Every kilogram
            <br />
            <span>makes a difference.</span>
          </h2>


          <p>
            Your discarded materials can become valuable resources.
            Together, we can build a cleaner and more sustainable future.
          </p>


          <button
            className="primary-btn"
            onClick={() => navigate('/citizen')}
          >
            Start Recycling →
          </button>

        </div>


        <div className="impact-stats">

          <div>
            <strong>2.5M+</strong>
            <span>KG RECYCLED</span>
          </div>

          <div>
            <strong>850+</strong>
            <span>COLLECTION CENTRES</span>
          </div>

          <div>
            <strong>120K+</strong>
            <span>HAPPY CITIZENS</span>
          </div>

          <div>
            <strong>35K+</strong>
            <span>TONNES CO₂ SAVED</span>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer id="about">

        <div className="footer-brand">

          <div className="logo">

            <span className="logo-icon">
              ♻
            </span>

            <div>

              <h2>
                Kabadiwala
              </h2>

              <span>
                CONNECT
              </span>

            </div>

          </div>


          <p>
            Connecting people, scrap collectors and recyclers
            for a smarter circular economy.
          </p>

        </div>


        <div className="footer-links">

          <h4>
            Platform
          </h4>

          <a href="#home">
            For Citizens
          </a>

          <a href="#home">
            For Collectors
          </a>

          <a href="#home">
            For Recyclers
          </a>

          <a href="#home">
            Admin Dashboard
          </a>

        </div>


        <div className="footer-links">

          <h4>
            Connect
          </h4>

          <a href="#home">
            Help Center
          </a>

          <a href="#home">
            Contact Us
          </a>

          <a href="#home">
            Privacy
          </a>

          <a href="#home">
            Terms
          </a>

        </div>

      </footer>

    </div>
  )
}


/* ================= MAIN APP ================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />


        {/* CITIZEN DASHBOARD */}
        <Route
          path="/citizen"
          element={<CitizenDashboard />}
        />
        <Route
  path="/ai-scrap-scanner"
  element={<AIScrapScanner />}
/>


        {/* PICKUP DETAILS */}
        <Route
          path="/pickup-details"
          element={<PickupDetails />}
        />


        {/* COLLECTOR DASHBOARD */}
        <Route
          path="/collector"
          element={<CollectorDashboard />}
        />


        {/* RECYCLER DASHBOARD */}
        <Route
          path="/recycler"
          element={<RecyclerDashboard />}
        />


        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />


        {/* BATCH TRACKING */}
        <Route
          path="/batch-tracking"
          element={<BatchTracking />}
        />


        {/* DYNAMIC BATCH URL */}
        <Route
          path="/batch/:batchId"
          element={<BatchTracking />}
        />
        <Route
  path="/qr-scanner"
  element={<QRScanner />}
/>

      </Routes>

    </BrowserRouter>

  )
}


export default App