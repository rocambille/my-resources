import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import SourceChooser from './components/SourceChooser'

function App() {
  const [fetchedData, setFetchedData] = useState({items:[]})
  const setSource = (username) => {
    window.localStorage.setItem('source', username)
    fetch(
      `https://api.github.com/repos/${username}/my-resources/contents/db.json`
    ).then(
      response => response.json()
    ).then(
      data => setFetchedData(
        JSON.parse(
          // thx https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
          decodeURIComponent(atob(data.content).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''))
        )
      )
    )
  }
  const initialSource = window.localStorage.getItem('source') || ''
  setSource(initialSource)
  return (
    <div className="App">
      <SourceChooser initialSource={initialSource} dispatchSource={setSource} />
      <ul>
        {fetchedData.items.map(item => (<li>{item.title}</li>))}
      </ul>
    </div>
  );
}

export default App;
