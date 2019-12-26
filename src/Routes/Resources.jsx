import React from 'react'
import {
  Route,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'

import useGitHubContents from 'Hooks/useGitHubContents'

import DataSource from 'Components/DataSource'
import ResourceAdder from 'Components/ResourceAdder'
import ResourceBrowser from 'Components/ResourceBrowser'

/*
██████╗ ██████╗  ██████╗ ██╗    ██╗███████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗██║    ██║██╔════╝██╔════╝
██████╔╝██████╔╝██║   ██║██║ █╗ ██║███████╗█████╗  
██╔══██╗██╔══██╗██║   ██║██║███╗██║╚════██║██╔══╝  
██████╔╝██║  ██║╚██████╔╝╚███╔███╔╝███████║███████╗
╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚══════╝
*/

const Browse = ({
  resources,
}) => {
  const { path } = useRouteMatch()
  return (
    <Route
      exact
      path={path}
    >
      <ResourceBrowser
        resources={resources}
      />
    </Route>
  )
}

/*
 █████╗ ██████╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗
███████║██║  ██║██║  ██║
██╔══██║██║  ██║██║  ██║
██║  ██║██████╔╝██████╔╝
╚═╝  ╚═╝╚═════╝ ╚═════╝ 
*/

const Add = ({
  addResource,
}) => {
  const { path } = useRouteMatch()
  return (
    <Route
      exact
      path={`${path}/add`}
    >
      <ResourceAdder
        add={addResource}
      />
    </Route>
  )
}

/*
██████╗  ██████╗  ██████╗ ████████╗
██╔══██╗██╔═══██╗██╔═══██╗╚══██╔══╝
██████╔╝██║   ██║██║   ██║   ██║   
██╔══██╗██║   ██║██║   ██║   ██║   
██║  ██║╚██████╔╝╚██████╔╝   ██║   
╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   
*/

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
    token,
    setToken,
  ] = useLocalStorage('token')

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
        token={token}
        setToken={setToken}
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
