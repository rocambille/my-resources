import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/resources"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resources/add"
          activeClassName="nav__link_active"
        >
          Add resource
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar
