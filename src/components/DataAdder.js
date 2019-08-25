import React from 'react'

const DataAdder = ({dataState}) => (
  <>
    <p>add data to:</p>
    <ul>
      {
        dataState.get.items.map(
          (item, i) => (
            <li key={i}>{item.title}</li>
          )
        )
      }
    </ul>
  </>
)

export default DataAdder
