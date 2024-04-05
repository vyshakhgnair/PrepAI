import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/prepai-logo.png';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar"> 
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ats">ATS Tracker</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
