import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Spaces from '../components/Spaces';
import Services from '../components/Services';
import Contact  from '../components/Contact';


const Home = () => {
  return (
    <div>
     
      <Hero />
      <About />
      <Spaces />
      <Services />
      <Contact />
      
    </div>
  );
}

export default Home