import React from 'react'

const Check = (props) => {
    const propsData = props.data
  return (
    <div>
        {
         propsData.map((ele)=>{
            return( <>
            <div className='w-[200px]'><img src={ele.img} alt="" /> </div>
            <div className='w-[200px]'><img src={ele.img2} alt="" /> </div>
            </> )
            
         })
        
        
        }</div>
  )
}

export default Check