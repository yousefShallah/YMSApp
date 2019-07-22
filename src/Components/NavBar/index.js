import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <div className="imgDiv"> 
            <a href="#"> <img src="./Images/carLogo.png" className="logo" /></a>
            </div>
            <ul className="list"> 
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/about"> About </Link> </li>
                <li> <Link to="/content"> Content </Link> </li>
            </ul>
        </div>
    )
}
export default NavBar;