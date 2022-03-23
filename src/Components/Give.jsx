import React from 'react'
import Navbar from '../Utils/Navbar'
import Footer from '../Utils/Footer'
import './css/Give.css'

const Give = () => {
  return (
    <div className='give'>
     <Navbar/>
     <div className='give-header'>
        <h1>Give Today</h1>
     </div>
   
     <div className='give-content'>
     <div className='give-image'>
       <img src='https://media.istockphoto.com/photos/alphabet-letter-wooden-blocks-with-words-give-in-child-and-parents-picture-id1199796265?b=1&k=20&m=1199796265&s=170667a&w=0&h=Qmbcy6dxn4viEAie5O1WkEH5gG3QJWfh0uNQ7JSlkpU=' alt='/'/>
     </div>
       <h3>How to Give</h3>
       <h6>Kindly use any of our plat forms</h6>
       <ul className='give-list'>
         <li>USSD CODE :</li>
         <li>Bank Account:</li>
         <li>Flutterwave</li>
         
          </ul>
     </div>
     <Footer/>
      </div>
  )
}

export default Give