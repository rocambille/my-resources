import React from 'react'
import {Route} from 'react-router-dom'

import {useGitHub} from 'hooks/useGitHub'

import RepositoryForm from 'components/RepositoryForm'

import Browse from './resources/Browse'
import Add from './resources/Add'

const Resources = () => {
  const [data, setFetchUrl, isFetching] = useGitHub()

  return (
    <>
      <RepositoryForm
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
