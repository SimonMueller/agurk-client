import React from 'react';
import { Card as CardData } from 'agurk-shared';
import Card, { generateKey } from './Card';

interface Selectable {
  isSelected: boolean;
}

export type SelectableCard = Selectable & CardData;

interface CardListProps {
  cards: SelectableCard[];
  handleSelect: (card: CardData) => void;
}

export default function CardList({ cards, handleSelect }: CardListProps) {
  const cardItems = cards.map((card) => (
    <li key={generateKey(card)}>
      <input type="checkbox" checked={card.isSelected} onChange={() => handleSelect(card)} />
      <Card card={card} />
    </li>
  ));

  return (
    <ul>
      { cardItems }
    </ul>
  );
}
