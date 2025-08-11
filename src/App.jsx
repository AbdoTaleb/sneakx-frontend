import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PromoStrip from './components/PromoStrip';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import HeroHoodie from './components/HeroHoodie/HeroHoodie';
import HoodieCollection from './components/HoodieCollection/HoodieCollection';
import HeroHat from './components/HeroHat/HeroHat';
import Newsletter from './components/Newsletter/Newsletter';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'; 
import ContactForm from './pages/ContactForm/ContactForm.jsx';
import HoodieList from './pages/HoodieList/HoodieList.jsx'; 
import HoodieDetails from './pages/HoodieDetails/HoodieDetails.jsx'; 
import CartSidebar from './pages/CartSidebar/CartSidebar';


import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
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
            <Route path="/contant" element={<ContactForm />} />
            <Route path="/hoodies" element={<HoodieList />} />
            <Route path="/hoodie/:id" element={<HoodieDetails />} />
          </Routes>

          <CartSidebar />

          <footer className="footer" style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
            © 2025 Abdo Taleb. All rights reserved.
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
