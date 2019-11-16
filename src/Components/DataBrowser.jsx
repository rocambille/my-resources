import React from 'react'

const DataBrowser = ({
  contents,
}) => (
  contents.resources ? (
    <ul>
      {
        contents.resources.map(
          (resource) => (
            <li key={resource.uri}>{resource.uri}</li>
          ),
        )
      }
    </ul>
  ) : (
    <p>Nothing to show</p>
  )
)

export default DataBrowser
