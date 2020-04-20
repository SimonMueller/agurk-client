import React from 'react';
import { connect } from 'react-redux';
import { Card, ValidatedTurn } from 'agurk-shared';
import styled from 'styled-components';
import { Action, Dispatch } from 'redux';
import { Box, Button } from '@material-ui/core';
import Hand from './Hand';
import PlayerStateList from './PlayerStateList';
import { State } from '../../redux/root.reducer';
import { WebSocketGameApi } from '../../communication/webSocketServerApi';
import { resetGame } from '../../redux/game.action';
import { GameStage, PlayerState } from '../../redux/game.reducer';
import Overview from './Overview';
import { setIsInGame } from '../../redux/lobby.action';
import PlayedTurns from './PlayedTurns';
import { Theme } from '../../theme';

interface Props {
  state: {
    players: PlayerState[]
    playedTurns: ValidatedTurn[];
    cardsInHand: Card[];
    playerState: PlayerState | undefined;
    stage: GameStage;
    isLastCycleOfRound: boolean;
    turnTimeoutInSeconds: number | undefined;
    turnRetriesLeft: number;
  };
  playCards: (cards: Card[]) => void;
  closeGame: () => void;
}

const Grid = styled.div`
  display: grid;
  row-gap: ${({ theme }: { theme: Theme }) => (theme.spacing(2))}px;
  margin-bottom: ${({ theme }: { theme: Theme }) => (theme.spacing(2))}px;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.md)}px) {
    grid-template-columns: 30% 65%;
    grid-template-rows: auto auto auto;
    column-gap: 5%;
    row-gap: 2em;
  }
`;

const OverviewBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.md)}px) {
    grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: span 1;
  }
`;

const PlayedTurnsBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.md)}px) {
    grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 2;
    grid-row-end: span 1;
  }
`;

const HandBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 3;
  grid-row-end: span 1;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.md)}px) {
    grid-column-start: 2;
    grid-column-end: span 1;
    grid-row-start: 3;
    grid-row-end: span 1;
  }
`;

const PlayersBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 4;
  grid-row-end: span 1;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.md)}px) {
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 1;
    grid-row-end: span 2;
  }
`;

const NavigationBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 6;
  grid-row-end: span 1;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.md)}px) {
    grid-column-start: 1;
    grid-column-end: span 1;
    grid-row-start: 3;
    grid-row-end: span 1;
  }
`;

function Board({ state, playCards, closeGame }: Props) {
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
      <PlayedTurnsBox>
        <PlayedTurns playedTurns={state.playedTurns} isLastCycleOfRound={state.isLastCycleOfRound} />
      </PlayedTurnsBox>
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
      { state.stage === GameStage.END
        && (
        <NavigationBox>
          <Button fullWidth variant="contained" color="primary" onClick={closeGame}>
            Return to lobby
          </Button>
        </NavigationBox>
        )}
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
    isLastCycleOfRound: state.game.isLastCycleOfRound,
    turnTimeoutInSeconds: state.game.turnTimeoutInMillis ? state.game.turnTimeoutInMillis / 1000 : undefined,
    turnRetriesLeft: state.game.turnRetriesLeft,
  },
  playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
});


const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  closeGame: () => {
    resetGame();
    dispatch(setIsInGame(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
