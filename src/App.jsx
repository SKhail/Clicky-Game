import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importing Components
import Navbar from './components/navigation/Navbar'
import Home from './components/home/Homepage'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
