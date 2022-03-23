import React , {useState} from 'react'
import Navbar from '../Utils/Navbar'
import Footer from '../Utils/Footer'
import './css/Contact.css'

const Contact = () => {
  const [user, setUser] = useState ('')
  const [email, setEmail] = useState ('')
  const [message, setMessage] = useState ('')
  return (
    <div className='contact'>
      <Navbar/>
      <div className='contact-header'>
        <h3>Connect with us</h3>
      </div>
      <form className='contact-form'>
        <div className='contact-details'>
        
      <input type= 'text' name ='name' placeholder= 'Name'value={user} onChange={(e)=>{setUser(e.target.value)}}/>
  
     
      <input type= 'email' name='email' placeholder= 'Email'value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        
        </div>
      
        <input type ='text' name ='subject' placeholder='Subject'/>
      

  
      <textarea name='message' placeholder= 'New Message...' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
   
      <button>Send</button>

      </form>
      <Footer/>
      
     </div>
  )
}

export default Contact