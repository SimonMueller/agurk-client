import React, { useEffect, useState } from 'react';
import { Message, MessageName } from 'agurk-shared';
import { connect } from 'react-redux';
import { filter } from 'rxjs/operators';
import { Action, Dispatch } from 'redux';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {
  createAuthenticationApi, createGameApi, dispatchWebSocketMessageAsActions,
} from './communication/webSocketServerApi';
import { State } from './redux';
import { unauthenticateWithError } from './redux/authentication.action';
import Lobby from './Lobby';
import Board from './Board';

const WSS_SERVER_URI = process.env.REACT_APP_WSS_SERVER_URI as string;

interface Props {
  dispatch: Dispatch<Action>;
  authenticationToken: string;
  isGameStarted: boolean;
}

function Game({ dispatch, authenticationToken, isGameStarted }: Props) {
  const [subject] = useState<WebSocketSubject<Message>>(webSocket(WSS_SERVER_URI));
  const gameApi = createGameApi(subject);

  useEffect(() => {
    subject.subscribe((message) => dispatchWebSocketMessageAsActions(message, dispatch),
      () => dispatch(unauthenticateWithError('Could not contact the game server. Try again later...')));
    return () => subject.complete();
  }, [subject, dispatch]);

  useEffect(() => {
    subject.pipe(
      filter((message) => message.name === MessageName.REQUEST_AUTHENTICATION),
    ).subscribe(() => {
      const webSocketAuthenticationApi = createAuthenticationApi(subject);
      webSocketAuthenticationApi.sendAuthenticate(authenticationToken);
    },
    () => dispatch(unauthenticateWithError('Could not authenticate with the game server. Try to login again...')));
    return () => subject.complete();
  }, [subject, dispatch, authenticationToken]);

  return (
    <>
      { isGameStarted
        ? <Board serverApi={gameApi} />
        : <Lobby startGame={gameApi.sendStartGame} /> }
    </>
  );
}

const mapStateToProps = (state: State) => ({
  isGameStarted: state.game.isRunning,
  authenticationToken: state.authentication.token,
});

export default connect(mapStateToProps)(Game);
