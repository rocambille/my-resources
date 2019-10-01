import React from 'react'
import {NavLink} from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../Styles/navbar.css';

const Navbar = () => {
  const beResponsive = () => {
    let x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  } 
  return (
    <div id="topnav" className="topnav">
       <NavLink
          to="/resources"
          className="button"
          activeClassName="nav__link_active"
          >
          Home
        </NavLink>
        <NavLink
          to="/resources/add"
          className="button"
          activeClassName="nav__link_active"
          >
          Add resource
        </NavLink>
        <a href="#" className="icon" onClick={ beResponsive }>
          <FontAwesomeIcon icon={ faBars } />
        </a>
    </div>
  ); 
}
export default Navbar
