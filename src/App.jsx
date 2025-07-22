import React from 'react';
import PromoStrip from './components/PromoStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import HeroHoodie from './components/HeroHoodie/HeroHoodie';
import HoodieCollection from './components/HoodieCollection/HoodieCollection';
import HeroHat from './components/HeroHat/HeroHat';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <>
      <PromoStrip />
      <Navbar />
      <Hero />
      <Features />
      <HeroHoodie />
      <HoodieCollection/>
      < HeroHat/>
      <Newsletter/>
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
        © 2025 Abdo Taleb. All rights reserved.
      </footer>
      
      
    </>
  );
}

export default App;
