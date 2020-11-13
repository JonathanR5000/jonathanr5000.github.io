import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
    return (
        <div class="navBar">
            <div class="nav-links">
                <Link class="links" to="/" style={{textDecoration: 'none'}}> Home </Link>
                <Link class="links" to="/about" style={{textDecoration: 'none'}}> About Me </Link>
                <Link class="links" to="/projects" style={{textDecoration: 'none'}}> Projects </Link>
                <Link class="links" to="/education" style={{textDecoration: 'none'}}> Education </Link>
                <Link class="links" to="/contact" style={{textDecoration: 'none'}}> Contact </Link>
            </div>
        </div>
    )
}

export default Navbar;