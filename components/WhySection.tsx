import React from 'react';

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-header">
        <span className="why-label">Why Inzovu</span>
        <h2>Curated for the <em>discerning</em> driver</h2>
      </div>
      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon">◆</div>
          <h3>Uncompromising Quality</h3>
          <p>Every vehicle in our collection undergoes rigorous inspection to ensure it meets the highest standards of performance and luxury.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">◈</div>
          <h3>Bespoke Concierge</h3>
          <p>From personalized financing to at-home test drives, our team crafts an experience tailored to your lifestyle and preferences.</p>
        </div>
        <div className="why-card">
          <div className="why-icon">◉</div>
          <h3>Rwandan Heritage</h3>
          <p>Proudly rooted in Kigali, we understand the local roads, climate, and culture — delivering excellence that resonates with home.</p>
        </div>
      </div>
    </section>
  );
}