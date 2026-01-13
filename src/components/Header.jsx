import { useTypewriter } from '../hooks/useTypewriter'
import '../styles/Header.css'

function Header() {
  const roles = [
    'Web Designer 🎨',
    'Web Developer 💻',
    'Mobile Developer 📱',
    'Graphics Designer 🖌️',
    'IT Consultant 🧠'
  ]
  
  const displayText = useTypewriter(roles, 80, 2000)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h1>Ayuba Ibrahim Olanrewaju</h1>
            <p className="tagline">
              <span className="typewriter">{displayText}</span>
              <span className="cursor"></span>
            </p>
          </div>
          <div className="header-image">
            <img src="/src/assets/profile.jpg" alt="Ayuba Ibrahim Olanrewaju" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
