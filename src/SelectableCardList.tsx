import React from 'react';
import { Card as CardData } from 'agurk-shared';
import Card, { generateKey } from './Card';

interface Selectable {
  isSelected: boolean;
}

export type SelectableCard = Selectable & CardData;

interface Props {
  cards: SelectableCard[];
  handleSelect: (card: CardData) => void;
}

export default function CardList({ cards, handleSelect }: Props) {
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
