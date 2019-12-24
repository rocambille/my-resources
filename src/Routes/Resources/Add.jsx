import React from 'react'
import {
  Route,
  useRouteMatch,
} from 'react-router-dom'

import DataAdder from 'Components/DataAdder'

const Add = ({
  addResource,
}) => {
  const { path } = useRouteMatch()
  return (
    <Route
      exact
      path={`${path}/add`}
    >
      <DataAdder
        add={addResource}
      />
    </Route>
  )
}

export default Add
