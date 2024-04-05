import React from 'react';
import { Link } from 'react-router-dom'; // Import Router as BrowserRouter

import logo from '../../images/logo/prepai-logo.png';

function NavBar() {
  return (
    <nav>
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
