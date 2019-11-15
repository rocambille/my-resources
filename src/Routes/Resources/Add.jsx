import React from 'react'
import {
  Route,
  useRouteMatch,
} from 'react-router-dom'

import DataAdder from 'Components/DataAdder'

const Add = ({
  contents,
  setContents,
}) => {
  const match = useRouteMatch()
  return (
    <Route
      exact
      path={`${match.url}/add`}
    >
      <DataAdder
        contents={contents}
        setContents={setContents}
      />
    </Route>
  )
}

export default Add
