import React, {useState} from 'react'
import {UID} from 'react-uid'

const inlineStyle = {
  marginRight: `.5rem`
}
const stretchInsetStyle = {
  padding: `.5rem .25rem`
}

const SourceChooser = () => {
  const [source, setSource] = useState("")

  return (
    <form>
      <UID>
        {
          id => (
            <div>
              <label htmlFor={id} style={inlineStyle}>Type a GitHub username:</label>
              <input id={id} style={stretchInsetStyle} type="text" placeholder="jdoe" value={source} onChange={(event) => setSource(event.target.value)} />
            </div>
          )
        }
      </UID>
    </form>
  )
}

export default SourceChooser