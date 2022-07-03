import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/scss/Sidebar.scss"
import Briefcase from "../assets/icons/briefcase.svg"
import Home from '../assets/icons/home.svg'
import UserThree from '../assets/icons/user-3.svg'
import UserOne from '../assets/icons/users-1.svg'
import UserFour from '../assets/icons/user-4.svg'
import User from '../assets/icons/user-5.svg'
import Sack from '../assets/icons/sack.svg'
import Hand from '../assets/icons/hands.svg'
import Piggy from '../assets/icons/piggy.svg'
import Give from '../assets/icons/give.svg'
import UserTwo from '../assets/icons/user-2.svg'
import Bank from '../assets/icons/bank.svg'
import Coin from '../assets/icons/coin.svg'
import Galaxy from '../assets/icons/galaxy.svg'
import Scroll from '../assets/icons/scroll.svg'
import Charts from '../assets/icons/charts.svg'
import Preference from '../assets/icons/preference.svg'
import Badge from '../assets/icons/badge.svg'
import Clip from '../assets/icons/clip.svg'

import Transaction from '../assets/icons/transaction.svg'

const Sidebar = () => {
    const [sideMenu, setSideMenu] = useState(true)
    return (
        <div className={sideMenu ? "sidebar" : "sidebar-show"}>
            <div className="sidebar-icon" onClick={() => setSideMenu(!sideMenu)}>
                <i className={sideMenu ? "fa fa-bars" : "fa fa-close"}></i>
            </div>
            <div className="sidebar-content">
                <Link to="/404-error"> <li><span className="icon"><img src={Briefcase} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Switch Organization</span></li> </Link>
                <Link to="/404-error"> <li><span className="icon"><img src={Home} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Dashboard</span></li></Link>
                <ul className="sidebar-list">
                    <h3>CUSTOMER</h3>
                    <Link to="/dashboard/userdetails"> <li><span className="icon"><img src={User} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Users</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={UserOne} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Guarantors</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Sack} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Loans</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Hand} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Decision Models</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Piggy} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Savings</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Give} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Loan Requests</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={UserThree} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Whitelist</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={UserTwo} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Karma</span></li></Link>
                </ul>
                <ul className="sidebar-list">
                    <h3>BUSINESSES</h3>
                    <Link to="/404-error"> <li><span className="icon"> <img src={Briefcase} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Organization</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Give} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Loan Products</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Bank} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Savings Product</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Coin} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Fees and Charges</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Transaction} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Transactions</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Galaxy} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Services</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={UserFour} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Service Account</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Scroll} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Settlements</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Charts} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Reports</span></li></Link>
                </ul>
                <ul className="sidebar-list">
                    <h3>CUSTOMER</h3>
                    <Link to="/404-error"> <li><span className="icon"><img src={Preference} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Preferences</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Badge} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Fees and Pricing</span></li></Link>
                    <Link to="/404-error"> <li><span className="icon"><img src={Clip} alt="/" /></span> <span className={sideMenu ? "text" : "text-show"}>Audit Logs</span></li></Link>

                </ul>
            </div>




        </div>
    )
}

export default Sidebar