import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ هذا المهم
import PromoStrip from './components/PromoStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import HeroHoodie from './components/HeroHoodie/HeroHoodie';
import HoodieCollection from './components/HoodieCollection/HoodieCollection';
import HeroHat from './components/HeroHat/HeroHat';
import Newsletter from './components/Newsletter/Newsletter';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'; // ✅ تأكد من المسار الصحيح

function App() {
  return (
    <Router>
      <div className="app-container">
      <PromoStrip />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <HeroHoodie />
              <HoodieCollection />
              <HeroHat />
              <Newsletter />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <footer className='footer' style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
        © 2025 Abdo Taleb. All rights reserved.
      </footer>
      </div>
    </Router>
  );
}

export default App;
