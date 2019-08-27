import React, {useReducer} from 'react'
import {UID} from 'react-uid'

import 'styles/space.css'

const DataProvider = ({dataState}) => {

  const fetchUsername = async (username) => {
    if (!username || username.length === 0) {
      return
    }

    const response = await fetch(
      `https://api.github.com/repos/${username}/my-resources/contents/db.json`
    )

    if (response.status !== 200) {
      return
    }

    window.localStorage.setItem('lastFetchedUsername', username)

    const json = await response.json()

    // thx https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
    const data = JSON.parse(
      decodeURIComponent(
        atob(
          json.content
        ).split('').map(
          function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }
        ).join('')
      )
    )

    dataState.set(data)
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
              >Type a GitHub username:</label>
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

export default DataProvider
