import React from 'react'

import DataAdder from 'components/DataAdder'
import DataConsumer from 'components/DataConsumer'

const Browse = ({data}) => (
  <DataConsumer data={data} />
)

const Add = ({data}) => (
  <DataAdder data={data} />
)

export {Browse, Add}
