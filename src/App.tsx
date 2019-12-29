import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>

    <main>
      <Game />
    </main>
  </div>
);

export default App;
