import React from 'react'

import './css/Success.css'



const Success = (props) => {
    if (!props.show){
        return null
      }
    
    
  return (
    <div className='success' >
   < div>
   <i className="fa fa-check-circle" style={{color: 'red'}}></i>
 
 
</div>
</div>
  )
}

export default Success

