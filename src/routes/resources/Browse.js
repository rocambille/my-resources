import React from 'react'
import {Route} from 'react-router-dom'

import DataBrowser from 'components/DataBrowser'

const Browse = ({match, data}) => (
  <Route
    exact path={match.url}
    render={
      (props) => (
        <>
          <DataBrowser
            {...props}
            data={data}
            />
        </>
      )
    }
    />
)

export default Browse
