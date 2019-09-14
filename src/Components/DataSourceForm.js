import React, {useReducer} from 'react'
import {UID} from 'react-uid'

import 'Styles/space.css'

const DataSourceForm = (
  {
    owner,
    setOwner,
    isFetching,
  }
) => {

  const reducer = (state, action) => {
    window.clearTimeout(state.timeoutId)

    const newOwner = action.value

    return {
      value: newOwner,
      timeoutId: window.setTimeout(
        () => setOwner(newOwner),
        2000
      )
    }
  }

  const [username, setUsername] = useReducer(
    reducer, {
      value: owner,
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

export default DataSourceForm
