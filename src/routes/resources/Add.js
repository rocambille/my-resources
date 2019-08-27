import React from 'react'
import {Route} from 'react-router-dom'

import DataAdder from 'components/DataAdder'

const Add = ({match}) => (
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
