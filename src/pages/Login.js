import React, { useState } from "react"
import "../assets/scss/Auth.scss"
import AuthImage from "../assets/images/login.png"
import Logo from "../assets/icons/logo.svg"
import Loader from "../utils/Loader"
import ErrorPageModal from "../utils/ErrorPageModal"
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showModal, setShowModal] = useState(true)
    const tog_password_visibility = () => {
        setShowPassword(showPassword ? false : true)
    }
    const nagivate = useNavigate()
    // const closeModal = (e) => {
    //     e.preventDefault()

    //     setShowModal(!showModal)
    // }
    const login = (e) => {
        e.preventDefault()
        setLoading(!loading)
        setError('')
        if (password && email !== null) {
            nagivate('/dashboard')
            setLoading(loading)

        }
        else {
            setError('Invalid Credentails')
            setLoading(loading)

        }
    }
    return (
        <React.Fragment>
            <div className="container" >
                <div className="col-1" >
                    <div className="logo">
                        <img src={Logo} alt="/Logo" />
                    </div>
                    <div className="login-image">
                        <img src={AuthImage} alt="/Signup Image" />
                    </div>


                </div>
                <div className="col">
                    <div className="form-group">
                        <h1>Welcome!</h1>
                        <Loader loading={loading} />

                        <p>Enter details to login</p>
                        <p>{error}</p>
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="password" >
                            <input type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span onClick={tog_password_visibility}>show</span>
                        </div>

                        <a onClick={(() => setShowModal(showModal))}>FORGOT PASSWORD?</a>

                        <button onClick={login}>LOG IN</button>

                    </div>

                </div>

                <ErrorPageModal modalState={showModal} />


            </div>

        </React.Fragment>
    )
}

export default Login