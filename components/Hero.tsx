import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="gold-line" />

      <nav>
        <div className="logo-wrap">
          <span className="logo-badge">Est. Kigali</span>
          <span className="logo">Inzovu</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Inventory</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className="nav-cta">Book a Test Drive</a>
      </nav>

      <div className="hero-body">
        <div className="hero-text">
          <span className="drive-label">Drive the Extraordinary</span>
          <h1>Prestige<br /><strong>Redefined.</strong><br />Built for Kigali.</h1>
          <p className="description">
            Discover elite performance, unmatched comfort, and timeless design. Rwanda's most exclusive automotive experience awaits.
          </p>
          <div className="cta-row">
            <a href="#" className="btn-explore">Explore Inventory</a>
            <a href="#" className="btn-video">
              <span className="play-btn">▶</span>
              Watch Film
            </a>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="s-item">
          <div className="s-icon">◆</div>
          <div>
            <div className="s-val">40+</div>
            <div className="s-lbl">Premium Brands</div>
          </div>
        </div>
        <div className="s-item">
          <div className="s-icon">◈</div>
          <div>
            <div className="s-val">80+</div>
            <div className="s-lbl">Luxury Models</div>
          </div>
        </div>
        <div className="s-item">
          <div className="s-icon">◉</div>
          <div>
            <div className="s-val">5K+</div>
            <div className="s-lbl">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}