import React from 'react'
import {
  Route,
  useRouteMatch,
} from 'react-router-dom'

import DataAdder from 'Components/DataAdder'

const Add = ({
  addResource,
}) => {
  const match = useRouteMatch()
  return (
    <Route
      exact
      path={`${match.url}/add`}
    >
      <DataAdder
        add={addResource}
      />
    </Route>
  )
}

export default Add
