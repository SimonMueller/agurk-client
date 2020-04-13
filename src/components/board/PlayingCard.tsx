import React from 'react';
import {
  Card as CardData, JOKER_CARD_KIND, JokerCard as JokerCardData, SuitCard as SuitCardData,
} from 'agurk-shared';
import styled from 'styled-components';
import { Theme } from '../styled/theme';

interface PlayingCardProps {
  card: CardData;
  isSelected?: boolean;
}

interface JokerCardProps {
  card: JokerCardData;
}

interface SuitCardProps {
  card: SuitCardData;
}

const Card = styled.div`
  border-color: ${({ isSelected, theme }: { isSelected: boolean, theme: Theme }) => (
    isSelected ? `${theme.colors.primary}` : 'white'
  )};
  border-width: 2px;
  border-style: solid;
  border-radius: 6%;
  width: 4.75em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export function generateCardKey(card: CardData): string {
  if (card.kind === JOKER_CARD_KIND) {
    return card.color + card.rank;
  }
  return card.suit + card.rank;
}

function JokerCard({ card }: JokerCardProps) {
  const lowercaseColor = card.color.toLowerCase();
  const cardSrcFile = '/agurk-client/images/joker.svg';
  return <img src={cardSrcFile} alt={`joker card of color ${lowercaseColor}`} />;
}

function SuitCard({ card }: SuitCardProps) {
  const lowercaseSuit = card.suit.toLowerCase();
  const cardSrcFile = `/agurk-client/images/${card.rank}-${lowercaseSuit}.svg`;
  return <img src={cardSrcFile} alt={`card of rank ${card.rank} and suit ${lowercaseSuit}`} />;
}

export function PlayingCardPlaceholder() {
  const cardSrcFile = '/agurk-client/images/placeholder.svg';
  return (
    <Card isSelected={false}>
      <img src={cardSrcFile} alt="card placeholder" />
    </Card>
  );
}

export default function PlayingCard({ card, isSelected = false }: PlayingCardProps) {
  return (
    <Card isSelected={isSelected}>
      { card.kind === JOKER_CARD_KIND
        ? <JokerCard card={card} />
        : <SuitCard card={card} /> }
    </Card>
  );
}
