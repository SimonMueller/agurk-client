import React, { useEffect, useState } from 'react';
import { Card, cardEquals } from 'agurk-shared';
import SelectableCardList, { SelectableCard } from './SelectableCardList';
import PrimaryButton from '../styled/Button';

interface Props {
  playCards: (cards: Card[]) => void;
  cardsInHand: Card[];
  isServerRequestingCards: boolean;
}

interface PlayTurnProps {
  handlePlayClick: () => void;
}

function PlayTurn({ handlePlayClick }: PlayTurnProps) {
  return (
    <>
      <PrimaryButton type="button" onClick={handlePlayClick}>
        Play Cards
      </PrimaryButton>
    </>
  );
}

export default function Hand({ playCards, cardsInHand, isServerRequestingCards }: Props) {
  const [selectableCards, setSelectableCards] = useState<SelectableCard[]>([]);

  useEffect(() => {
    const cards = cardsInHand.map((card) => ({ ...card, isSelected: false }));
    setSelectableCards(cards);
  }, [cardsInHand]);

  function playSelectedCards() {
    const selectedCards = selectableCards.filter((card) => card.isSelected);
    playCards(selectedCards);
  }

  function handleCardSelect(clicked: Card) {
    setSelectableCards(selectableCards.map((card) => (cardEquals(card, clicked)
      ? { ...card, isSelected: !card.isSelected }
      : card)));
  }

  return (
    <div>
      <h2>Your hand</h2>

      <SelectableCardList cards={selectableCards} handleSelect={handleCardSelect} />

      { isServerRequestingCards && <PlayTurn handlePlayClick={playSelectedCards} /> }
    </div>
  );
}
