import React, { useState } from 'react';
import { Card, cardEquals } from 'agurk-shared';
import SelectableCardList from './SelectableCardList';

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
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  function playSelectedCards() {
    playCards(selectedCards);
    setSelectedCards([]);
  }
  function handleCardSelect(clicked: Card) {
    const alreadySelected = selectedCards.some((current) => cardEquals(current, clicked));

    if (alreadySelected) {
      setSelectedCards(selectedCards.filter((current) => !cardEquals(current, clicked)));
    } else {
      setSelectedCards([...selectedCards, clicked]);
    }
  }

  return (
    <div>
      <h2>Hand</h2>

      <SelectableCardList cards={cardsInHand} handleSelect={handleCardSelect} />

      { <PlayTurn playSelectedCards={playSelectedCards} />}
    </div>
  );
}
