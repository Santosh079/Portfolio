import React from 'react'
import Button from './Button'

const Designwork = () => {
    return (
        <div className="Portfolio">
            <h2>Design Works</h2>
            <p>Discover my latest projects and explore <br /> my portfolio for a deeper dive into my creative work.</p>
            <p>Let's bring some new inspiration into your world!</p>
            <Button href={"./Gallery"} name="visit" />
        </div>
    )
}

export default Designwork
