import React, {useState} from 'react'
import {Route, NavLink, BrowserRouter as Router} from 'react-router-dom'

import {
  Browse as ResourcesBrowse,
  Add as ResourcesAdd
} from './routes/resources'

const App = () => {
  const [data, setData] = useState({items: []})

  return (
    <Router>
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

      <Route
        exact path={
          [
            "/",
            "/resources"
          ]
        }
        render={
          (props) => (
            <ResourcesBrowse {...props}
              data={data}
              setData={setData}
              />
          )
        }
        />
      <Route
        path="/resources/add"
        render={
          (props) => (
            <ResourcesAdd {...props}
              data={data}
              setData={setData}
              />
          )
        }
        />
    </Router>
  )
}

export default App