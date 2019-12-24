import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Styles/navbar.css'

const Navbar = () => (
  <nav>
    <ul className="nav__list space:inset space:stack flex:row flex-both:center">
      <li>
        <NavLink
          exact
          to="/resources/"
          className="nav__link space:inset-squish space:inline"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/resources/add"
          className="nav__link space:inset-squish"
          activeClassName="nav__link_active"
        >
          Add
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar
