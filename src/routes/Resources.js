import React, {useState} from 'react'
import {Route} from 'react-router-dom'

import DataProvider from 'components/DataProvider'

import Browse from './resources/Browse'
import Add from './resources/Add'

const Resources = () => {
  const [data, setData] = useState({items: []})
  const dataState = {get: data, set: setData}

  return (
    <>
      <DataProvider
        dataState={dataState}
        />
      <Route
        path="/resources"
        render={
          (props) => (
            <>
              <Browse
                {...props}
                dataState={dataState}
                />
              <Add
                {...props}
                dataState={dataState}
                />
            </>
          )
        }
      />
    </>
  )
}

export default Resources
