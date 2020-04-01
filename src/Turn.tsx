import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InvalidTurn, ValidatedTurn, ValidTurn } from 'agurk-shared';
import PlayingCard, { generateCardKey, PlayingCardPlaceholder } from './PlayingCard';
import Badge from './styled/Badge';
import { Theme } from './styled/theme';

interface Props {
  turn: ValidatedTurn;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MutedFlex = styled(Flex)`
  color: ${({ theme }: { theme: Theme }) => (theme.colors.muted)};
`;

const CardBox = styled.div`
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

const Centered = styled.div`
  text-align: center;
`;

const TurnBox = styled.div`
  margin-right: 1em;
  margin-bottom: 1em;
`;

export const ErrorBadge = styled(Badge)`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.error)};
  color: white;
`;

export function generateTurnKey(turn: ValidatedTurn): string {
  return turn.playerId + turn.valid;
}

function Valid({ turn }: { turn: ValidTurn }) {
  const cardItems = turn.cards.map((card) => (
    <CardBox key={generateCardKey(card)}>
      <PlayingCard card={card} />
    </CardBox>
  ));

  return (
    <TurnBox>
      <Flex>
        { cardItems }
      </Flex>
      <Centered><span>{turn.playerId}</span></Centered>
    </TurnBox>
  );
}

function InvalidHiddenAfterTimeout({ turn }: { turn: InvalidTurn }) {
  const SHOW_INVALID_TURN_TIMEOUT = 2000;
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const cardItems = turn.cards.map((card) => (
    <CardBox key={generateCardKey(card)}>
      <PlayingCard key={generateCardKey(card)} card={card} />
    </CardBox>
  ));

  useEffect(() => {
    const timeout: number = setTimeout(() => {
      setIsVisible(false);
    }, SHOW_INVALID_TURN_TIMEOUT);
    return () => clearTimeout(timeout);
  });

  return isVisible
    ? (
      <TurnBox>
        <MutedFlex>
          { cardItems.length === 0
            ? <PlayingCardPlaceholder />
            : cardItems }
        </MutedFlex>
        <Centered><span>{turn.playerId}</span></Centered>
        <Centered>
          <ErrorBadge>{turn.invalidReason}</ErrorBadge>
        </Centered>
      </TurnBox>
    )
    : null;
}

export default function Turn({ turn }: Props) {
  return turn.valid
    ? <Valid turn={turn} />
    : <InvalidHiddenAfterTimeout turn={turn} />;
}
