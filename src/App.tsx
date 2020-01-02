import React, { useEffect } from 'react';
import { Message } from 'agurk-shared';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import createServerApi from './communication/serverApi';

export default function App() {
  const subject: WebSocketSubject<Message> = webSocket('ws://localhost:3001');

  useEffect(() => {
    subject.subscribe();
    return () => subject.complete();
  });

  const serverApi = createServerApi(subject);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Game serverApi={serverApi} />
      </main>
    </div>
  );
}
