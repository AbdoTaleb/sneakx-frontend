
import './Navbar.scss';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <ul className="navbar__links">
          <li><Link to="/products">Sneakers</Link></li>
          <li><a href="#">Hoodies</a></li>
          <li><a href="#">Hats</a></li>
        </ul>

        <Link to="/" className="navbar__logo">SneakX</Link>

        <ul className="navbar__links">
          <li><a href="#">Beanies</a></li>
          <li><a href="#">Stickers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
