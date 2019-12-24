import React from 'react'
import {
  Route,
  useHistory,
} from 'react-router-dom'
import { useLocalStorage } from '@rehooks/local-storage'

import useGitHubContents from 'Hooks/useGitHubContents'

import DataSource from 'Components/DataSource'

import Browse from './Browse'
import Add from './Add'

const initialContents = []

const afterPull = (data) => JSON.parse(data).resources

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
    git,
  ] = useGitHubContents(
    owner,
    repository,
    path,
    initialContents,
    afterPull,
  )

  const history = useHistory()

  return (
    <>
      <DataSource
        owner={owner}
        setOwner={setOwner}
        git={git}
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
            history.push('/resources')
          }}
        />
      </Route>
    </>
  )
}

export default Resources
