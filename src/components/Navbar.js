import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/about"> About Me </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/education"> Education </Link>
            <Link to="/contact"> Contact </Link>
        </div>
    )
}

export default Navbar;