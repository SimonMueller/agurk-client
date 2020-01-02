import React, { useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import { Card, cardEquals } from 'agurk-shared';
import SelectableCardList, { SelectableCard } from './SelectableCardList';

interface HandProps {
  requestCards: () => Observable<void>;
  playCards: (cards: Card[]) => void;
  dealtCards: () => Observable<Card[]>;
  availableCards: () => Observable<Card[]>;
}

interface PlayTurnProps {
  playSelectedCards: () => void;
}

function PlayTurn({ playSelectedCards }: PlayTurnProps) {
  return (
    <div>
      <p>It is your turn</p>
      <button type="button" onClick={playSelectedCards}>Play Cards</button>
    </div>
  );
}

function toNotSelectedCards(card: Card): SelectableCard {
  return { ...card, isSelected: false };
}

export default function Hand({
  dealtCards, requestCards, playCards, availableCards,
}: HandProps) {
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
    const subscription = dealtCards().subscribe((cards) => {
      const selectableCards = cards.map(toNotSelectedCards);
      setCardsInHand(selectableCards);
    });
    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const subscription = requestCards().subscribe(() => setIsYourTurn(true));
    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const subscription = availableCards().subscribe((cards) => {
      const selectableCards = cards.map(toNotSelectedCards);
      setCardsInHand(selectableCards);
    });
    return () => subscription.unsubscribe();
  });

  return (
    <div>
      <p>Hand</p>

      <SelectableCardList cards={cardsInHand} handleSelect={handleCardSelect} />

      { isYourTurn && <PlayTurn playSelectedCards={playSelectedCards} />}
    </div>
  );
}
