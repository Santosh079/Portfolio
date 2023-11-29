import React from 'react'
import Button from './Button';

const HireMe = () => {
    const url = "mailto:soobedee@gmail.com";
    return (
        <div className="hire-me">
            <h2>Hire Me</h2>
            <p>Interested in working with me?</p>
            <p>Let's talk about your project!</p>
            <Button href={url} name="Contact" />
           
        </div>
    )
}

export default HireMe
