import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">

      {/* ================= CTA SECTION ================= */}
      <div className="footer-cta">
        <h2>Ready to discuss a data-driven project?</h2>
        <a href="mailto:manuvvela@gmail.com" className="cta-button">
          Email Me
        </a>
      </div>

      {/* ================= DIRECTORY ================= */}
      <div className="footer-grid">

        {/* Connect */}
        <div className="footer-column">
          <h3>Connect</h3>
          <a href="https://www.linkedin.com/in/manuel-vela-34a854317/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.png" alt="linkedin" className="footer-icon" />
            /in/manuel-vela
          </a>
          <a href="https://github.com/Manuvv01" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.png" alt="github" className="footer-icon" />
            /Manuvv01
          </a>
          
          <a href="mailto:manuvvela@gmail.com">
          <img src="/icons/communication.png" alt="email" className="footer-icon" />
            manuvvela@gmail.com
          </a>

        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#home">Home</a>
          <a href="/CV Manuel Vela.pdf" download>Download PDF Resume</a>
          <a href="#about">About Me</a>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#projects">View Projects</a>
          <a href="https://github.com/Manuvv01" target="_blank" rel="noopener noreferrer">
            Portfolio Source Code
          </a>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">

        <p>© 2026 Manuel Vela. All rights reserved.</p>

        <p>Built with CI/CD on GitHub Pages.</p>

        <p>Designed & Developed with React</p>

      </div>

    </footer>
  )
}

export default Footer