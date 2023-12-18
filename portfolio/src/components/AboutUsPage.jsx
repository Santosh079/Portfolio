import React from 'react';
import Layout from './layout/Layout';
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {
  return (
    <>
    <Helmet>
      <title>Santosh Subedi - Web Developer | Graphic Designer | Creator</title>
      <meta
          name="description"
          content="Meet Santosh Subedi, a versatile individual embracing the roles of Front-End Web Developer, Graphic Designer, and Creator. With a belief that creativity knows no bounds, I strive to craft visually stunning websites and graphic designs that effectively convey messages. Explore my journey of blending technology and artistry with dedication and a commitment to exceeding expectations."
        />
         <meta
          name="keyword"
          content="Santosh Subedi, React Js, React developer, frontend developer, Web Developer, Graphic Designer, Creator, Front-End Web Developer, Visual Experiences, Functional Websites, Beautiful Designs, Creative Approach, Dedication, Exceeding Expectations, Technology and Artistry, Versatile Individual."
        />
    </Helmet>
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
    </>
  );
};

export default AboutUsPage;
