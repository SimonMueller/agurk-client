import React from 'react';
import {
  Card as CardData, JOKER_CARD_KIND, JokerCard as JokerCardData, SuitCard as SuitCardData,
} from 'agurk-shared';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { Theme } from '../../theme';

interface PlayingCardProps {
  card: CardData;
  isSelected?: boolean;
  size?: 'small' | 'normal';
}

interface JokerCardProps {
  card: JokerCardData;
}

interface SuitCardProps {
  card: SuitCardData;
}

interface StyledCardProps {
  selected?: boolean;
  size: 'small' | 'normal';
  theme: Theme;
}

const Card = styled(Paper)`
  border-color: ${({ selected, theme }: StyledCardProps) => (
    selected ? `${theme.palette.primary.main}` : 'transparent'
  )};
  border-width: 2px;
  border-style: solid;
  border-radius: 6%;
  margin: auto;
  max-width: ${({ size }: StyledCardProps) => (size === 'small' ? '4rem' : '6rem')};
  min-width: 4rem;
`;

const Image = styled.img`
  width: 100%;
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
  return <Image src={cardSrcFile} alt={`joker card of color ${lowercaseColor}`} />;
}

function SuitCard({ card }: SuitCardProps) {
  const lowercaseSuit = card.suit.toLowerCase();
  const cardSrcFile = `/agurk-client/images/${card.rank}-${lowercaseSuit}.svg`;
  return <Image src={cardSrcFile} alt={`card of rank ${card.rank} and suit ${lowercaseSuit}`} />;
}

export function PlayingCardPlaceholder({ size = 'normal' }: Pick<PlayingCardProps, 'size'>) {
  const cardSrcFile = '/agurk-client/images/placeholder.svg';
  return (
    <Card elevation={6} size={size}>
      <Image src={cardSrcFile} alt="card placeholder" />
    </Card>
  );
}

export default function PlayingCard({ card, isSelected = false, size = 'normal' }: PlayingCardProps) {
  return (
    <Card elevation={6} selected={isSelected} size={size}>
      { card.kind === JOKER_CARD_KIND
        ? <JokerCard card={card} />
        : <SuitCard card={card} /> }
    </Card>
  );
}
