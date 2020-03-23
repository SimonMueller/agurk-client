import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Lobby from './Lobby';
import { GameState } from './redux/reducers';
import Authenticate from './Authenticate';

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
        { isAuthenticated ? <Lobby /> : <Authenticate /> }
      </main>
    </div>
  );
}

const mapStateToProps = (state: GameState) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(App);
