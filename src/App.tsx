import React from 'react';
import { Subject } from 'rxjs';
import { Message } from 'agurk-shared';
import { webSocket } from 'rxjs/webSocket';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

interface AppProps {}

interface AppState {
  subject: Subject<Message<object>>;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { subject: webSocket('ws://localhost:3001') };
  }

  componentDidMount() {
    const { subject } = this.state;
    subject.subscribe();
  }

  componentWillUnmount() {
    const { subject } = this.state;
    subject.complete();
  }

  render() {
    const { subject } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>
          <Game subject={subject} />
        </main>
      </div>
    );
  }
}
