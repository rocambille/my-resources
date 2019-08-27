import React from 'react'
import {Route} from 'react-router-dom'

import {useGitHub} from 'hooks/useGitHub'

import DataProvider from 'components/DataProvider'

import Browse from './resources/Browse'
import Add from './resources/Add'

const Resources = () => {
  const [data, setFetchUrl, isFetching] = useGitHub()

  return (
    <>
      <DataProvider
        setFetchUrl={setFetchUrl}
        isFetching={isFetching}
        />
      <Route
        path="/resources"
        render={
          (props) => (
            <>
              <Browse
                {...props}
                data={data}
                />
              <Add
                {...props}
                />
            </>
          )
        }
      />
    </>
  )
}

export default Resources
