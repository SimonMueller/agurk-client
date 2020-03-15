import React, { useEffect, useState } from 'react';
import { Message } from 'agurk-shared';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import { handleServerMessage, createApi as createServerApi } from './communication/serverApi';
import reducer from './redux/reducers';

const WSS_SERVER_URI = process.env.REACT_APP_WSS_SERVER_URI as string;

const store = createStore(reducer);

export default function App() {
  const [subject] = useState<WebSocketSubject<Message>>(webSocket(WSS_SERVER_URI));

  useEffect(() => {
    subject.subscribe((message) => handleServerMessage(message, store.dispatch));
    return () => subject.complete();
  }, [subject]);

  const serverApi = createServerApi(subject);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Provider store={store}>
          <Game serverApi={serverApi} />
        </Provider>
      </main>
    </div>
  );
}
