import React, { useEffect, useRef } from 'react';
import './HeroHoodie.scss';
import hoodieImage from '../../assets/hoodie-image.jpg';
import { Link } from 'react-router-dom';

function HeroHoodie() {
  const imgRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-out');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <section className="hero-hoodie">
      <img
        src={hoodieImage}
        alt="Hoodie"
        className="hoodie-img"
        ref={imgRef} 
      />
      <div className="hoodie-content">
        <h1>SneakX Hoodies</h1>
        <p className="subtitle">HEAVY-WEIGHT BLEND</p>
        <Link to="/hoodies">
          <button className="shop-btn">SHOP NOW</button>
        </Link>
        
      </div>
    </section>
  );
}

export default HeroHoodie;
