import React from 'react'
import Navbar from '../Utils/Navbar'
import Footer from '../Utils/Footer'
import Sidebar from '../Utils/Sidebar'
import  './css/Home.css'

const Home = () => {
  return (
    <React.Fragment >
        <Navbar/>
       
    
<div className='Home'>

<div className='banner'>
          <div className='layer'>
        
          <div className='welcome-banner'>
              <h1>Welcome to Great Grace City </h1>  

          </div>

          </div>
        
    
        </div>
</div>

        <Footer/>
       
    
    </React.Fragment>
  )
}

export default Home