import React from 'react'

import './css/Success.css'



const Failure= (props) => {
    if (!props.show){
        return null
      }
    
    
  return (
    <div className='success' >
   < div>
   <i className="fa fa-warning" style={{color: 'red'}}></i>
 
 
</div>
</div>
  )
}

export default Failure
