import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Lobby from './Lobby';
import { State } from './redux';
import Login from './Login';

interface Props {
  isAuthenticated: boolean;
}

function App({ isAuthenticated }: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <h1>Agurk</h1>

        { isAuthenticated ? <Lobby /> : <Login /> }
      </main>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(App);
