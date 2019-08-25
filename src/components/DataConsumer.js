import React from 'react'

const DataConsumer = ({dataState}) => (
  <ul>
    {
      dataState.get.items.map(
        (item, i) => (
          <li key={i}>{item.title}</li>
        )
      )
    }
  </ul>
)

export default DataConsumer
