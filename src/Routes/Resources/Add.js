import React from 'react'
import {Route} from 'react-router-dom'

import DataAdder from 'Components/DataAdder'

const Add = (
  {
    match,
    contents,
    setContents,
  }
) => (
  <Route
    exact path={`${match.url}/add`}
    render={
      (props) => (
        <>
          <DataAdder
            {...{
              ...props,
              contents,
              setContents,
            }}
            />
        </>
      )
    }
    />
)

export default Add
