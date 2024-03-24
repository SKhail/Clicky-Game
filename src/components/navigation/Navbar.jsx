import React from 'react';
import JavaLogo from '../../assets/images/JavaLogo.png';
import { FaCoffee } from 'react-icons/fa';

const Menus = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'Services',
    link: '/#services',
  },
  {
    id: 3,
    name: 'About',
    link: '/aboutus',
  },
  {
    id: 4,
    name: 'Contact',
    link: '/contact',
  },
];

const Navbar = () => {
  return (
    <div>
      <div className='container py-2 flex items-center justify-between'>
        <div className='flex'>
          {/* logo section */}

          <a href='#'>
            <img src={JavaLogo} alt='JavaCoffee' className='w-40' />
          </a>
        </div>

        {/* navlinks */}
        <div className='flex gap-4 '>
          <ul className='hidden sm:flex items-center gap-4 text-CustomColor'>
            {Menus.map((data, index) => (
              <li key={index}>
                <a href={data.link} className='inline-block text-xl py-y px-4 hover: text-CustomColor duration-200'>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <button className='px-4 py-2 rounded-full hover:scale-105 duration-200 text-CustomColor flex item-center gap-3'>
            Order
            <FaCoffee className='text-xl cursor-pointer' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
