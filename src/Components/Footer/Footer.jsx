import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='main-footer'>

      <div className="left-footer">
        <div><img src="" alt="img" />SpotGarage</div>
        <span><a href="#">Support@spotgarage.in</a></span>
        <div className='footer-address'>
          <p>B-hub 5th floor Block A,
          Maurya lock complex,Patna 80001
          </p></div>
           

      </div>
      <div className="right-footer">
        <div>
          <ul>
            <li>For Buisness</li>
            <li>Become our partner</li>
            <li>Our team</li>

            </ul>
          </div>



          <div>
          <ul>
            <li>For consumer</li>
            <li>about us</li>
            <li>Download our App</li>

            </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer