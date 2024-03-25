import React from 'react';
import '../home/Home.css';

import '../herosection/HeroSection';
import HeroSection from '../herosection/HeroSection';

export const Homepage = () => {
  return (
    <div className='overlay'>
      <HeroSection />
    </div>
  );
};

export default Homepage;
