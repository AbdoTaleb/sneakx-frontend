// src/components/Navbar.jsx
import './Navbar.scss';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__content">
        <ul className="navbar__links">
          <li><a href="#">Boots</a></li>
          <li><a href="#">Hoodies</a></li>
          <li><a href="#">Hats</a></li>
        </ul>

        <div className="navbar__logo">SneakX</div>

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
