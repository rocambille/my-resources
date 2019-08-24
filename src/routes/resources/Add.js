import React from 'react'

import DataAdder from 'components/DataAdder'
import DataProvider from 'components/DataProvider'

const Add = ({data, setData}) => (
  <>
    <DataProvider setData={setData} />
    <DataAdder data={data} />
  </>
)

export default Add
