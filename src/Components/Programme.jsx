import React from 'react'
import Navbar from '../Utils/Navbar'
import Footer from '../Utils/Footer'
import './css/Programme.css'

const Programme = () => {
  return (
    <div>
              <Navbar/>
              <div className ='programme-header'>
                <h1>Programme</h1>
              </div>
              <div className='programme-content'>
               <table className='program-table'>
                 <tr>
                   <th>Sunday Service</th>
                   <td>Every Sunday</td>
                   <td>6am</td>
                 
                 </tr>
                 <tr>
                   <th>Morning Dew</th>
                   <td>Every Monday</td>
                   <td>6am</td>
                 
                 </tr>
                 <tr>
                   <th>School of Deliverance</th>
                   <td>Every Thursady</td>
                   <td>9am</td>
                 
                 </tr>
                 <tr>
                   <th>Vigil</th>
                   <td>Every Last Friday</td>
                   <td>9pm</td>
                 
                 </tr>

               </table>

              </div>

 


        <Footer/>
    </div>
  )
}

export default Programme