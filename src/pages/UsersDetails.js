import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../utils/Navbar"
import Sidebar from '../utils/Sidebar'
import UserIcon from "../assets/icons/user-icon.svg"

const UsersDetails = () => {
    const userdetails = JSON.parse(localStorage.getItem("userdetails"))

    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Navbar />
            <Sidebar />
            <div className='main'>
                <h5 onClick={() => navigate("/dashboard")}>Back to Users</h5>
                <h2>User Details</h2>
                <div className='table-element ' style={{ paddingBottom: 0, marginBottom: '2em' }}>
                    <div className='col-3'>
                        <div className='col-4'>
                            <img src={UserIcon} alt='/profileimage' />
                            <div>
                                <h4>{userdetails.personal.fullname}</h4>
                                <p>pin</p>
                            </div>
                        </div>
                        <div className='col-5'>
                            <h4>Name</h4>
                            <p>pin</p>
                        </div>
                        <div className='col-5'>
                            <h4>Name</h4>
                            <p>pin</p>
                        </div>


                    </div>
                    <div className="col-4" style={{ width: "100%" }} >
                        <a className='active'>General Details</a>
                        <a>Document</a>
                        <a>Bank Details</a>
                        <a>Loans</a>
                        <a>Savings</a>
                        <a>App and Systems</a>


                    </div>

                </div>
                <div className='table-element '>
                    <div className='table-content'>
                        <div className='col'>
                            <h4>Personal Information</h4>
                            <ul className='list'>
                                <li><span>FULL NAME</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.personal.fullname}</span></li>
                                <li><span>PHONE NUMBER</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>EMAIL ADDRESS</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.email}</span></li>
                                <li><span>BVN</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.personal.bvn}</span></li>
                                <li><span>GENDER</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.personal.gender}</span></li>
                                <li><span>MARITAL STATUS</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.personal.marital}</span></li>
                                <li><span>CHILDREN</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.personal.children}</span></li>
                                <li><span>TYPE OF RESIDENCE</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.personal.resident}</span></li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h4>Education and Employment</h4>
                            <ul>
                                <li><span>LEVEL OF EDUCATION</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.education.level}</span></li>
                                <li><span>EMPLOYMENT STATUS</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.education.status}</span></li>
                                <li><span>SECTOR OF EMPLOYMENT</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.education.sector}</span></li>
                                <li><span>DURATION OF EMPLOYMENT</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.education.years}</span></li>
                                <li><span>OFFICE EMAIL</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.education.officeMail}</span></li>
                                <li><span>MONTHLY INCOME</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.education.income}</span></li>
                                <li><span>LOAN REPAYMENT</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.education.loan}</span></li>

                            </ul>
                        </div>
                        <div className='col'>
                            <h4>Socials</h4>
                            <ul>
                                <li><span>TWITTER</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.socials.twitter}</span></li>
                                <li><span>FACEBOOK</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.socials.facebook}</span></li>
                                <li><span>INSTAGRAM</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.socials.instagram}</span></li>

                            </ul>
                        </div>

                        <div className='col'>
                            <h4>Guarantor</h4>
                            <ul>
                                <li><span>FULL NAME</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.guarantor.fullName}</span></li>
                                <li><span>PHONE NUMBER</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.guarantor.phoneNumber}</span></li>
                                <li><span>EMAIL </span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.guarantor.email}</span></li>
                                <li><span>RELATIONSHIP</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.guarantor.relationship}</span></li>

                            </ul>
                        </div>

                        <div className='col'>
                            <h4>Personal Information</h4>
                            <ul>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                                <li><span>Full Name</span> <span style={{ fontFamily: 'avenir-slim' }}>{userdetails.phonenumber}</span></li>
                            </ul>
                        </div>





                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default UsersDetails