import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Styles/navbar.css'

const Navbar = () => (
  <nav>
    <ul className="nav__list _space_inset _space_stack">
      <li>
        <NavLink
          exact
          to="/resources/"
          className="nav__link _space_inset-squish _space_inline"
          activeClassName="nav__link_active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/resources/add"
          className="nav__link _space_inset-squish"
          activeClassName="nav__link_active"
        >
          Add resource
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar
