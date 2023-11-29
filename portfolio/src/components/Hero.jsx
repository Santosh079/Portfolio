// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import two from '../assets/two.png';
import Button from './Button';

const Hero = () => {
  const url = "/about"; // Assuming "/about" is the route to your About Us page

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <h1 style={{ opacity: 0.7 }}>I AM</h1>
        <img src={two} alt="Santosh Subedi" />
        <p style={{ opacity: 0.7 }}>The One Who Is</p>
        <p style={{ opacity: 0.7 }}>Designer | Developer | Creator</p>
        <Button href={url} name="More" />
      </div>
    </div>
  );
}

export default Hero;
