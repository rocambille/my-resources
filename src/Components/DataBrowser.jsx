import React from 'react'

const DataBrowser = ({
  contents,
}) => (
  <ul>
    {
      contents.resources && contents.resources.map(
        (resource) => (
          <li key={resource.uri}>{resource.uri}</li>
        ),
      )
    }
  </ul>
)

export default DataBrowser
