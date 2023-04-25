import React from 'react';
import { NavLink } from 'react-router-dom'

import './home.css';
import Navbar from '../Navbar/navbar.jsx';

function Home() {

  return (
    <div>
        <Navbar />
        <div className="Home card">
            <h1 className='greeting'>Welcome to <span>Med</span>Aid</h1>
            <p className='about'>We provide doctor's assistant tool to take your history <br></br>
            Please answer a few questions to generate your complete history<br></br>
            This will take just 10 minutes of your time</p>
            <div className='button-holder'>
              <NavLink to="/form" className="button">Continue</NavLink>
            </div>
        </div>
    </div>
  );
}

export default Home;