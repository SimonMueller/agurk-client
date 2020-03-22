import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Lobby from './Lobby';
import AuthenticatedRoute from './AuthenticatedRoute';
import Home from './Home';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Router>
          <Switch>
            <AuthenticatedRoute path="/game">
              <Lobby />
            </AuthenticatedRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}
