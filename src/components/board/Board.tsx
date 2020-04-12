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
import { setIsInGame } from '../../redux/lobby.action';

interface Props {
  state: {
    players: PlayerState[]
    playedTurns: ValidatedTurn[];
    cardsInHand: Card[];
    playerState: PlayerState | undefined;
    stage: GameStage;
    turnTimeoutInSeconds: number | undefined;
    turnRetriesLeft: number;
    protocolEntries: ProtocolEntry[];
  };
  playCards: (cards: Card[]) => void;
  reset: () => void;
  cancelGame: () => void;
}

const minWidthBreakpoint = '800px';

const Grid = styled.div`
  display: grid;
  row-gap: 1em;

  @media(min-width: ${minWidthBreakpoint}) {
    grid-template-columns: 30% 65%;
    grid-template-rows: auto auto auto;
    column-gap: 5%;
    row-gap: 2em;
  }
`;

const OverviewBox = styled.div`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;

  @media(min-width:  ${minWidthBreakpoint}) {
    grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: span 1;
  }
`;

const StackBox = styled.div`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;

  @media(min-width: ${minWidthBreakpoint}) {
    grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 2;
    grid-row-end: span 1;
  }
`;

const HandBox = styled.div`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 3;
  grid-row-end: span 1;

  @media(min-width: ${minWidthBreakpoint}) {
    grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 3;
    grid-row-end: span 1;
  }
`;

const PlayersBox = styled.div`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 4;
  grid-row-end: span 1;

  @media(min-width: ${minWidthBreakpoint}) {
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: span 2;
  }
`;

const ProtocolBox = styled.div`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 5;
  grid-row-end: span 1;

  @media(min-width: ${minWidthBreakpoint}) {
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 3;
    grid-row-end: span 1;
  }
`;

function Board({ state, playCards, reset }: Props) {
  useEffect(() => reset, [reset]);

  if (!state.playerState) {
    return <p>Loading game...</p>;
  }

  return (
    <Grid>
      <OverviewBox>
        <Overview
          gameStage={state.stage}
          isServerRequestingCards={state.playerState.isServerRequestingCards}
          players={state.players}
          turnTimeoutInSeconds={state.turnTimeoutInSeconds}
          turnRetriesLeft={state.turnRetriesLeft}
        />
      </OverviewBox>
      <StackBox>
        <Stack playedTurns={state.playedTurns} />
      </StackBox>
      <HandBox>
        <Hand
          isServerRequestingCards={state.playerState.isServerRequestingCards}
          cardsInHand={state.cardsInHand}
          playCards={playCards}
        />
      </HandBox>
      <PlayersBox>
        <PlayerStateList players={state.players} />
      </PlayersBox>
      <ProtocolBox>
        <Protocol entries={state.protocolEntries} />
      </ProtocolBox>
    </Grid>
  );
}

const mapStateToProps = (state: State, ownProps: { serverApi: WebSocketGameApi }) => ({
  state: {
    cardsInHand: state.game.cardsInHand,
    players: state.game.players,
    stage: state.game.stage,
    playedTurns: state.game.validatedTurns,
    playerState: state.game.players.find((player) => player.id === state.game.playerId),
    playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
    turnTimeoutInSeconds: state.game.turnTimeoutInMillis ? state.game.turnTimeoutInMillis / 1000 : undefined,
    turnRetriesLeft: state.game.turnRetriesLeft,
    protocolEntries: state.game.protocol,
  },
  playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
});


const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  reset: () => dispatch(resetGame()),
  cancelGame: () => dispatch(setIsInGame(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
