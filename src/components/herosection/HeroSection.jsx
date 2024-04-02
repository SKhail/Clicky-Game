import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import JavaLogo from '../../assets/images/JavaLogo.png';

import '../herosection/HeroSection.css';
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center pt-20'>
        {/* logo */}
        <div className='flex justify-center items-center'>
          <img src={JavaLogo} alt='JavaCoffee' className='sm:w-1/4 md:w-1/5 lg:w-1/7 xl:w-1/7 object-cover' />
        </div>
        <div className='py-3'></div>
        {/* Largest Text */}
        <h1 className='font-bold font-sans uppercase tracking-tight text-customWhite sm:text-6xl md:text-2xl lg:text-3xl xl:text-5xl'>
          Experience Coffee <br className='hidden sm:block' /> Like Never Before
        </h1>
        {/* Small Text */}
        <div className='py-3'></div>
        <p className='font-sans text-sm text-customWhite text-center'> Whether you're a connoisseur seeking the perfect</p>
        <p className='font-sans text-sm text-customWhite text-center'>espresso or a casual coffee lover</p>
        <p className='font-sans text-sm text-customWhite text-center'>in search of a comforting cup</p>
        <p className='font-sans text-sm text-customWhite text-center'>Java Coffee has something for everyone</p>

        {/* Button for menu */}
        <div className='py-3'></div>
        <Link to='/JavaMenu' className='font-sans uppercase py-4 px-4 pr-3 text-black'>
          <button className='font-rakkas font-bold uppercase bg-customWhite rounded text-sm px-5 py-3.5 me-2 mb-2'>Explore Our Page</button>
        </Link>
      </div>
      {/* <Link to='/JavaMenu' className='font-sans uppercase py-4 px-4 pr-3 text-black'>
        <button className='font-rakkas uppercase bg-customWhite rounded text-sm px-5 py-2.5 me-2 mb-2'>Our Menu</button>
      </Link> */}
    </div>
  );
};

export default HeroSection;
