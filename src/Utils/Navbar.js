import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {
  const [style , setStyle] = useState('hide-sidebar')
  const styleChange= (e)=>{
    setStyle ('sidebar')
    console.log('clicked')
}
  return (
    <React.Fragment>
      <div className= 'navbar'>
          <div className='logo-name'>
          <button onClick ={styleChange}><i className='fa fa-bars'></i></button>
          
          <Link to ='/'>  <h3>GGC</h3></Link>
          </div>
          <ul className='navlinks'>
         <Link to ='/About'>   <li>About</li> </Link>
         <Link to ='/Give'>  <li>Give</li></Link>
         <Link to ='/Contact'>  <li>Contact</li> </Link>
         <Link to ='/Programme'>  <li>Programme</li> </Link>
       </ul>
   

      </div>
      <div className ={style}>
        <button className='side-button'onClick={()=>setStyle('hide-sidebar')}>
          x
        </button>
          <div className ='profile'>
              <div className='logo'>
                  GGC
              </div>
              <div className='profile-name'>
                  <h3>Great Grace City</h3>
              </div>
          </div>
          <ul className='sidelinks'>
          <Link to ='/'>   <li> <span><i className="fa fa-home"></i></span>Home</li> </Link>
          <Link to ='/About'>   <li> <span><i className="fa fa-info-circle"></i></span>About</li> </Link>
         <Link to ='/Give'>  <li> <span><i className="fa fa-money"></i></span>Give</li></Link>
         <Link to ='/Contact'>  <li> <span><i className="fa fa-address-book-o"></i></span>Contact</li> </Link>
         <Link to ='/Programme'>  <li> <span><i className="fa fa-list"></i></span>Programme</li> </Link>
          </ul>
      </div>
      </React.Fragment>
 
  )
}

export default Navbar