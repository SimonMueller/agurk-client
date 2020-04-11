import React from 'react';
import styled from 'styled-components';
import { GameStage, PlayerState } from '../../redux/game.reducer';
import TextSecondTimer from '../TextSecondTimer';

interface Props {
  isServerRequestingCards: boolean;
  players: PlayerState[];
  turnRetriesLeft: number;
  turnTimeoutInSeconds: number;
  gameStage: GameStage;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

function YourTurn({ turnTimeoutInSeconds, turnRetriesLeft }: Pick<Props, 'turnTimeoutInSeconds' | 'turnRetriesLeft'>) {
  return (
    <Flex>
      <h2>
        Your turn
        { ' ' }
      </h2>
      <p>
        <b>
          <TextSecondTimer timeoutInSeconds={turnTimeoutInSeconds} />
          { ' ' }
          seconds and
          { ' ' }
          { turnRetriesLeft }
          { ' ' }
          { turnRetriesLeft === 1
            ? 'retry left'
            : 'retries left' }
        </b>
      </p>
    </Flex>
  );
}

function TheirTurn({ players }: Pick<Props, 'players'>) {
  const currentTurnPlayer = players.find((player) => player.isServerRequestingCards);
  return (
    <h2>
      { currentTurnPlayer?.id }
      { '\'s turn' }
    </h2>
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
  return (
    <h2>
      { highestCyclePlayerIds.join(', ') }
      { ' ' }
      played the highest cards in cycle
    </h2>
  );
}

function RoundWinner({ players }: Pick<Props, 'players'>) {
  const roundWinner = players.find((player) => player.isRoundWinner);
  return (
    <h2>
      { roundWinner
        ? `${roundWinner.id} wins the game`
        : 'No round winner' }
    </h2>
  );
}

function GameWinner({ players }: Pick<Props, 'players'>) {
  const gameWinner = players.find((player) => player.isGameWinner);
  return (
    <h2>
      { gameWinner
        ? `${gameWinner.id} wins the game`
        : 'No game winner' }
    </h2>
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
