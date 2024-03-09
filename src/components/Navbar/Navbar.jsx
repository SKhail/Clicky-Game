import React from 'react'
import JavaLogo from '../../assets/images/JavaLogo.png'

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
]

const Navbar = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-secondary to-secondary/90'>
        <div className='container py-2'>
          <div className='flex'>
            {/* logo section */}
            <div className=''>
              <a href='#'>
                <img src={JavaLogo} alt='JavaCoffee' className='w-40' />
              </a>
            </div>

            {/* navlinks */}
            <div>
              <ul className='hidden sm:flex items-center gap-4'>
                {Menus.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className=''>
                      {data.name}
                    </a>
                  </li>
                ))}
                <li></li>
                <btton>Order Now</btton>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
