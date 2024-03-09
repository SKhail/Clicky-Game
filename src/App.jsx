import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

//Importing Components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Homepage'
// import AboutUs from './components/AboutUs'
// import Menu from './components/Menu'
// import ContactPage from './components/ContactPage'

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease',
      delay: 100,
    })
  })

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
