import React from 'react'
import ErrorImage from "../assets/icons/error.svg"
import { useNavigate } from 'react-router-dom'


const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className="col-1" >

                <div className="login-image">     <img src={ErrorImage} alt="/" />
                </div>


            </div>
            <div className='col'>
                <div className='form-group'>
                    <h2>Sorry this page is not available at the moment</h2>
                    <button onClick={() => navigate('/dashboard')} style={{ maxWidth: '30%' }}>Go Back Home</button>
                </div>

            </div>

        </div>
    )
}

export default Error