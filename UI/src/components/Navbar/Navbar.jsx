import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <NavLink to="./">Submit Grades</NavLink>
        <NavLink to="./verify-grades">Verify Grades</NavLink>
        <NavLink to="./announcement">Announcement</NavLink>
        <NavLink to="./generate-transcript">Generate Transcript</NavLink>
        <NavLink to="./seating-plan">Seating Arrangement</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
