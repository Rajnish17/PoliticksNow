import React from 'react'
import "./card.css"

const Card = (props) => {
  let imageData =props.data;
  return (
    <div className='flex justify-evenly'>
     {
      imageData.map((ele)=>{

        return (
           <div className=" card-container mt-5">
        <img src={ele.img} alt="" />
        
      </div>)
      })
     }
    

    {/* <div className="card">
      <img src={image4} alt="" />
    </div>

    <div className="card">
      <img src={image5} alt="" />
    </div>
    
    <div className="card">
      <img src={image6} alt="" />
    </div> */}
   


    </div>
  )
}

export default Card