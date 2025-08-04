import React from 'react';
import Navbar from './Navbar';
import './Hero.scss';
import heroBg from '../assets/newbg.png'; 
function Hero() {
  return (
    <section className="hero">
      <img src={heroBg} alt="hero" className="hero-img" /> 
      
      <div className="hero-content">
        <h1>
          50% OFF <br /> EVERYTHING!
        </h1>
        <button className="shop-btn">
          <span>SHOP NOW</span>
          <span className="arrow">→</span>
        </button>

      </div>
      
    </section>
    
  );
}

export default Hero;
