import React from 'react'

const DataBrowser = ({
  resources,
}) => (
  resources ? (
    <ul>
      {React.Children.toArray(
        resources.map(
          (resource) => (
            <li>{resource.uri}</li>
          ),
        ),
      )}
    </ul>
  ) : (
    <p>Nothing to show</p>
  )
)

export default DataBrowser
