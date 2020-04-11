import React from 'react';
import {
  Card as CardData, JOKER_CARD_KIND, JokerCard as JokerCardData, SuitCard as SuitCardData,
} from 'agurk-shared';
import styled from 'styled-components';
import { Theme } from '../../styled/theme';

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
  font-size: max(2.5em, 2.5vmax);
  margin: 0;
`;

const CardAttributeText = styled.p`
  font-weight: bold;
  flex-basis: 100%;
  text-align: center;
  display: block;
  font-size: max(0.6em, 0.6vmax);
  margin: 0;
`;

/*
  width / height ratio = 1 / 1.5
*/
const Card = styled.div`
  color: ${({ isSelected, theme }: { isSelected: boolean, theme: Theme }) => (
    isSelected ? `${theme.colors.primary}` : ` ${theme.colors.text}`
  )};
  border: 1px solid;
  border-radius: 4px;
  width: max(4em, 4vmax);
  height: max(6em, 6vmax);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const CardPlaceholder = styled(Card)`
  border: ${({ theme }: { theme: Theme }) => (`1px dotted ${theme.colors.text}`)};
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

export function PlayingCardPlaceholder() {
  return (
    <CardPlaceholder isSelected={false} />
  );
}
