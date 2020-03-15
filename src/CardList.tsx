import React from 'react';
import { Card as CardData } from 'agurk-shared';
import Card, { generateKey } from './Card';

interface CardListProps {
  cards: CardData[];
}

export default function CardList({ cards }: CardListProps) {
  const cardItems = cards.map((card) => (
    <li key={generateKey(card)}>
      <Card card={card} />
    </li>
  ));

  return (
    <ul>
      { cardItems }
    </ul>
  );
}
