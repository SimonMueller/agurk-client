import React from 'react';
import {
  Card as CardData, JokerCard as JokerCardData, SuitCard as SuitCardData,
} from 'agurk-shared';

interface CardProps {
  card: CardData;
}

interface JokerCardProps {
  card: JokerCardData;
}

interface SuitCardProps {
  card: SuitCardData;
}

function JokerCard({ card }: JokerCardProps) {
  return (
    <div>
      { card.kind }
      { ' ' }
      { card.color }
    </div>
  );
}

function SuitCard({ card }: SuitCardProps) {
  return (
    <div>
      { card.suit }
      {' '}
      { card.rank }
    </div>
  );
}

export default function Card({ card }: CardProps) {
  return (
    card.kind === 'JOKER'
      ? <JokerCard card={card} />
      : <SuitCard card={card} />
  );
}
