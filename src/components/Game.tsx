import React, { useEffect, useState } from 'react';
import { Message, MessageName } from 'agurk-shared';
import { connect } from 'react-redux';
import { filter } from 'rxjs/operators';
import { Action, Dispatch } from 'redux';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {
  createAuthenticationApi, createGameApi, dispatchWebSocketMessageAsActions,
} from '../communication/webSocketServerApi';
import { State } from '../redux';
import { unauthenticateWithError } from '../redux/authentication.action';
import Lobby from './Lobby';
import Board from './board/Board';

const WSS_SERVER_URI = process.env.REACT_APP_WSS_SERVER_URI as string;

interface Props {
  dispatch: Dispatch<Action>;
  authenticationToken: string;
  isGameRunning: boolean;
}

function respondToAuthenticationRequestFromServer(
  subject: WebSocketSubject<Message>,
  authenticationToken: string,
  dispatch: Dispatch<Action>,
) {
  subject.pipe(filter((message) => message.name === MessageName.REQUEST_AUTHENTICATION))
    .subscribe(() => {
      const webSocketAuthenticationApi = createAuthenticationApi(subject);
      webSocketAuthenticationApi.sendAuthenticate(authenticationToken);
    },
    () => dispatch(unauthenticateWithError('Could not authenticate with the game server. Try to login again...')));
}

function handleMessagesFromServer(subject: WebSocketSubject<Message>, dispatch: Dispatch<Action>) {
  subject.subscribe((message) => dispatchWebSocketMessageAsActions(message, dispatch),
    () => dispatch(unauthenticateWithError('Could not contact the game server. Try again later...')));
}

function Game({ dispatch, authenticationToken, isGameRunning }: Props) {
  const [subject] = useState<WebSocketSubject<Message>>(webSocket(WSS_SERVER_URI));
  const gameApi = createGameApi(subject);

  useEffect(() => {
    handleMessagesFromServer(subject, dispatch);
    return () => subject.complete();
  }, [subject, dispatch]);

  useEffect(() => {
    respondToAuthenticationRequestFromServer(subject, authenticationToken, dispatch);
    return () => subject.complete();
  }, [subject, dispatch, authenticationToken]);

  return (
    <>
      { isGameRunning
        ? <Board serverApi={gameApi} />
        : <Lobby startGame={gameApi.sendStartGame} /> }
    </>
  );
}

const mapStateToProps = (state: State) => ({
  isGameRunning: state.game.isRunning,
  authenticationToken: state.authentication.token,
});

export default connect(mapStateToProps)(Game);
