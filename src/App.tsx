import React, { useEffect } from 'react';
import { Subject } from 'rxjs';
import { Message } from 'agurk-shared';
import { webSocket } from 'rxjs/webSocket';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

export default function App() {
  const subject: Subject<Message<object>> = webSocket('ws://localhost:3001');

  useEffect(() => {
    subject.subscribe();
    return () => subject.complete();
  });

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
