import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../navigation/Nav.css';
import JavaLogo from '../../assets/images/JavaLogo.png';
import { FaShoppingBag } from 'react-icons/fa';
import '../menu/CoffeeMenu';

const NavData = [
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
];

const Navbar = () => {
  return (
    <div>
      <div className='container py-3 flex items-center justify-between'>
        <Link to='/menu' className='logo-link'>
          <img src={JavaLogo} alt='JavaCoffee' className='w-40' />
        </Link>
        <div className='flex gap-4 nav-bar px-20'>
          <ul className='hidden sm:flex items-center gap-4'>
            {NavData.map((data, index) => (
              <li key={index}>
                <NavLink to={data.link} className='font-sans uppercase py-4 px-4 text-customWhite'>
                  {data.name}
                </NavLink>
                {data.icon && <img src={data.icon} alt='Icon' className='bg-white' />}
              </li>
            ))}
            {/* shopping cart icon */}
            <li>
              <NavLink to='/cart' className='font-sans uppercase py-4 px-4 text-customWhite'>
                <FaShoppingBag />
              </NavLink>
            </li>
          </ul>
          <Link to='/CoffeeMenu' className='font-sans uppercase py-4 px-4 pr-3 text-black'>
            <button className='font-rakkas uppercase bg-customWhite rounded text-sm px-5 py-2.5 me-2 mb-2'>Our Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
