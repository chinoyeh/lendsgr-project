import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {
  return (
      <div className= 'navbar'>
          <div className='logo-name'>
          <Link to ='/'>  <h3>GGC</h3></Link>
          </div>
          <ul className='navlinks'>
         <Link to ='/About'>   <li>About</li> </Link>
         <Link to ='/Give'>  <li>Give</li></Link>
         <Link to ='/Contact'>  <li>Contact</li> </Link>

       </ul>

      </div>
 
  )
}

export default Navbar