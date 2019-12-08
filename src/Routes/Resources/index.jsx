import React from 'react'
import { Route } from 'react-router-dom'
import { useLocalStorage } from '@rehooks/local-storage'

import useGitHubContents from 'Hooks/useGitHubContents'

import DataSourceForm from 'Components/DataSourceForm'

import Browse from './Browse'
import Add from './Add'

const initialContents = []

const didPull = (data) => JSON.parse(data).resources

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
    isAhead,
    push,
  ] = useGitHubContents(
    owner,
    repository,
    path,
    initialContents,
    didPull,
  )

  return (
    <>
      <DataSourceForm
        owner={owner}
        setOwner={setOwner}
        isFetching={isFetching}
        isAhead={isAhead}
        push={push}
      />
      <Route
        path="/resources"
      >
        <Browse
          resources={contents}
        />
        <Add
          addResource={(resource) => {
            setContents([
              ...contents,
              resource,
            ])
          }}
        />
      </Route>
    </>
  )
}

export default Resources
