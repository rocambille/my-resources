import React from 'react'
import {Route} from 'react-router-dom'

import DataConsumer from 'components/DataConsumer'
import DataProvider from 'components/DataProvider'

const Browse = ({match, data, setData}) => (
  <Route
    exact path={match.url}
    render={
      (props) => (
        <>
          <DataProvider
            {...props}
            setData={setData}
            />
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
