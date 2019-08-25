import React from 'react'
import {Route} from 'react-router-dom'

import DataAdder from 'components/DataAdder'

const Add = ({match, dataState}) => (
  <Route
    exact path={`${match.url}/add`}
    render={
      (props) => (
        <>
          <DataAdder
            {...props}
            dataState={dataState}
            />
        </>
      )
    }
    />
)

export default Add
