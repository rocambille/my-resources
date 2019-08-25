import React from 'react'
import {Route} from 'react-router-dom'

import DataConsumer from 'components/DataConsumer'

const Browse = ({match, dataState}) => (
  <Route
    exact path={match.url}
    render={
      (props) => (
        <>
          <DataConsumer
            {...props}
            dataState={dataState}
            />
        </>
      )
    }
    />
)

export default Browse
