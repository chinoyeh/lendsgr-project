import React from 'react'
import Navbar from '../Utils/Navbar'
import Footer from '../Utils/Footer'
import  './css/Home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='banner'>
          <div className='layer'>
        
          <div className='welcome-banner'>
              <h1>Welcome to Great Grace City </h1>  

          </div>

          </div>
        
    
        </div>


        <Footer/>
       
    
    </div>
  )
}

export default Home