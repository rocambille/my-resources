import React, {useReducer} from 'react'
import {UID} from 'react-uid'

import 'styles/space.css'

const RepositoryForm = (
  {
    setOwner,
    setRepository,
    isFetching,
  }
) => {

  setRepository('my-resources')

  const fetchUsername = (username) => {
    if (!username || username.length === 0) {
      return
    }

    setOwner(username)

    window.localStorage.setItem('lastFetchedUsername', username)
  }

  const lastFetchedUsername = window.localStorage.getItem('lastFetchedUsername') || ''
  fetchUsername(lastFetchedUsername)

  const reducer = (state, action) => {
    window.clearTimeout(state.timeoutId)

    return {
      value: action.value,
      timeoutId: window.setTimeout(
        () => fetchUsername(action.value), 2000
      )
    }
  }

  const [username, setUsername] = useReducer(
    reducer, {
      value: lastFetchedUsername,
      timeoutId: 0
    }
  )

  return (
    <UID>
      {
        id => (
          <div
            className="_space-size_s"
            style={{textAlign: `center`}}
            >
            <label
              htmlFor={id}
              className="_space_inline"
              >
              {
                isFetching ? (
                  "fetching"
                ) : (
                  "fetched"
                )
              }
            </label>
            <input
              id={id}
              onChange={event => setUsername({value: event.target.value})}
              placeholder="jdoe"
              className="_space-size_xs _space_inset-stretch"
              type="text"
              value={username.value}
              />
          </div>
        )
      }
    </UID>
  )
}

export default RepositoryForm
