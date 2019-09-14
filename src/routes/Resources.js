import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'

import {useGitHubContents} from 'hooks/useGitHubContents'

import RepositoryForm from 'components/RepositoryForm'

import Browse from './resources/Browse'
import Add from './resources/Add'

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
