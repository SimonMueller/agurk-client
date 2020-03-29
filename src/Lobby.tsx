import React, { useEffect, useState } from 'react';
import { Message, MessageName, PlayerId } from 'agurk-shared';
import { connect } from 'react-redux';
import { filter } from 'rxjs/operators';
import { Dispatch } from 'redux';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { PrimaryButton } from './styled/Button';
import Game from './Game';
import {
  createAuthenticationApi, createGameApi, dispatchWebSocketMessageAsActions,
} from './communication/webSocketServerApi';
import { State } from './redux';
import PlayerIds from './PlayerIds';
import { GameAction } from './redux/game';

const WSS_SERVER_URI = process.env.REACT_APP_WSS_SERVER_URI as string;

interface Props {
  dispatch: Dispatch<GameAction>;
  authenticationToken: string;
  isGameStarted: boolean;
  players: PlayerId[];
}

function Lobby({
  dispatch, authenticationToken, isGameStarted, players,
}: Props) {
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
      { isGameStarted
        ? <Game serverApi={gameApi} />
        : (
          <>
            <PlayerIds playerIds={players} />
            <PrimaryButton type="button" onClick={gameApi.sendStartGame}>Start Game</PrimaryButton>
          </>
        ) }
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  isGameStarted: state.game.isRunning,
  players: state.lobby.players,
  authenticationToken: state.authentication.token,
});

export default connect(mapStateToProps)(Lobby);
