import React from 'react';
import {
  Card as CardData, JokerCard as JokerCardData, SuitCard as SuitCardData,
} from 'agurk-shared';

interface CardProps {
  card: CardData
}

interface JokerCardProps {
  card: JokerCardData
}

interface SuitCardProps {
  card: SuitCardData
}

const JokerCard = ({ card }: JokerCardProps) => (
  <div>
    { card.kind }
    {' '}
    { card.color }
  </div>
);

const SuitCard = ({ card }: SuitCardProps) => (
  <div>
    { card.suit }
    {' '}
    { card.rank }
  </div>
);

const Card = ({ card }: CardProps) => (
  card.kind === 'JOKER'
    ? <JokerCard card={card} />
    : <SuitCard card={card} />
);

export default Card;
