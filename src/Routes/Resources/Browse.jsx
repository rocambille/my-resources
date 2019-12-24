import React from 'react'
import {
  Route,
  useRouteMatch,
} from 'react-router-dom'

import DataBrowser from 'Components/DataBrowser'

const Browse = ({
  resources,
}) => {
  const { path } = useRouteMatch()
  return (
    <Route
      exact
      path={path}
    >
      <DataBrowser
        resources={resources}
      />
    </Route>
  )
}

export default Browse
