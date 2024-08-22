import React, { useState } from 'react';
import "./nav.css";
import { MdHelpCenter } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='nav'>
      <h1>Fusion</h1>
      <div className="nav-right">
        <div className="role" onClick={toggleDropdown}>
          Student
          <div className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <div className="dropdown-option"></div>
          </div>
        </div>
        <div className="nav-notification">
           <div className="not-num">27</div> notifications
        </div>
        <div className="help">
          <MdHelpCenter /> help
        </div>
        <div className="nav-user" style={{height:"30px", width:"30px", color:"white", backgroundColor:"black"}}>
            KA
        </div>
      </div>
    </div>
  );
};

export default Navbar;
