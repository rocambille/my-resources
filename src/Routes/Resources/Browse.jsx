import React from 'react'
import {
  Route,
  useRouteMatch,
} from 'react-router-dom'

import DataBrowser from 'Components/DataBrowser'

const Browse = ({
  contents,
}) => {
  const match = useRouteMatch()
  return (
    <Route
      exact
      path={match.url}
    >
      <DataBrowser
        contents={contents}
      />
    </Route>
  )
}

export default Browse
