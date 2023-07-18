import React from 'react' ;
import { Link } from 'react-router-dom';
import "./Nav.css"

const Navbar = () => {
  return (
    <>
      <nav className='navbar mt-4'>
        
        <div className='left-Nav-item'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02_Pnd9ed5Xbk3t-Mn_Zf16QS-pNEPQoXXFrg3mrG&s" alt="img" />
          <span> <b>SpotGarage</b></span>
        </div>

        <div className="right-Nav-item">
          <Link to={"/contact"} underline="none">
            {"Contact us"}
          </Link>

          <Link to={"/partner"} underline="none">
            {"Partner With Us"}
          </Link>

          <Link to={"/app"} underline="none">
            {"Download App"}
          </Link>

          
        </div>
      </nav>
    </>
  )
}

export default Navbar