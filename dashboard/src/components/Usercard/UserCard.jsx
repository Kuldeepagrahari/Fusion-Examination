import React from 'react'
import "./user.css"
import { FaUserCircle } from "react-icons/fa";
const UserCard = () => {
  return (
    <div className='user'>
      <FaUserCircle size="100" />
      <h2 style={{fontSize:"20px", marginTop:"3vh"}}>Kuldeep Agrahari</h2>
      <p style={{padding:"5px 10px", borderRadius:"20px",background:"#f4f2f2",marginTop:"2vh"}}>Student</p>
      <div className="user-info">
        <p>22BCS144 - CSE</p>
        <p>BTECH 2022</p>
        <p>SEM IV</p>
      </div>
    </div>
  )
}

export default UserCard
