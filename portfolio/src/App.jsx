import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Hero from './components/Hero';
import HireMe from './components/HireMe';
import Social from './components/Social';
import Designwork from './components/Designwork';
import ProjectContainer from './components/ProjectContainer';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
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
