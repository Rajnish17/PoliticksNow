import React from 'react'
import "./card.css"

const Card = (props) => {
  let imageData =props.data;
  return (
    <div className='main'>
     {
      imageData.map((ele)=>{

        return (
           <div className="container">
        <img src={ele.img} alt="" />
        
      </div>)
      })
     }

    </div>
  )
}

export default Card