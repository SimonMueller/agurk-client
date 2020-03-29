import React from 'react';
import {
  Card as CardData, JOKER_CARD_KIND, JokerCard as JokerCardData, SuitCard as SuitCardData,
} from 'agurk-shared';
import styled from 'styled-components';
import { Theme } from './styled/theme';

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

const CardRankText = styled.p`
  font-weight: bold;
  flex-basis: 100%;
  text-align: center;
  display: block;
  font-size: 3em;
  margin: 0;
`;

const CardAttributeText = styled.p`
  font-weight: bold;
  flex-basis: 100%;
  text-align: center;
  display: block;
  font-size: 0.7em;
  margin: 0;
`;

const Card = styled.div`
  outline: ${({ isSelected, theme }: { isSelected: boolean, theme: Theme }) => (
    isSelected ? `2px solid ${theme.colors.accent}` : `1px solid ${theme.colors.text}`
  )};
  width: 4.5em;
  height: 7em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &:hover {
    outline: 2px solid${({ theme }: { theme: Theme }) => (theme.colors.accent)};
  }
`;

export function generateCardKey(card: CardData): string {
  if (card.kind === JOKER_CARD_KIND) {
    return card.color + card.rank;
  }
  return card.suit + card.rank;
}

function JokerCard({ card }: JokerCardProps) {
  return (
    <>
      <CardRankText>
        J
      </CardRankText>
      <CardAttributeText>
        { card.color }
      </CardAttributeText>
    </>
  );
}

function SuitCard({ card }: SuitCardProps) {
  return (
    <>
      <CardRankText>
        { card.rank }
      </CardRankText>
      <CardAttributeText>
        { card.suit }
      </CardAttributeText>
    </>
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
