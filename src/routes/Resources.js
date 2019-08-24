import React, {useState} from 'react'
import {Route} from 'react-router-dom'

import Browse from './resources/Browse'
import Add from './resources/Add'

const Resources = () => {
  const [data, setData] = useState({items: []})

  return (
    <Route
      path="/resources"
      render={
        (props) => (
          <>
            <Browse
              {...props}
              data={data}
              setData={setData}
              />
            <Add
              {...props}
              data={data}
              setData={setData}
              />
          </>
        )
      }
    />
  )
}

export default Resources
