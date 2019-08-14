import React from 'react';
import logo from './logo.svg';
import './App.css';

import SourceChooser from './components/SourceChooser'

function App() {
  const setSource = (username) => {
    window.localStorage.setItem('source', username)
    fetch(
      `https://api.github.com/repos/${username}/my-resources/contents/db.json`
    ).then(
      response => response.json()
    ).then(
      data => {
        JSON.parse(
          atob( // convert from base64
            data.content
          )
        )
      }
    )
  }
  const initialSource = window.localStorage.getItem('source') || ''
  setSource(initialSource)
  return (
    <div className="App">
      <SourceChooser initialSource={initialSource} dispatchSource={setSource} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
