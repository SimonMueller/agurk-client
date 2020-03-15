import React, { useEffect, useState } from 'react';
import { Card, cardEquals } from 'agurk-shared';
import SelectableCardList, { SelectableCard } from './SelectableCardList';

interface HandProps {
  playCards: (cards: Card[]) => void;
  cardsInHand: Card[];
}

interface PlayTurnProps {
  playSelectedCards: () => void;
}

function PlayTurn({ playSelectedCards }: PlayTurnProps) {
  return (
    <div>
      <button type="button" onClick={playSelectedCards}>Play Cards</button>
    </div>
  );
}

export default function Hand({ playCards, cardsInHand }: HandProps) {
  const [selectableCards, setSelectableCards] = useState<SelectableCard[]>([]);

  useEffect(() => {
    const cards = cardsInHand.map((card) => ({ ...card, isSelected: false }));
    setSelectableCards(cards);
  }, [cardsInHand]);

  function playSelectedCards() {
    const selectedCards = selectableCards
      .filter((card) => card.isSelected);
    playCards(selectedCards);
  }

  function handleCardSelect(clicked: Card) {
    setSelectableCards(selectableCards.map((card) => (cardEquals(card, clicked)
      ? { ...card, isSelected: !card.isSelected }
      : card)));
  }

  return (
    <div>
      <h2>Hand</h2>

      <SelectableCardList cards={selectableCards} handleSelect={handleCardSelect} />

      { <PlayTurn playSelectedCards={playSelectedCards} />}
    </div>
  );
}
