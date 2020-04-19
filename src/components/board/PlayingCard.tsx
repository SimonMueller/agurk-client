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
  sizeAccordingTo?: 'width' | 'height';
}

interface JokerCardProps {
  card: JokerCardData;
}

interface SuitCardProps {
  card: SuitCardData;
}

interface StyledCardProps {
  selected?: boolean;
  width: string;
  height: string;
  theme: Theme;
}

const Card = styled(Paper)`
  border-color: ${({ selected, theme }: StyledCardProps) => (
    selected ? `${theme.palette.primary.main}` : 'transparent'
  )};
  border-width: 2px;
  border-style: solid;
  border-radius: 6%;
  height: ${({ height }: StyledCardProps) => (height)};
  width: ${({ width }: StyledCardProps) => (width)};
  margin: auto;
`;

const Image = styled.img`
  height: 100%;
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

function getSizesAccordingTo(value: 'width' | 'height') {
  return value === 'width' ? ['100%', 'max-content'] : ['max-content', '100%'];
}

export function PlayingCardPlaceholder({ sizeAccordingTo = 'width' }: Pick<PlayingCardProps, 'sizeAccordingTo'>) {
  const cardSrcFile = '/agurk-client/images/placeholder.svg';
  const [width, height] = getSizesAccordingTo(sizeAccordingTo);
  return (
    <Card elevation={6} width={width} height={height}>
      <Image src={cardSrcFile} alt="card placeholder" />
    </Card>
  );
}

export default function PlayingCard({ card, isSelected = false, sizeAccordingTo = 'width' }: PlayingCardProps) {
  const [width, height] = getSizesAccordingTo(sizeAccordingTo);
  return (
    <Card elevation={6} selected={isSelected} width={width} height={height}>
      { card.kind === JOKER_CARD_KIND
        ? <JokerCard card={card} />
        : <SuitCard card={card} /> }
    </Card>
  );
}
