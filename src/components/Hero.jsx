import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT: TEXT */}
        <div className="hero-text">
          <h1>
            My Career Journey
          </h1>

          <p className="sub-headline">
            Hi, my name is Manuel Vela. I have been working with Python, SQL, and data visualization to uncover insights and build data-driven applications
          </p>

          <a href="#projects" className="hero-btn">
            View My Work
          </a>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hero-image">
          <img src="/images/foto.png" alt="Manuel Vela" />
        </div>

      </div>

    </section>
  )
}

export default Hero