import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Hero from './components/Hero';
import HireMe from './components/HireMe';
import Social from './components/Social';
import Designwork from './components/Designwork';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HireMe />
      <Social />
      <Designwork />
    </div>
  );
};

export default App;
