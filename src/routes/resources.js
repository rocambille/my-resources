import React from 'react'

import DataAdder from 'components/DataAdder'
import DataConsumer from 'components/DataConsumer'
import DataProvider from 'components/DataProvider'

const Browse = ({data, setData}) => (
  <>
    <DataProvider setData={setData} />
    <DataConsumer data={data} />
  </>
)

const Add = ({data, setData}) => (
  <>
    <DataProvider setData={setData} />
    <DataAdder data={data} />
  </>
)

export {Browse, Add}
