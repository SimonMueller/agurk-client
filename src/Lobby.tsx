import React, { useEffect, useState } from 'react';
import { Message, MessageName } from 'agurk-shared';
import { connect } from 'react-redux';
import { filter } from 'rxjs/operators';
import { Action } from 'redux';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import './App.css';
import Game from './Game';
import {
  createAuthenticationApi, createGameApi, dispatchWebSocketMessageAsActions,
} from './communication/webSocketServerApi';
import { GameState } from './redux/reducers';

const WSS_SERVER_URI = process.env.REACT_APP_WSS_SERVER_URI as string;

interface AppProps {
  dispatch: (action: Action) => void;
  authenticationToken: string;
}

function Lobby({ dispatch, authenticationToken }: AppProps) {
  const [subject] = useState<WebSocketSubject<Message>>(webSocket(WSS_SERVER_URI));

  useEffect(() => {
    subject.subscribe((message) => dispatchWebSocketMessageAsActions(message, dispatch));
    return () => subject.complete();
  }, [subject, dispatch]);

  useEffect(() => {
    subject.pipe(
      filter((message) => message.name === MessageName.REQUEST_AUTHENTICATION),
    ).subscribe(() => {
      const webSocketAuthenticationApi = createAuthenticationApi(subject);
      webSocketAuthenticationApi.sendAuthenticate(authenticationToken);
    });
    return () => subject.complete();
  }, [subject, authenticationToken]);

  return (
    <div className="Lobby">
      <Game serverApi={createGameApi(subject)} />
    </div>
  );
}

const mapStateToProps = (state: GameState) => ({
  authenticationToken: state.authentication.jwt,
});

export default connect(mapStateToProps)(Lobby);
