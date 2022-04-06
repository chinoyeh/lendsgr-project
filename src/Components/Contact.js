import React , {useState} from 'react'
import Navbar from '../Utils/Navbar'
import Footer from '../Utils/Footer'
import Success from '../Utils/Success'
import Failure from '../Utils/Failure'
import './css/Contact.css'
import { send } from 'emailjs-com';

const Contact = () => {
  const [show, setShow] =useState(false)
  const [loading, setLoading] = useState(false)
  const [fail, setFail] =useState(false)
  const [toSend, setToSend] = useState({
    to_name: '',
  
    subject :'',
    message: '',
    reply_to: '',
  })
//   const showSuccess =(e)=>{
//     e.preventDefault();
//    setShow(!show)

// }
// const showFail =(e)=>{
//   e.preventDefault();
//   setFail(!fail)

// }

// const closeModal =(e)=>{
//   e.preventDefault();
//  setShow(!show)
// } 
// const closeFail =(e)=>{
//   e.preventDefault();
//  setFail(!fail)
// } 
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_pwmdj73',
      'template_an3gjed',
      toSend,
       "o4mGDGLUGnpPGFYpQ",
    )
      .then((response) => {

        alert('Message Sent')
        setToSend({
          to_name: '',
  
          subject :'',
          message: '',
          reply_to: '',

        })
        setLoading(!loading)
        // showSuccess()

      })
      .catch((err) => {
      //  showFail()
      setLoading(!loading)
      alert('Message Failed to Send')
     
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='contact'>
      <Navbar/>
      <div className='contact-header'>
        <h3>Connect with us</h3>
      </div>
      <form className='contact-form' onSubmit={onSubmit}>
        <div className='contact-details'>
        
        <input type='text'   name='to_name' placeholder='Enter your Name' value={toSend.to_name}
    onChange={handleChange} />
  
     
  <input type='email' placeholder='Enter your Email '    name='reply_to' value={toSend.reply_to}
    onChange={handleChange} />
        </div>
      
        <input type ='text' name ='subject' placeholder='Subject' value={toSend.subject}  onChange={handleChange} />
        

               <textarea placeholder='New Message...'   name='message' value={toSend.message}
    onChange={handleChange}/>

  
   
      <button type='submit' onClick={onSubmit}>Send</button>

      </form>
      {/* <Success onClose ={closeModal} show={show}/>
      <Failure onClose={closeFail} fail={fail}/> */}
      <Footer/>
      
     </div>
  )
}

export default Contact