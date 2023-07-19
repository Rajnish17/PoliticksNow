import React from 'react'
import "./card.css"
import image3 from "../assets/Frame 52429.png"
import image4 from "../assets/Frame 52430.png"
import image5 from "../assets/Frame 52431.png"
import image6 from "../assets/Frame 52432.png"

const Card = () => {
  return (
    <div className='flex justify-evenly mt-5 card-container'>

    <div className="card">
      <img src={image3} alt="" />
    </div>

    <div className="card">
      <img src={image4} alt="" />
    </div>

    <div className="card">
      <img src={image5} alt="" />
    </div>
    
    <div className="card">
      <img src={image6} alt="" />
    </div>
   


    </div>
  )
}

export default Card