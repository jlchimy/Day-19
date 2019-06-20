import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome!
        </p>
        <div>
          Enter your email:
          <input type="text" placeholder="Email"></input>
        </div>
        <div>
          Enter your password:
          <input type="password" placeholder="Password"></input>
        </div>
        <div>
          <button onClick="login()">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}

function login() {
  
}

export default App;
