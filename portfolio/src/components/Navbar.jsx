import React, { useState } from 'react';
import logome from '../assets/logome.png';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`nav ${isActive ? 'active' : ''}`}>
      <div className="logo">
        <a href="/">
          <img src={logome} style={{ width: '100%', maxWidth: '100px' }} alt="soobedee logo" />
        </a>
      </div>
      <ul className={`nav-links ${isActive ? 'show' : ''}`}>
        <li><a href="/" onClick={() => setIsActive(false)}>Home</a></li>
        <li><a href="/portfolio" onClick={() => setIsActive(false)}>Gallery</a></li>
        <li><a href="/faq" onClick={() => setIsActive(false)}>FAQ</a></li>
        <li><a href="/contact" onClick={() => setIsActive(false)}>Contact</a></li>
        <li><a href="/about" onClick={() => setIsActive(false)}>About</a></li>
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
