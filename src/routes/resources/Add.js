import React from 'react'
import {Route} from 'react-router-dom'

import DataAdder from 'components/DataAdder'
import DataProvider from 'components/DataProvider'

const Add = ({match, data, setData}) => (
  <Route
    exact path={`${match.url}/add`}
    render={
      (props) => (
        <>
          <DataProvider
            {...props}
            setData={setData}
            />
          <DataAdder
            {...props}
            data={data}
            />
        </>
      )
    }
    />
)

export default Add
