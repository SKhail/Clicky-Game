import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
        App
        <Navbar />
        <HomePage />
        <AboutUs />
        <Menu />
        <ContactPage />
      </div>
    </>
  )
}

export default App
