import React from 'react';
import styled from 'styled-components';
import { InvalidTurn, ValidatedTurn, ValidTurn } from 'agurk-shared';
import PlayingCard, { generateCardKey, PlayingCardPlaceholder } from './PlayingCard';
import { ErrorBadge } from '../styled/Badge';
import { Theme } from '../styled/theme';

interface Props {
  turn: ValidatedTurn;
}

const CardFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MutedCardFlex = styled(CardFlex)`
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

export function generateTurnKey(turn: ValidatedTurn): string {
  return turn.playerId + turn.valid;
}

function createCardItems(turn: ValidatedTurn) {
  return turn.cards.map((card) => (
    <CardBox key={generateCardKey(card)}>
      <PlayingCard card={card} />
    </CardBox>
  ));
}

function Valid({ turn }: { turn: ValidTurn }) {
  const cardItems = createCardItems(turn);

  return (
    <TurnBox>
      <CardFlex>
        { cardItems }
      </CardFlex>
      <Centered><span>{turn.playerId}</span></Centered>
    </TurnBox>
  );
}

function Invalid({ turn }: { turn: InvalidTurn }) {
  const cardItems = createCardItems(turn);

  return (
    <TurnBox>
      <MutedCardFlex>
        { cardItems.length === 0
          ? <PlayingCardPlaceholder />
          : cardItems }
      </MutedCardFlex>
      <Centered><span>{turn.playerId}</span></Centered>
      <Centered>
        <ErrorBadge>{turn.invalidReason}</ErrorBadge>
      </Centered>
    </TurnBox>
  );
}

export default function Turn({ turn }: Props) {
  return turn.valid
    ? <Valid turn={turn} />
    : <Invalid turn={turn} />;
}
