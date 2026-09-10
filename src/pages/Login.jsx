import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const [role, setRole] = useState('Citizen')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      alert('Please enter email and password')
      return
    }

    if (role === 'Citizen') {
      navigate('/citizen')
    } else if (role === 'Collector') {
      navigate('/collector')
    } else if (role === 'Recycler') {
      navigate('/recycler')
    } else if (role === 'Admin') {
      navigate('/admin')
    }
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <span>♻</span>
          <div>
            <strong>Kabadiwala</strong>
            <small>CONNECT</small>
          </div>
        </div>

        <span className="login-label">
          SECURE LOGIN
        </span>

        <h1>Welcome back.</h1>

        <p className="login-subtitle">
          Login to continue to Kabadiwala Connect.
        </p>

        <div className="role-section">

          <label>Login as</label>

          <div className="role-buttons">

            {['Citizen', 'Collector', 'Recycler', 'Admin'].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    role === item ? 'role-active' : ''
                  }
                  onClick={() => setRole(item)}
                >
                  {item}
                </button>
              )
            )}

          </div>

        </div>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login →
          </button>

        </form>

        <button
          className="login-home"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  )
}

export default Login
