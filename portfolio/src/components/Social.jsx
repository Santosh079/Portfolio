import React from 'react';
import Button from './Button'; 
import Hrline from './Hrline';

const Social = () => {
    return (
        <div className="youtube">
            <h2>Social</h2>
            <Hrline />
            <div className="row-section">
                <div className="column">
                    <h3>LinkedIn</h3>
                    <p>
                        "Dive into web development with me on LinkedIn. Explore coding, technology, and innovation. Let's build the digital future together, one code at a time!"
                    </p>
                    <Button name="Visit" />
                </div>

                <div className="column">
                    <h3>Instagram</h3>
                    <p>
                    "Embark on a web development adventure with me! From front-end magic to back-end wizardry, let's unravel secrets and build inspiring digital experiences together. 🚀"
                    </p>
                    <Button name="Visit"/>
                </div>

                <div className="column">
                    <h3>Github</h3>
                    <p>
                       
"Welcome to my GitHub! I craft elegant web solutions. Explore my repositories for frontend finesse, backend brilliance, and open-source magic. Let's build amazing things together!"
                    </p>
                    <Button name="Visit"/>
                </div>
            </div>
        </div>
    );
}

export default Social;
