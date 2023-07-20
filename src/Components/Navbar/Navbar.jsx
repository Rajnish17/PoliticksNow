import React from 'react' ;
import { Link } from 'react-router-dom';
import "./Nav.css"

const Navbar = () => {
  return (
    <>
      <nav className='navbar mt-4 ml-[60px]'>

        <Link to={"/"}>
        <div className='nav-left-item flex'>

          <div className=' w-[150px] m-auto'>
            
            <img src="https://speaktosameer.github.io/PoliticksNows/images/logo.png"
          alt=""/></div>
          
        </div>
        </Link>


        
        <div className="right-nav-item">
        <a href="/">Home</a>
       <Link to={"/services"}> <a>Services</a> </Link>
        <a href="#">Contact Us</a>
        <Link to={"/partner"}> <a>Partner With Us</a> </Link>
        <a className='download-button' href="#">Download App</a>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar