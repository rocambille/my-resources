import React from 'react'

const inlineStyle = {
  marginRight: `.5rem`
}
const stretchInsetStyle = {
  padding: `.5rem .25rem`
}

const SourceChooser = () => (
  <form>
    <label style={inlineStyle}>Type a GitHub username:</label>
    <input style={stretchInsetStyle} type="text" placeholder="jdoe" />
  </form>
)

export default SourceChooser