import React from 'react'
import ServicesItem from '../components/ServicesItem'
import Slider from '../components/Slider'

function home() {
  return (
    <div className="home">
      <Slider control={true} />
      <ServicesItem />
     
    </div>
  )
}

export default home