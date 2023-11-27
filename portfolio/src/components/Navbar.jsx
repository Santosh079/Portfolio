import React from 'react';
import logome from '../assets/logome.png'; 

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <img src={logome} style={{ width: '100%', maxWidth: '100px' }} alt="soobedee logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">Gallery</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
