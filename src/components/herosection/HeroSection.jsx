import React from 'react';
import JavaLogo from '../../assets/images/JavaLogo.png';
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <img src={JavaLogo} alt='JavaCoffee' className='w-40' />
        <h1 className='font-bold uppercase tracking-tight text-customWhite sm:text-6xl'>Experience Coffee Like Never Before </h1>
      </div>
    </div>
  );
};

export default HeroSection;
