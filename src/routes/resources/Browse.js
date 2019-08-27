import React from 'react'
import {Route} from 'react-router-dom'

import DataConsumer from 'components/DataConsumer'

const Browse = ({match, data}) => (
  <Route
    exact path={match.url}
    render={
      (props) => (
        <>
          <DataConsumer
            {...props}
            data={data}
            />
        </>
      )
    }
    />
)

export default Browse
