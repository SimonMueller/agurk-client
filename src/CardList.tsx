import React from 'react';
import { Card as CardData } from 'agurk-shared';
import Card from './Card';

interface CardListProps {
  cards: CardData[]
}

const CardList = ({ cards }: CardListProps) => {
  const cardItems = cards.map((card) => <li><Card card={card} /></li>);

  return (
    <ul>
      { cardItems }
    </ul>
  );
};

export default CardList;
