import React from 'react';
import "./Navbar.css"
import navlogo from '../../assets/nav-logo.svg'
import navProflie from '../../assets/nav-profile.svg'
function Navbar(props) {
    return (
        <div className="navbar">
            <img src={navlogo} alt=""className='nav-logo'/>
            <img src={navProflie} alt=""className='nav-profile'/>
        </div>
    );
}

export default Navbar;