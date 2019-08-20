import React, {useState} from 'react'
import {Route, NavLink, BrowserRouter as Router} from 'react-router-dom'

import {
  Browse as ResourcesBrowse,
  Add as ResourcesAdd
} from './routes/resources'

import DataProvider from './components/DataProvider'

const App = () => {
  const [data, setData] = useState({items: []})

  const routes = (
    <>
      <Route
        exact path={
          [
            "/",
            "/resources"
          ]
        }
        render={
          (props) => (
            <ResourcesBrowse {...props} data={data} />
          )
        }
        />
      <Route
        path="/resources/add"
        render={
          (props) => (
            <ResourcesAdd {...props} data={data} />
          )
        }
        />
    </>
  )

  return (
    <Router>
      <ul>
        <li>
          <NavLink
            to="/"
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
      <DataProvider setData={setData} />
      {routes}
    </Router>
  )
}

export default App