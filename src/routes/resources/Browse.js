import React from 'react'
import {Route} from 'react-router-dom'

import DataBrowser from 'components/DataBrowser'

const Browse = (
  {
    match,
    contents,
  }
) => (
  <Route
    exact path={match.url}
    render={
      (props) => (
        <>
          <DataBrowser
            {...{
              ...props,
              contents,
            }}
            />
        </>
      )
    }
    />
)

export default Browse
