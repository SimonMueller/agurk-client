import React, { useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import { Card, cardEquals } from 'agurk-shared';
import SelectableCardList, { SelectableCard } from './SelectableCardList';

interface HandProps {
  requestCards: () => Observable<void>;
  playCards: (cards: Card[]) => void;
}

interface PlayTurnProps {
  playSelectedCards: () => void;
}

function PlayTurn({ playSelectedCards }: PlayTurnProps) {
  return (
    <div>
      <p><b>It is your turn...</b></p>
      <button type="button" onClick={playSelectedCards}>Play Cards</button>
    </div>
  );
}

export default function Hand({ requestCards, playCards }: HandProps) {
  const [cardsInHand, setCardsInHand] = useState<SelectableCard[]>([]);
  const [isYourTurn, setIsYourTurn] = useState<boolean>(false);

  function playSelectedCards() {
    const selectedCards = cardsInHand.filter((card) => card.isSelected);
    const otherCards = cardsInHand.filter((card) => !card.isSelected);
    playCards(selectedCards);
    setIsYourTurn(false);
    setCardsInHand(otherCards);
  }

  function handleCardSelect(clicked: SelectableCard) {
    const updatedCardsInHand = cardsInHand.map((current) => {
      if (!cardEquals(clicked, current)) {
        return current;
      }
      return {
        ...current,
        isSelected: !current.isSelected,
      };
    });

    setCardsInHand(updatedCardsInHand);
  }

  useEffect(() => {
    const subscription = requestCards().subscribe(() => setIsYourTurn(true));
    return () => subscription.unsubscribe();
  });

  return (
    <div>
      <h2>Hand</h2>

      <SelectableCardList cards={cardsInHand} handleSelect={handleCardSelect} />

      { isYourTurn && <PlayTurn playSelectedCards={playSelectedCards} />}
    </div>
  );
}
