import React from 'react'

const DataBrowser = (
  {
    contents,
  }
) => (
  <ul>
    {
      contents.resources && contents.resources.map(
        (resource, i) => (
          <li key={i}>{resource.uri}</li>
        )
      )
    }
  </ul>
)

export default DataBrowser
