import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <div class="navBar">
            <div class="nav-links">
                <Link to="/"> Home </Link>
                <Link to="/about"> About Me </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/education"> Education </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
    )
}

export default Navbar;