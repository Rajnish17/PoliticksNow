import React from 'react'
import "./Nav.css"

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
     <div className='left-Nav-item'>
      <img src="" alt="img" /> 
      <span>SpotGarage</span>
     </div>

     <div className="right-Nav-item">
      <ul >
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Partner With Us</a></li>
        <li><a href="#">
          <button className='nav-download-button'> Download App</button>
          </a></li>
           </ul>      
     </div>
    </nav>
    </>
  )
}

export default Navbar