import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'

import {useGitHubContents} from 'Hooks/useGitHubContents'

import RepositoryForm from 'Components/RepositoryForm'

import Browse from './Browse'
import Add from './Add'

const Resources = () => {
  const [
    initialOwner,
    initialRepository,
    initialPath,
  ] = [
    window.localStorage.getItem(
      'lastFetchedOwner'
    ) || '',
    window.localStorage.getItem(
      'lastFetchedRepository'
    ) || 'my-resources',
    window.localStorage.getItem(
      'lastFetchedPath'
    ) || 'db.json',
  ]

  const [
    contents,
    owner,
    setOwner,
    /*repository*/,
    /*setRepository*/,
    /*path*/,
    /*setPath*/,
    isFetching,
  ] = useGitHubContents(
    initialOwner,
    initialRepository,
    initialPath,
  )

  useEffect(
    () => (
      window.localStorage.setItem(
        'lastFetchedOwner',
        owner
      )
    )
  )

  return (
    <>
      <RepositoryForm
        {...{
          owner,
          setOwner,
          isFetching,
        }}
        />
      <Route
        path="/resources"
        render={
          (props) => (
            <>
              <Browse
                {...{
                  ...props,
                  contents,
                }}
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
