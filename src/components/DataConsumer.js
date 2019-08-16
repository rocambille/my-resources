import React from 'react'

const DataConsumer = ({data}) => (
	<ul>
    {
			data.items.map(
				(item, i) => (
					<li key={i}>{item.title}</li>
				)
			)
		}
  </ul>
)

export default DataConsumer