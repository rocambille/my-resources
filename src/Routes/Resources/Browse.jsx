import React from 'react'
import {
  Route,
  useRouteMatch,
} from 'react-router-dom'

import DataBrowser from 'Components/DataBrowser'

const Browse = ({
  resources,
}) => {
  const match = useRouteMatch()
  return (
    <Route
      exact
      path={match.url}
    >
      <DataBrowser
        resources={resources}
      />
    </Route>
  )
}

export default Browse
