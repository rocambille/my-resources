import React from 'react'
import {
  Route,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'

import DataAdder from 'Components/DataAdder'

const Add = ({
  addResource,
}) => {
  const history = useHistory()
  const match = useRouteMatch()
  return (
    <Route
      exact
      path={`${match.url}/add`}
    >
      <DataAdder
        addResource={(...args) => {
          history.push('/resources')
          addResource(...args)
        }}
      />
    </Route>
  )
}

export default Add
