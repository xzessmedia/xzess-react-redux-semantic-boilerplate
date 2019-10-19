/*
 * @Author: Tim Koepsel 
 * @Date: 2019-06-13 10:59:18 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-07-25 11:45:37
 */
import React from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button class="ui button">Learn React</button>
      </header>
    </div>
  );
}

export default App;
