import React from 'react';
import JavaLogo from '../../assets/images/JavaLogo.png';
import '../herosection/HeroSection.css';
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        {/* logo */}
        <div className='flex justify-center items-center py-2'>
          <img src={JavaLogo} alt='JavaCoffee' className='sm:w-1/4 md:w-1/5 lg:w-1/7 xl:w-1/7 object-cover' />
        </div>
        {/* Largest Text */}
        <h1 className='font-bold font-sans uppercase tracking-tight text-customWhite sm:text-6xl md:text-2xl lg:text-3xl xl:text-5xl'>
          Experience Coffee <br className='hidden sm:block' /> Like Never Before
        </h1>
        {/* Small Text */}
        <p className='leading-8 font-sans text-customWhite'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum iste beatae suscipit necessitatibus ex sed eaque officia natus ducimus!
        </p>
        {/* Button for menu */}
        <button className='font-sans uppercase bg-customWhite rounded text-sm px-5 py-3.5 me-2 mb-2'>Explore Our Menu</button>
      </div>
    </div>
  );
};

export default HeroSection;
