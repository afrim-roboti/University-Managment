import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">University Managment System</h3>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">Home</Link>
      <Link to="/departments" className="NavBar-Link">Departments</Link>
      <Link to="/professors" className="NavBar-Link">Professors</Link>
      <Link to="/students" className="NavBar-Link">Students</Link>
      <Link to="/lectures" className="NavBar-Link">Lectures</Link>
     </div>
   </nav>
  );
};

export default NavBar;




