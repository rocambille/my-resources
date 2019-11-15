import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

import useGitHubContents from 'Hooks/useGitHubContents'

import DataSourceForm from 'Components/DataSourceForm'

import Browse from './Browse'
import Add from './Add'

const Resources = () => {
  const either = (key) => (defaultValue) => (
    window.localStorage.getItem(key) || defaultValue
  )

  const initialOwner = either('lastFetchedOwner')('')
  const initialRepository = either('lastFetchedRepository')('my-resources')
  const initialPath = either('lastFetchedPath')('db.json')

  const [
    contents,
    setContents,
    owner,
    setOwner,
    /* repository */,
    /* setRepository */,
    /* path */,
    /* setPath */,
    isFetching,
  ] = useGitHubContents(
    initialOwner,
    initialRepository,
    initialPath,
  )

  useEffect(() => (
    window.localStorage.setItem('lastFetchedOwner', owner)
  ))

  return (
    <>
      <DataSourceForm
        owner={owner}
        setOwner={setOwner}
        isFetching={isFetching}
      />
      <Route
        path="/resources"
      >
        <Browse
          contents={contents}
        />
        <Add
          contents={contents}
          setContents={setContents}
        />
      </Route>
    </>
  )
}

export default Resources
