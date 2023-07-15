import React from 'react'
import "./banner.css"
import image1 from "../assets/Frame 52425.png"
import image2 from "../assets/Frame 52426.png"

const Banner = () => {
  return (
    <div className='Banner-header'>
      <div className="left-banner">
     <img src={image1} alt="" />
      </div>
      <div className="right-banner">
      <img src={image2} alt="" />
      </div>

    </div>
  )
}

export default Banner