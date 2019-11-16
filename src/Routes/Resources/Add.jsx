import React from 'react'
import {
  Route,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'

import DataAdder from 'Components/DataAdder'

const Add = ({
  contents,
  setContents,
}) => {
  const history = useHistory()
  const match = useRouteMatch()
  return (
    <Route
      exact
      path={`${match.url}/add`}
    >
      <DataAdder
        contents={contents}
        setContents={(...args) => {
          history.push('/resources')
          setContents(...args)
        }}
      />
    </Route>
  )
}

export default Add
