import React from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css';

function Navbar() {
  return (
    <div className="top-bar">
      <div className='logo'>
        <NavLink to="/" className="link"><h3><span>MED</span>AID</h3></NavLink>
      </div>
    </div>
  );
}

export default Navbar;