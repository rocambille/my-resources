import React from 'react'

const DataConsumer = ({data}) => (
	<ul>
    {
			data.items.map(
				item => (
					<li>{item.title}</li>
				)
			)
		}
  </ul>
)

export default DataConsumer