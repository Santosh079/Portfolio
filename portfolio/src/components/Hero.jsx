import React from 'react';
import two from '../assets/two.png'; 
import Button from './Button';

const Hero = () => {
    return (
        <div className="landing-page">
            <div className="background-image">

            </div>
            <div className="content">
                <h1 style={{ opacity: 0.7 }}>I AM</h1>
                <img src={two} alt="Santosh Subedi" />
                <p style={{ opacity: 0.7 }}>The One Who Is</p>
                <p style={{ opacity: 0.7 }}>Designer | Developer | Creator</p>
                <Button name = "More"/>
            </div>
        </div>
    );
}

export default Hero;
