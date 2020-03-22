import React from 'react';
import { connect } from 'react-redux';
import { Card, ValidatedTurn } from 'agurk-shared';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';
import { PlayerState, GameState } from './redux/reducers';
import { WebSocketGameApi } from './communication/webSocketServerApi';

interface GameProps {
  serverApi: WebSocketGameApi;
  players: PlayerState[];
  playedTurns: ValidatedTurn[];
  cardsInHand: Card[];
  playCards: (cards: Card[]) => void;
  startGame: () => void;
}

function Game({
  players, playedTurns, cardsInHand, playCards, startGame,
}: GameProps) {
  return (
    <div>
      <h1>Agurk</h1>

      <button type="button" onClick={startGame}>Start Game</button>

      <Players players={players} />
      <Stack playedTurns={playedTurns} />
      <Hand
        cardsInHand={cardsInHand}
        playCards={playCards}
      />
    </div>
  );
}

const mapStateToProps = (state: GameState, ownProps: { serverApi: WebSocketGameApi }) => ({
  playCards: ownProps.serverApi.sendPlayCards,
  startGame: ownProps.serverApi.sendStartGame,
  cardsInHand: state.cardsInHand,
  players: state.players,
  playedTurns: state.validatedTurns,
});

export default connect(mapStateToProps)(Game);
