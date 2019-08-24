import React from 'react'

import DataConsumer from 'components/DataConsumer'
import DataProvider from 'components/DataProvider'

const Browse = ({data, setData}) => (
  <>
    <DataProvider setData={setData} />
    <DataConsumer data={data} />
  </>
)

export default Browse
