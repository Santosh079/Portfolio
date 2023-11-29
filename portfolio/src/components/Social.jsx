import React from 'react';
import Button from './Button';
import Hrline from './Hrline';

const Social = () => {
  const urlLinkedIn = "https://www.linkedin.com/in/santoshsubedi75/";
  const urlInstagram = "https://www.instagram.com/santoshsub_75/";
  const urlGitHub = "https://github.com/Santosh079";

  return (
    <div className="youtube">
      <h2>Social</h2>
<hr style={{margin: "50px"}}/>
      <div className="row-section">
        <div className="column">
          <h3>LinkedIn</h3>
          <p>
            "Dive into web development with me on LinkedIn. Explore coding, technology, and innovation. Let's build the digital future together, one code at a time!"
          </p>
          <Button href={urlLinkedIn} name="visit" />
        </div>

        <div className="column">
          <h3>Instagram</h3>
          <p>
            "Embark on a web development adventure with me! From front-end magic to back-end wizardry, let's unravel secrets and build inspiring digital experiences together. 🚀"
          </p>
          <Button href={urlInstagram} name="visit" />
        </div>

        <div className="column">
          <h3>Github</h3>
          <p>
            "Welcome to my GitHub! I craft elegant web solutions. Explore my repositories for frontend finesse, backend brilliance, and open-source magic. Let's build amazing things together!"
          </p>
          <Button href={urlGitHub} name="visit" />
        </div>
      </div>
    </div>
  );
}

export default Social;
