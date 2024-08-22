import React from 'react'
import "./side.css"
import { Link } from "react-router-dom"
import { IoLogOut } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FaBook, FaGraduationCap, FaUtensils, FaBed, FaHospitalAlt, FaMoneyCheckAlt, FaExclamationCircle, FaBriefcase, FaUniversity, FaRunning, FaHome } from "react-icons/fa";

const iconSize = 17; 

const Sidebar = () => {
    return (
        <div className='side'>
            <div className="side-dash">
                <Link><RxDashboard size={iconSize} /> Dashboard</Link>
            </div>
            <div className="side-mod">
                <div className="modules">
                    <Link><FaBook size={iconSize} /> Academics</Link>
                    <Link><FaGraduationCap size={iconSize} /> Programme and Curriculum</Link>
                    <Link><FaUtensils size={iconSize} /> Mess Management</Link>
                    <Link><FaBed size={iconSize} /> Visitors Hostel</Link>
                    <Link><FaHospitalAlt size={iconSize} /> HealthCare Centre</Link>
                    <Link><FaMoneyCheckAlt size={iconSize} /> Scholarship</Link>
                    <Link><FaExclamationCircle size={iconSize} /> Complaint System</Link>
                    <Link><FaBriefcase size={iconSize} /> Placement Cell</Link>
                    <Link><FaUniversity size={iconSize} /> Department Portal</Link>
                    <Link><FaRunning size={iconSize} /> Gymkhana</Link>
                    <Link><FaHome size={iconSize} /> Hostel Management</Link>
                    <Link><FaGraduationCap size={iconSize} /> Other Academic Procedure</Link>
                </div>
            </div>
            <div className="logout">
                Logout <IoLogOut size={iconSize} />
            </div>
        </div>
    )
}

export default Sidebar
