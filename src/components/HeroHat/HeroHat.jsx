import React, { useEffect, useRef } from 'react';
import './HeroHat.scss';
import hatimage from '../../assets/hat-image.jpg';

function HeroHat() {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-out');
            observer.unobserve(entry.target); // التفعيل مرة وحدة فقط
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
    <section className="hero-hat">
      <img src={hatimage} alt="Hat" className="hat-img" ref={imgRef} />
      <div className="hat-content">
        <h1>SneakX Hats</h1>
        <p className="subtitle">HEAVY-WEIGHT BLEND</p>
        <button className="shop-btn">SHOP NOW</button>
      </div>
    </section>
  );
}

export default HeroHat;
