import React, { useState } from 'react';
import logome from '../assets/logome.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`nav ${isActive ? 'active' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={logome} style={{ width: '100%', maxWidth: '100px' }} alt="soobedee logo" />
        </Link>
      </div>
      <ul className={`nav-links ${isActive ? 'show' : ''}`}>
        <li><Link to="/" onClick={() => setIsActive(false)}>Home</Link></li>
        <li><Link to="/gallery" onClick={() => setIsActive(false)}>Gallery</Link></li>
        <li><Link to="/faq" onClick={() => setIsActive(false)}>FAQ</Link></li>
        <li><Link to="/contact" onClick={() => setIsActive(false)}>Contact</Link></li>
        <li><Link to="/about" onClick={() => setIsActive(false)}>About</Link></li>
      </ul>
      <div className={`burger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
