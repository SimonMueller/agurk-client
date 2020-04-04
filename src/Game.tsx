import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, ValidatedTurn } from 'agurk-shared';
import styled from 'styled-components';
import { Action, Dispatch } from 'redux';
import Hand from './Hand';
import PlayerStateList from './PlayerStateList';
import Stack from './Stack';
import { State } from './redux';
import { WebSocketGameApi } from './communication/webSocketServerApi';
import { resetGame } from './redux/game.action';
import { PlayerState, ProtocolEntry } from './redux/game.reducer';
import Protocol from './Protocol';

interface Props {
  state: {
    players: PlayerState[]
    playedTurns: ValidatedTurn[];
    cardsInHand: Card[];
    playerState: PlayerState;
    turnTimeoutInMillis: number | undefined;
    turnRetriesLeft: number;
    protocolEntries: ProtocolEntry[];
  };
  playCards: (cards: Card[]) => void;
  reset: () => void;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 300px;
`;

function Game({ state, playCards, reset }: Props) {
  useEffect(() => reset, [reset]);

  return (
    <div>
      <Stack playedTurns={state.playedTurns} />
      <Hand
        isServerRequestingCards={state.playerState.isServerRequestingCards}
        turnTimeoutInMillis={state.turnTimeoutInMillis}
        turnRetriesLeft={state.turnRetriesLeft}
        cardsInHand={state.cardsInHand}
        playCards={playCards}
      />
      <Flex>
        <Box>
          <PlayerStateList players={state.players} />
        </Box>
        <Box>
          <Protocol entries={state.protocolEntries} />
        </Box>
      </Flex>
    </div>
  );
}

const mapStateToProps = (state: State, ownProps: { serverApi: WebSocketGameApi }) => ({
  state: {
    cardsInHand: state.game.cardsInHand,
    players: state.game.players,
    playedTurns: state.game.validatedTurns,
    playerState: state.game.players.find((player) => player.id === state.game.playerId) as PlayerState,
    playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
    turnTimeoutInMillis: state.game.turnTimeoutInMillis,
    turnRetriesLeft: state.game.turnRetriesLeft,
    protocolEntries: state.game.protocol,
  },
  playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
});


const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  reset: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
