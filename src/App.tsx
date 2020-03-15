import React, { useEffect, useState } from 'react';
import { Message } from 'agurk-shared';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import createServerApi from './communication/serverApi';

const WS_SERVER_URI = 'ws://localhost:3001';

export default function App() {
  const [subject] = useState<WebSocketSubject<Message>>(webSocket(WS_SERVER_URI));

  useEffect(() => {
    subject.subscribe();
    return () => subject.complete();
  }, [subject]);

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
