import React from 'react'
import {UID} from 'react-uid'

const inlineStyle = {
  marginRight: `.5rem`
}
const stretchInsetStyle = {
  padding: `.5rem .25rem`
}

const SourceChooser = () => (
  <form>
    <UID>
      {
        id => (
          <div>
            <label htmlFor={id} style={inlineStyle}>Type a GitHub username:</label>
            <input id={id} style={stretchInsetStyle} type="text" placeholder="jdoe" />
          </div>
        )
      }
    </UID>
  </form>
)

export default SourceChooser