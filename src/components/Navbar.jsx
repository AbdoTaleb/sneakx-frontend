
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';



function Navbar() {
  const { cartItems, toggleCart } = useCart();
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <ul className="navbar__links">
          <li><Link to="/products">Sneakers</Link></li>
          <li><Link to="/hoodies">Hoodies</Link></li>
          {/* <li><a href="#">Hats</a></li> */}
        </ul>

        <Link to="/" className="navbar__logo">SneakX</Link>

        <ul className="navbar__links">
          
          {/* <li><a href="#">Beanies</a></li>
          <li><a href="#">Stickers</a></li> */}
          <li><Link to="/contant">Contant</Link></li>
          <button className="cart-icon" onClick={toggleCart}>
          🛒
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
