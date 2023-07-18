import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex bg-blue-700 w-100 h-80 text-white justify-around mt-5'>

      <div className=" mt-10">

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02_Pnd9ed5Xbk3t-Mn_Zf16QS-pNEPQoXXFrg3mrG&s" className='w-3 h-3' alt="img"/>SpotGarage
          </div>
        <p><Link to={"#"}>Support@spotgarage.in</Link></p>

        <div className='footer-address'>
          <p>B-hub 5th floor Block A,</p>
            <p> Maurya lock complex,Patna</p>
            <p>80001</p>
         
          </div>
          
      </div>


      <div className="flex gap-40 mt-10">
        <div>
            <p>For Buisness</p>
            <p>Become our partner</p>
            <p>Our team</p>
          </div>



          <div>         
            <p>For consumer</p>
            <p>about us</p>
            <p>Download our App</p>
          </div>

      </div>
    </div>
  )
}

export default Footer