import React from 'react';
import { connect } from 'react-redux';
import { Card, ValidatedTurn } from 'agurk-shared';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';
import { State } from './redux';
import { WebSocketGameApi } from './communication/webSocketServerApi';
import { PlayerState } from './redux/game';

interface Props {
  players: PlayerState[];
  playedTurns: ValidatedTurn[];
  cardsInHand: Card[];
  playCards: (cards: Card[]) => void;
  playerState: PlayerState;
  turnTimeoutInMillis: number | undefined;
}

function Game({
  players, playedTurns, cardsInHand, playCards, playerState, turnTimeoutInMillis,
}: Props) {
  return (
    <div>
      <Players players={players} />
      <Stack playedTurns={playedTurns} />
      <Hand
        isServerRequestingCards={playerState.isServerRequestingCards}
        turnTimeoutInMillis={turnTimeoutInMillis}
        cardsInHand={cardsInHand}
        playCards={playCards}
      />
    </div>
  );
}

const mapStateToProps = (state: State, ownProps: { serverApi: WebSocketGameApi }) => ({
  cardsInHand: state.game.cardsInHand,
  players: state.game.players,
  playedTurns: state.game.validatedTurns,
  playerState: state.game.players.find((player) => player.id === state.game.playerId) as PlayerState,
  playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
  turnTimeoutInMillis: state.game.turnTimeoutInMillis,
});

export default connect(mapStateToProps)(Game);
