import React from 'react';
import "./Navbar.css"
import logo from "../../images/Logo.svg"

const Navbar = () => {
    return (
        <div className='menubar'>
            <img src={logo} alt="" />
            <ul className='menu'>
                <a href='orders' className='menu-item'>order</a>
                <a href='/review' className='menu-item'>order Review</a>
                <a href='/inventory' className='menu-item'>manage inventory</a>
            </ul>
        </div>
    );
};

export default Navbar;