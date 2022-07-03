import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../utils/Navbar"
import Sidebar from '../utils/Sidebar'
import Users from "../assets/icons/total-users.svg"
import Active from "../assets/icons/active-users.svg"
import Loan from "../assets/icons/loan-users.svg"
import Savings from "../assets/icons/savings-users.svg"
import Filter from "../assets/icons/filter.svg"
import Actions from "../assets/icons/actions.svg"
import Eye from "../assets/icons/eye.svg"
import Blacklist from "../assets/icons/blacklist.svg"
import Activate from "../assets/icons/activate.svg"
import data from "../data/data.json"

const Dashboard = () => {

    const [details, setDetails] = useState({})
    const navigate = useNavigate()
    const userDetails = (datas) => {
        localStorage.setItem("userdetails", JSON.stringify(datas))
        navigate("/userdetails")
        console.log('check')
    }
    const tog_details = (index) => {
        setDetails(state => ({
            ...state,
            [index]: !state[index]
        }))

    }

    return (
        <React.Fragment>
            <Navbar />
            <Sidebar />
            <div className='main'>
                <h2>Users</h2>
                <div className='col-box'>
                    <div className='box'>
                        <img src={Users} alt='/icon' />
                        <h4>USERS</h4>
                        <h3>2,650</h3>
                    </div>
                    <div className='box'>
                        <img src={Active} alt='/icon' />
                        <h4>ACTIVE USERS</h4>
                        <h3>2,000</h3>
                    </div>
                    <div className='box'>
                        <img src={Loan} alt='/icon' />
                        <h4>USERS WITH LOANS</h4>
                        <h3>1,500</h3>
                    </div>
                    <div className='box'>
                        <img src={Savings} alt='/icon' />
                        <h4>USERS WITH SAVINGS</h4>
                        <h3>2,500</h3>
                    </div>
                </div>

                <div className='table-element'>
                    <table className='table-content'>
                        <thead>
                            <tr>
                                <th>ORGANIZATION <span><img src={Filter} alt="/icon" /></span></th>
                                <th>USERNAME <span><img src={Filter} alt="/icon" /></span></th>
                                <th>EMAIL <span><img src={Filter} alt="/icon" /></span></th>
                                <th>PHONE NUMBER <span><img src={Filter} alt="/icon" /></span></th>
                                <th>DATE JOINED <span><img src={Filter} alt="/icon" /></span></th>
                                <th>STATUS <span><img src={Filter} alt="/icon" /></span></th>
                                <th style={{ width: '15em' }}> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((datas, index) => {
                                return <tr key={datas.id}>
                                    <td>{datas.organization}</td>
                                    <td>{datas.username}</td>


                                    <td>{datas.email}</td>
                                    <td>{datas.phonenumber}</td>



                                    <td>{datas.date}</td>
                                    {
                                        datas.status === "Active" &&
                                        <td ><div style={{ background: "rgba(57,205,98,0.06)", color: '#39CD62', fontFamily: 'avenir', textAlign: 'center', borderRadius: '20px', height: 'fit-content', padding: '0.7em 2em', width: 'fit-content' }}>
                                            {datas.status}   </div></td>
                                    }
                                    {
                                        datas.status === "Inactive" &&
                                        <td ><div style={{ background: "rgba(84,95,125,0.06)", color: '#545f7d', fontFamily: 'avenir', textAlign: 'center', borderRadius: '20px', height: 'fit-content', padding: '0.7em 2em', width: 'fit-content' }}>{datas.status}</div></td>
                                    }
                                    {
                                        datas.status === "Blacklisted" &&
                                        <td ><div style={{ background: "rgba(228,3,59,0.1)", color: '#E4033B', fontFamily: 'avenir', textAlign: 'center', borderRadius: '20px', height: 'fit-content', padding: '0.7em 2em', width: 'fit-content' }}>{datas.status}</div></td>
                                    }
                                    {
                                        datas.status === "Pending" &&
                                        <td><div style={{ background: "rgba(233,178,0,0.1)", color: '#E9B200', fontFamily: 'avenir', textAlign: 'center', borderRadius: '20px', height: 'fit-content', padding: '0.7em 2em', width: 'fit-content' }}>{datas.status}</div></td>
                                    }

                                    <td onClick={() => tog_details(index)}><img src={Actions} alt='/' />
                                        <div className={details[index] ? 'details-menu' : 'hide-menu'}>
                                            <a href="/#" onClick={() => userDetails(datas)}><span><img src={Eye} alt="/icon" /></span>View Details</a>
                                            <a href="/#"><span><img src={Blacklist} alt="/icon" /></span>Blacklist User</a>
                                            <a href="/#"><span><img src={Activate} alt="/icon" /></span>Activate User</a>

                                        </div>

                                    </td>








                                </tr>
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard