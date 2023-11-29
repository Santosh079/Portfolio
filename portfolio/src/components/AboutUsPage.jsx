import React from 'react';
import Layout from './layout/Layout';

const AboutUsPage = () => {
  return (
    <Layout>
      <section className="about">
        <div className="profile">
          <img src="src/assets/e.jpg" alt="Profile Picture of Santosh Subedi" />
        </div>
        <div className="bio">
          <h2>Santosh Subedi</h2>
          <p> Web Developer | Graphic Designer | Creator</p>
          <p>A Individual Who Thinks He Is Everything.</p>
          <p>
            Hi, I'm Santosh, a Front-End Web Developer, Graphic Designer, and Creator. I
            create visual experiences that communicate messages effectively and
            craft websites that are both functional and beautiful. I approach
            every project with creativity, dedication, and a desire to exceed
            expectations.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
