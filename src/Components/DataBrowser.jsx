import React from 'react'

const DataBrowser = ({
  resources,
}) => (
  resources ? (
    <ul>
      {
        resources.map(
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
