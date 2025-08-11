import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

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
        <Link to="/products">
        <button className="shop-btn">
          <span>SHOP NOW</span>
          <span className="arrow">→</span>
        </button>
        </Link>

      </div>
      
    </section>
    
  );
}

export default Hero;
