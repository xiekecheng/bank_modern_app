import React from 'react';
import {logo} from '../assets'

const Navbar = () => {
    return (
        <div className={`flex justify-between items-center`}>
            <div>
                <img src={logo} alt=""/>
            </div>
            <ul className={`flex gap-4 text-white`}>
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Support</li>
            </ul>

        </div>
    );
};

export default Navbar;