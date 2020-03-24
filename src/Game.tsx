import React from 'react';
import { connect } from 'react-redux';
import { Card, ValidatedTurn } from 'agurk-shared';
import { Action } from 'redux';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';
import { PlayerState, GameState } from './redux/reducers';
import { WebSocketGameApi } from './communication/webSocketServerApi';

interface Props {
  players: PlayerState[];
  playedTurns: ValidatedTurn[];
  cardsInHand: Card[];
  playCards: (cards: Card[]) => void;
  playerState: PlayerState;
}

function Game({
  players, playedTurns, cardsInHand, playCards, playerState,
}: Props) {
  return (
    <div>
      <Players players={players} />
      <Stack playedTurns={playedTurns} />
      <Hand
        isServerRequestingCards={playerState.isServerRequestingCards}
        cardsInHand={cardsInHand}
        playCards={playCards}
      />
    </div>
  );
}

const mapStateToProps = (state: GameState) => ({
  cardsInHand: state.game.cardsInHand,
  players: state.game.players,
  playedTurns: state.game.validatedTurns,
  playerState: state.game.players.find((player) => player.id === state.authentication.subject) as PlayerState,
});

const mapDispatchToProps = (dispatch: (action: Action) => void, ownProps: { serverApi: WebSocketGameApi }) => ({
  playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
