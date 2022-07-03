import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/icons/logo.svg"
import Bell from '../assets/icons/bell.svg'
import UserImage from '../assets/images/userimage.png'
import Search from "../assets/icons/search.svg"
import Arrow from "../assets/icons/arrow-drop-down.svg"


import "../assets/scss/Navbar.scss"

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false)
    const [logoutModal, setLogoutmodal] = useState(false)
    const nagivate = useNavigate()
    const tog_navMenu = () => {
        setNavMenu(!navMenu)
    }
    const tog_logoutModal = () => [
        setLogoutmodal(!logoutModal)
    ]

    const logout = () => {


        nagivate("/")
    }
    return (
        <div className="navbar">
            <div className='nav-logo' >
                <img src={Logo} alt="/logo" />
            </div>
            <div className="search">
                <input />
                <button><img src={Search} alt='/' /></button>

            </div>


            <ul className="nav-list">
                <li> <a href='/404-error'>Docs</a></li>
                <li>  <img src={Bell} alt='/notification' /></li>
                <li>      <div><img src={UserImage} alt='/' /></div></li>
                <li>
                    <p>Chinoyeh</p></li>
                <li>    <button onClick={tog_logoutModal}><img src={Arrow} alt='/' /></button>
                    <ul className={logoutModal ? "show-logout-modal" : "hide-menu"}>


                        <li>
                            <p onClick={logout}>Logout</p></li>

                    </ul></li>






            </ul>
            <div className="nav-mobile">
                <button onClick={tog_navMenu}><img src={Arrow} alt='/' /></button>
                <ul className={navMenu ? "show-menu" : "hide-menu"}>
                    <li> <a href='/'>Docs</a></li>
                    <li>  <img src={Bell} alt='/notification' /></li>

                    <li>
                        <a>Chinoyeh</a></li>
                    <li>
                        <a onClick={logout}>Logout</a></li>

                </ul>
            </div>
        </div >
    )
}

export default Navbar