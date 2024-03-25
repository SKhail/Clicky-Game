import React from 'react';
import '../navigation/Nav.css';
import JavaLogo from '../../assets/images/JavaLogo.png';
import { FaShoppingBag } from 'react-icons/fa';

const Menus = [
  {
    id: 1,
    name: 'Home',
    link: '/#',
  },
  {
    id: 2,
    name: 'About',
    link: '/about',
  },
  {
    id: 3,
    name: 'Shop',
    link: '/shop',
  },
  {
    id: 4,
    name: 'Resources',
    link: '/resources',
  },
  {
    id: 5,
    name: 'Blog',
    link: '/blog',
  },
  {
    id: 6,
    icon: <FaShoppingBag />,
    link: '/shopping',
  },
];

const Navbar = () => {
  return (
    <div>
      <div className='container py-3 flex items-center justify-between nav-bar'>
        <div className='img-logo p-5  '>
          {/* logo section */}
          <img src={JavaLogo} alt='JavaCoffee' className='w-40' />
        </div>

        {/* navlinks */}
        <div className='flex gap-4 nav-bar px-20'>
          <ul className='hidden sm:flex items-center gap-4'>
            {Menus.map((data, index) => (
              <li key={index}>
                <a href={data.link} className='font-sans uppercase py-4 px-4 text-customWhite'>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <button className=' font-sans uppercase bg-customWhite rounded text-sm px-5 py-2.5 me-2 mb-2'>Our Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
