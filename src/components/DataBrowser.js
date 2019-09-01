import React from 'react'

const DataBrowser = (
  {
    contents,
  }
) => (
  <ul>
    {
      contents.items && contents.items.map(
        (item, i) => (
          <li key={i}>{item.title}</li>
        )
      )
    }
  </ul>
)

export default DataBrowser
