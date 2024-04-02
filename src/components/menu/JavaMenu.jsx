import React, { useState } from 'react';

import '../menu/JavaStyles.css';
import Navigation from '../navigation/Navbar';

// Json files
import coffeeData from './CoffeeList.json';
import breakfastData from './MealList.json';
import dessertData from './DessertList.json';

//Importing Images
import americanoImg from '../../assets/images/menu/americano.jpg';
import cappuccinoImg from '../../assets/images/menu/cappuccino.jpg';
import latteImg from '../../assets/images/menu/latte.jpg';
const CoffeeMenu = ({}) => {
  const [activeMenu, setActiveMenu] = useState('');

  const showMenu = (menuData) => {
    return (
      <div className='container py-3 flex items-center justify-center'>
        <ul className='flex items-center flex-wrap'>
          {menuData.map((data) => (
            <li key={data.id} className='nav-item'>
              <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                <img className='w-full' src={data.image} alt={data.name} />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{data.name}</div>
                  <p className='text-gray-700 text-base'>{data.description}</p>
                </div>
                <div className='px-6 pt-4 pb-2'>
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{data.name.toLowerCase()}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className='menu'>
      <Navigation />
      <div className='flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='font-rakkas uppercase text-3xl text-customWhite tracking-widest'>MENU</h1>
          <p className='leading-8 font-sans text-customWhite py-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure earum iste beatae suscipit necessitatibus ex sed eaque officia natus ducimus!
          </p>
          {/* Coffee Section */}
          <div className='flex justify-center'>
            <button className={`mx-2 px-4 rounded ${activeMenu === 'drinks' ? 'text-customWhite}' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveMenu('drinks')}>
              Drinks
            </button>
            <button className={`mx-2 px-4 rounded ${activeMenu === 'breakfast' ? 'text-customWhite}' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveMenu('breakfast')}>
              Breakfast
            </button>
            <button className={`mx-2 px-4 rounded ${activeMenu === 'desserts' ? 'text-customWhite}' : 'bg-gray-200 text-gray-800'}`} onClick={() => setActiveMenu('desserts')}>
              Dessert
            </button>
          </div>
          {/* Passing each data to the showMenu */}
          {activeMenu === 'drinks' && showMenu(coffeeData)}
          {activeMenu === 'desserts' && showMenu(dessertData)}
          {activeMenu === 'breakfast' && showMenu(breakfastData)}
        </div>
      </div>
    </div>
  );
};

export default CoffeeMenu;
