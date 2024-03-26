/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
*/

import React,  { useState }  from 'react';
import './App.css';
import CharacterInfo from './for2lab';
import InputComponent from './for3lab';
import CharacterList from "./for4lab";

function App(){
    return(
        <div className="App">
            <CharacterList/>
        </div>
    );
}

export default App;