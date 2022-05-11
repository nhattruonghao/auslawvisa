import React from 'react'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import ServicesItem from '../components/ServicesItem'
import Slider from '../components/Slider'

function home() {
  return (
    <div className="home">
      <Slider control={true} />
      <ServicesItem />
      <AboutUs />
      <Contact />
     
    </div>
  )
}

export default home