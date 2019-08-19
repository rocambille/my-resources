import React, {useState} from 'react';

import DataProvider from './components/DataProvider'
import DataConsumer from './components/DataConsumer'

function App() {
  const [data, setData] = useState({items: []})
  return (
    <>
      <DataProvider setData={setData} />
      <DataConsumer data={data} />
    </>
  );
}

export default App;
