import React, { useState } from 'react'
import { FaCartShopping, FaFacebook, FaInstagram, FaTwitter, FaBars, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'; // Add this import


const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); // Access cart from context

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Hamburger */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link to="/ourcatalogue" onClick={() => setMenuOpen(false)}>OUR CATALOGUE</Link>
        </nav>

        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/bebe-logo.png" width="80" height="80" alt="Logo" />
          </Link>
        </div>

        {/* Cart + Socials */}
        <div className="cart-icons">
          <div className="cart">
            <FaCartShopping />
            <p>({cart.length})</p> {/* Live cart count */}
          </div>
          <div className="socials">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
