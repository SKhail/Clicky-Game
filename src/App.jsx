import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importing Components
import Home from './components/home/Homepage';
import Navigation from './components/navigation/Navbar';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Menu from './components/menu/JavaMenu';
import Blog from './components/blog/Blog';
import OurMenu from './components/ourmenu/OurMenu';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/ourmenu' element={<OurMenu />} />
          <Route path='/JavaMenu' element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
