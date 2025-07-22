import React from 'react';
import './Features.scss';

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <img src="/FeatureImage1.jpg" alt="Feature 1" />
        <h3>Dual-Zippers</h3>
        <p>Easy on and off...</p>
        <button>Shop Now</button>
      </div>
      <div className="feature-card">
        <img src="/FeatureImage2.jpg" alt="Feature 2" />
        <h3>All-Terrain Tread</h3>
        <p>Grip on all terrains...</p>
        <button>Shop Now</button>
      </div>
      <div className="feature-card">
        <img src="/FeatureImage3.jpg" alt="Feature 3" />
        <h3>Full Grain Leather</h3>
        <p>Looks better with time...</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default Features;
