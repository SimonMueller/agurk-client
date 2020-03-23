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

interface Props {
  dispatch: (action: Action) => void;
  authenticationToken: string;
  isGameStarted: boolean;
}

function Lobby({ dispatch, authenticationToken, isGameStarted }: Props) {
  const [subject] = useState<WebSocketSubject<Message>>(webSocket(WSS_SERVER_URI));
  const gameApi = createGameApi(subject);

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
      <h1>Agurk</h1>

      { isGameStarted
        ? <Game serverApi={gameApi} />
        : <button type="button" onClick={gameApi.sendStartGame}>Start Game</button> }
    </div>
  );
}

const mapStateToProps = (state: GameState) => ({
  isGameStarted: state.game.isRunning,
  authenticationToken: state.authentication.token,
});

export default connect(mapStateToProps)(Lobby);
