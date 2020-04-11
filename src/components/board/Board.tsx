import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, ValidatedTurn } from 'agurk-shared';
import styled from 'styled-components';
import { Action, Dispatch } from 'redux';
import Hand from './Hand';
import PlayerStateList from './PlayerStateList';
import Stack from './Stack';
import { State } from '../../redux';
import { WebSocketGameApi } from '../../communication/webSocketServerApi';
import { resetGame } from '../../redux/game.action';
import { PlayerState, ProtocolEntry, GameStage } from '../../redux/game.reducer';
import Protocol from './Protocol';
import Overview from './Overview';

interface Props {
  state: {
    players: PlayerState[]
    playedTurns: ValidatedTurn[];
    cardsInHand: Card[];
    playerState: PlayerState;
    stage: GameStage;
    turnTimeoutInSeconds: number;
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

function Board({ state, playCards, reset }: Props) {
  useEffect(() => reset, [reset]);

  return (
    <div>
      <Overview
        gameStage={state.stage}
        isServerRequestingCards={state.playerState.isServerRequestingCards}
        players={state.players}
        turnTimeoutInSeconds={state.turnTimeoutInSeconds}
        turnRetriesLeft={state.turnRetriesLeft}
      />
      <Stack playedTurns={state.playedTurns} />
      <Hand
        isServerRequestingCards={state.playerState.isServerRequestingCards}
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
    stage: state.game.stage,
    playedTurns: state.game.validatedTurns,
    playerState: state.game.players.find((player) => player.id === state.game.playerId) as PlayerState,
    playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
    turnTimeoutInSeconds: state.game.turnTimeoutInMillis as number / 1000,
    turnRetriesLeft: state.game.turnRetriesLeft,
    protocolEntries: state.game.protocol,
  },
  playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
});


const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  reset: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
