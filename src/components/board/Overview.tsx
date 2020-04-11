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

const Container = styled.div`
  margin: 2em 0;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

const OverviewHeading = styled.h2`
  margin: 0;
`;

const OverviewParagraph = styled.p`
  margin: 0;
  font-weight: bold;
`;

function YourTurn({ turnTimeoutInSeconds, turnRetriesLeft }: Pick<Props, 'turnTimeoutInSeconds' | 'turnRetriesLeft'>) {
  return (
    <Flex>
      <OverviewHeading>
        Your turn
        { ' ' }
      </OverviewHeading>
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
    <OverviewHeading>
      { currentTurnPlayer?.id }
      { '\'s turn' }
    </OverviewHeading>
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
    <OverviewHeading>
      { highestCyclePlayerIds.join(', ') }
      { ' ' }
      { highestCyclePlayerIds.length === 1
        ? 'wins the cycle'
        : 'win the cycle' }
    </OverviewHeading>
  );
}

function RoundWinner({ players }: Pick<Props, 'players'>) {
  const roundWinner = players.find((player) => player.isRoundWinner);
  return (
    <OverviewHeading>
      { roundWinner
        ? `${roundWinner.id} wins the round`
        : 'No round winner' }
    </OverviewHeading>
  );
}

function GameWinner({ players }: Pick<Props, 'players'>) {
  const gameWinner = players.find((player) => player.isGameWinner);
  return (
    <OverviewHeading>
      { gameWinner
        ? `${gameWinner.id} wins the game`
        : 'No game winner' }
    </OverviewHeading>
  );
}

export default function Overview({
  isServerRequestingCards, players, turnTimeoutInSeconds, turnRetriesLeft, gameStage,
}: Props) {
  switch (gameStage) {
    case GameStage.IN_CYCLE:
      return (
        <Container>
          <TurnIndicator
            isServerRequestingCards={isServerRequestingCards}
            players={players}
            turnRetriesLeft={turnRetriesLeft}
            turnTimeoutInSeconds={turnTimeoutInSeconds}
          />
        </Container>
      );
    case GameStage.BETWEEN_CYCLES:
      return (
        <Container>
          <HighestCyclePlayers players={players} />
        </Container>
      );
    case GameStage.BETWEEN_ROUNDS:
      return (
        <Container>
          <RoundWinner players={players} />
        </Container>
      );
    case GameStage.END:
      return (
        <Container>
          <GameWinner players={players} />
        </Container>
      );
    default:
      return null;
  }
}
