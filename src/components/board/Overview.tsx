import React from 'react';
import styled from 'styled-components';
import { GameStage, PlayerState } from '../../redux/game.reducer';
import TextSecondTimer from '../TextSecondTimer';

interface Props {
  isServerRequestingCards: boolean;
  players: PlayerState[];
  turnRetriesLeft: number;
  turnTimeoutInSeconds: number | undefined;
  gameStage: GameStage;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

const OverviewParagraph = styled.p`
  margin: 0;
  font-weight: bold;
`;

const OverviewTitle = styled.h2`
  margin-bottom: 0;
`;

function YourTurn({ turnTimeoutInSeconds, turnRetriesLeft }: Pick<Props, 'turnTimeoutInSeconds' | 'turnRetriesLeft'>) {
  return (
    <Flex>
      <OverviewTitle>
        Your turn
        { ' ' }
      </OverviewTitle>
      { turnTimeoutInSeconds && (
        <OverviewParagraph>
          <TextSecondTimer timeoutInSeconds={turnTimeoutInSeconds} />
          { ' ' }
          seconds and
          { ' ' }
          { turnRetriesLeft }
          { ' ' }
          { turnRetriesLeft === 1
            ? 'retry left'
            : 'retries left' }
        </OverviewParagraph>
      ) }
    </Flex>
  );
}

function TheirTurn({ players }: Pick<Props, 'players'>) {
  const currentTurnPlayer = players.find((player) => player.isServerRequestingCards);
  return (
    <OverviewTitle>
      { currentTurnPlayer?.id }
      { '\'s turn' }
    </OverviewTitle>
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
    return <h2>No cycle winner</h2>;
  }

  return (
    <OverviewTitle>
      { highestCyclePlayerIds.join(' and ') }
      { ' ' }
      { highestCyclePlayerIds.length === 1
        ? 'wins the cycle'
        : 'win the cycle' }
    </OverviewTitle>
  );
}

function RoundWinner({ players }: Pick<Props, 'players'>) {
  const roundWinner = players.find((player) => player.isRoundWinner);
  return (
    <OverviewTitle>
      { roundWinner
        ? `${roundWinner.id} wins the round`
        : 'No round winner' }
    </OverviewTitle>
  );
}

function GameWinner({ players }: Pick<Props, 'players'>) {
  const gameWinner = players.find((player) => player.isGameWinner);
  return (
    <OverviewTitle>
      { gameWinner
        ? `${gameWinner.id} wins the game 🎉🎉`
        : 'No game winner' }
    </OverviewTitle>
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
