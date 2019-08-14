import React, {useState} from 'react'
import {UID} from 'react-uid'

const inlineStyle = {
  marginRight: `.5rem`
}
const stretchInsetStyle = {
  padding: `.5rem .25rem`
}

const DataProvider = ({setData}) => {

  const fetchUsername = (username) => {
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

  const [username, setUsername] = useState(lastFetchedUsername)

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
                onChange={(event) => {
                  fetchUsername(event.target.value)
                  return setUsername(event.target.value)}
                }
                placeholder="jdoe"
                style={stretchInsetStyle}
                type="text"
                value={username}
                />
            </div>
          )
        }
      </UID>
    </form>
  )
}

export default DataProvider