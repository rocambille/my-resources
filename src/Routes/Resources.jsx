import React from 'react'
import {
  Route,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'

import useGitHubContent from '../Hooks/useGitHubContent'

import DataSource from '../Components/DataSource'
import ResourceAdder from '../Components/ResourceAdder'
import ResourceBrowser from '../Components/ResourceBrowser'

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

const initialContent = []

const afterPull = (data) => JSON.parse(data).resources
const beforePush = (data) => JSON.stringify({ resources: data }, null, 1)

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
    content,
    setContent,
    git,
  ] = useGitHubContent(
    owner,
    repository,
    path,
    token,
    initialContent,
    afterPull,
    beforePush,
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
          resources={content}
        />
        <Add
          addResource={(resource) => {
            setContent([
              ...content,
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
