import React, {useState} from 'react';
import './App.css';

import DataProvider from './components/DataProvider'
import DataConsumer from './components/DataConsumer'

function App() {
  const [data, setData] = useState({items: []})
  return (
    <div className="App">
      <DataProvider setData={setData} />
      <DataConsumer data={data} />
    </div>
  );
}

export default App;
