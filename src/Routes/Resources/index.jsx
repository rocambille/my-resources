import React from 'react'
import { Route } from 'react-router-dom'
import { useLocalStorage } from '@rehooks/local-storage'

import useGitHubContents from 'Hooks/useGitHubContents'

import DataSourceForm from 'Components/DataSourceForm'

import Browse from './Browse'
import Add from './Add'

const Resources = () => {
  const [
    owner,
    setOwner,
  ] = useLocalStorage('lastFetchedOwner')
  const [
    repository,
  ] = useLocalStorage('lastFetchedRepository', 'my-resources')
  const [
    path,
  ] = useLocalStorage('lastFetchedPath', 'db.json')

  const [
    contents,
    setContents,
    isFetching,
  ] = useGitHubContents(
    owner,
    repository,
    path,
  )

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
