import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Left: Logo / Name */}
        <div className="logo">
          <h2>Manuel Vela</h2>
        </div>

        {/* Center: Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Right: CTA Button */}
        <div className="cta">
          <a href={`${import.meta.env.BASE_URL}CV_Manuel_Vela.pdf`} download className="cta-button">
            Download CV
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header