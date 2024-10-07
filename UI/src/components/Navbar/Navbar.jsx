import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <IoChevronBackCircleOutline/>
        <NavLink to="./">Submit Grades</NavLink>
        <NavLink to="./verify-grades">Verify Grades</NavLink>
        <NavLink to="./announcement">Announcement</NavLink>
        <NavLink to="./generate-transcript">Generate Transcript</NavLink>
        <NavLink to="./seating-plan">Seating Arrangement</NavLink>
        <IoChevronForwardCircleOutline/>
      </ul>
    </div>
  )
}

export default Navbar
