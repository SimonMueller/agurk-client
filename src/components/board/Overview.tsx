import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { GameStage, PlayerState } from '../../redux/game.reducer';
import TextSecondTimer from '../TextSecondTimer';

interface Props {
  isServerRequestingCards: boolean;
  players: PlayerState[];
  turnRetriesLeft: number;
  turnTimeoutInSeconds: number | undefined;
  gameStage: GameStage;
}

const BoldTypography = styled(Typography)`
  font-weight: bold;
`;

function YourTurn({ turnTimeoutInSeconds, turnRetriesLeft }: Pick<Props, 'turnTimeoutInSeconds' | 'turnRetriesLeft'>) {
  return (
    <Grid container justify="space-between" alignItems="baseline">
      <Typography variant="h2">
        Your turn
        { ' ' }
      </Typography>
      { turnTimeoutInSeconds && (
        <BoldTypography variant="subtitle1">
          <TextSecondTimer timeoutInSeconds={turnTimeoutInSeconds} />
          { ' ' }
          seconds and
          { ' ' }
          { turnRetriesLeft }
          { ' ' }
          { turnRetriesLeft === 1
            ? 'retry left'
            : 'retries left' }
        </BoldTypography>
      ) }
    </Grid>
  );
}

function TheirTurn({ players }: Pick<Props, 'players'>) {
  const currentTurnPlayer = players.find((player) => player.isServerRequestingCards);
  return (
    <Typography variant="h2">
      { currentTurnPlayer?.id }
      { '\'s turn' }
    </Typography>
  );
}

function TurnIndicator({
  isServerRequestingCards, players, turnTimeoutInSeconds, turnRetriesLeft,
}: Pick<Props, 'turnTimeoutInSeconds' | 'turnRetriesLeft' | 'players' | 'isServerRequestingCards'>) {
  return (isServerRequestingCards
    ? <YourTurn turnTimeoutInSeconds={turnTimeoutInSeconds} turnRetriesLeft={turnRetriesLeft} />
    : <TheirTurn players={players} />
  );
}

function HighestCyclePlayers({ players }: Pick<Props, 'players'>) {
  const highestCyclePlayerIds = players
    .filter((player) => player.isCycleHighestTurnPlayer)
    .map((player) => player.id);

  if (highestCyclePlayerIds.length === 0) {
    return <Typography variant="h2">No cycle winner</Typography>;
  }

  return (
    <Typography variant="h2">
      { highestCyclePlayerIds.join(' and ') }
      { ' ' }
      { highestCyclePlayerIds.length === 1
        ? 'wins the cycle'
        : 'win the cycle' }
    </Typography>
  );
}

function RoundWinner({ players }: Pick<Props, 'players'>) {
  const roundWinner = players.find((player) => player.isRoundWinner);
  return (
    <Typography variant="h2">
      { roundWinner
        ? `${roundWinner.id} wins the round`
        : 'No round winner' }
    </Typography>
  );
}

function GameWinner({ players }: Pick<Props, 'players'>) {
  const gameWinner = players.find((player) => player.isGameWinner);
  return (
    <Typography variant="h2">
      { gameWinner
        ? `${gameWinner.id} wins the game 🎉🎉`
        : 'No game winner' }
    </Typography>
  );
}

export default function Overview({
  isServerRequestingCards, players, turnTimeoutInSeconds, turnRetriesLeft, gameStage,
}: Props) {
  switch (gameStage) {
    case GameStage.IN_CYCLE:
      return (
        <TurnIndicator
          isServerRequestingCards={isServerRequestingCards}
          players={players}
          turnRetriesLeft={turnRetriesLeft}
          turnTimeoutInSeconds={turnTimeoutInSeconds}
        />
      );
    case GameStage.BETWEEN_CYCLES:
      return (
        <HighestCyclePlayers players={players} />
      );
    case GameStage.BETWEEN_ROUNDS:
      return (
        <RoundWinner players={players} />
      );
    case GameStage.END:
      return (
        <GameWinner players={players} />
      );
    default:
      return null;
  }
}
