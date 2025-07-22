import React from 'react'
import './HeroHoodie.scss'
import hoodieImage from '../../assets/hoodie-image.jpg';



function HeroHoodie() {
  return (
    <section className="hero-hoodie">
      <img src={hoodieImage} alt="Hoodie" className="hoodie-img" />
      <div className="hoodie-content">
        <h1>SneakX Hoodies</h1>
        <p className="subtitle">HEAVY-WEIGHT BLEND</p>
        <button className="shop-btn">SHOP NOW</button>
      </div>
    </section>
  );
}


export default HeroHoodie