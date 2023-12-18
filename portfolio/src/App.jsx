import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Hero from './components/Hero';
import HireMe from './components/HireMe';
import Social from './components/Social';
import Designwork from './components/Designwork';
import ProjectContainer from './components/ProjectContainer';
import Footer from './components/Footer';
import Helmet from 'react-helmet'


const App = () => {
  return (
    <div>
      <Helmet>
        <title>Santosh Subedi - Frontend Web Developer | React JS Enthusiast</title>
        <meta
          name="description"
          content="Explore the digital journey of Santosh Subedi, an aspiring Frontend Web Developer and React JS enthusiast. Discover a portfolio showcasing proficiency in React JS, JavaScript, Bootstrap, and CSS. Connect for innovative web development and design collaborations."
        />
        <meta
          name="keyword"
          content="Santosh Subedi, Subedi Santosh, Nepal, Frontend web developer portfolio, react js developer front end developer portfolio examples, portfolio website examples, front end web development, frontend vs web developer, frontend developer Nepal, frontend developer jobs in Nepal, frontend example project, best front end web developer portfolio, best frontend portfolio, best portfolio websites for front end developer, front developer portfolio, best portfolio front end dev, web developer portfolio, frontend portfolio website, front end web developer portfolio examples, web developer portfolio examples, front end web developer portfolio template, web frontend portfolio, web developer portfolio ideas, portfolio frontend, junior frontend developer portfolio, front end developer, junior front end developer salary in Nepal, frontend mentor, front end developer portfolio sample, frontend portfolios, front end web developer portfolio projects, front end portfolio, front end developer portfolio reddit, front end web developer requirements, top front end developer portfolio, portfolio for UI developer, front-end developer portfolio 2022.
        "
        />
      </Helmet>
      <Navbar />
      <Hero />
      <ProjectContainer />
      <HireMe />
      <Social />
      <Designwork />
      <Footer />
    </div>
  );
};

export default App;
