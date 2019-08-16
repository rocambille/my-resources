import React, {useState, useReducer} from 'react'
import {UID} from 'react-uid'

const inlineStyle = {
  marginRight: `.5rem`
}
const stretchInsetStyle = {
  padding: `.5rem .25rem`
}

const DataProvider = ({setData}) => {

  const fetchUsername = (username) => {
    if (!username || username.length === 0) {
      return
    }

    fetch(
      `https://api.github.com/repos/${username}/my-resources/contents/db.json`
    ).then(
      response => response.json()
    ).then(
      json => {
        // thx https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
        const fileContent = decodeURIComponent(
          atob(
            json.content
          ).split('').map(
            function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }
          ).join('')
        )

        setData(JSON.parse(fileContent))

        window.localStorage.setItem('lastFetchedUsername', username)
      }
    )
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
    <form>
      <UID>
        {
          id => (
            <div>
              <label
                htmlFor={id}
                style={inlineStyle}
                >Type a GitHub username:</label>
              <input
                id={id}
                onChange={event => setUsername({value: event.target.value})}
                placeholder="jdoe"
                style={stretchInsetStyle}
                type="text"
                value={username.value}
                />
            </div>
          )
        }
      </UID>
    </form>
  )
}

export default DataProvider