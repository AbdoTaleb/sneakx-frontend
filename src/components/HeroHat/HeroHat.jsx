import React from 'react'
import './HeroHat.scss'
import hatimage from '../../assets/hat-image.jpg';
function HeroHat() {
  return (
      <section className="hero-hat">
        <img src={hatimage} alt="Hat" className="hat-img" />
        <div className="hat-content">
          <h1>SneakX Hats</h1>
          <p className="subtitle">HEAVY-WEIGHT BLEND</p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
      </section>
  );
}

export default HeroHat