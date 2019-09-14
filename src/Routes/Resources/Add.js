import React from 'react'
import {Route} from 'react-router-dom'

import DataAdder from 'Components/DataAdder'

const Add = (
  {
    match,
  }
) => (
  <Route
    exact path={`${match.url}/add`}
    render={
      (props) => (
        <>
          <DataAdder
            {...props}
            />
        </>
      )
    }
    />
)

export default Add
