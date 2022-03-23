import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './css/Sidebar.css'




const Sidebar = () => {
  return (
      <div className ='sidebar'>
          <div className ='profile'>
              <div className='logo'>
                  GGC
              </div>
              <div className='profile-name'>
                  <h3>Great Grace City</h3>
              </div>
          </div>
          <ul className='sidelinks'>
          <Link to ='/'>   <li> <span><i class="fa fa-home"></i></span>Home</li> </Link>
          <Link to ='/About'>   <li> <span><i class="fa fa-info-circle"></i></span>About</li> </Link>
         <Link to ='/Give'>  <li> <span><i class="fa fa-money"></i></span>Give</li></Link>
         <Link to ='/Contact'>  <li> <span><i class="fa fa-address-book-o"></i></span>Contact</li> </Link>

          </ul>
      </div>
  )
}

export default Sidebar