import React, { useEffect, useState } from 'react';
import { Card, cardEquals } from 'agurk-shared';
import styled from 'styled-components';
import SelectableCardList, { SelectableCard } from './SelectableCardList';
import { FullWidthPrimaryButton } from './styled/button';

interface HandProps {
  playCards: (cards: Card[]) => void;
  cardsInHand: Card[];
  isServerRequestingCards: boolean;
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Hand({ playCards, cardsInHand, isServerRequestingCards }: HandProps) {
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
      <h2>Hand</h2>

      <SelectableCardList cards={selectableCards} handleSelect={handleCardSelect} />

      <br />

      <Centered>
        { isServerRequestingCards
          && <FullWidthPrimaryButton type="button" onClick={playSelectedCards}>Play Cards</FullWidthPrimaryButton>}
      </Centered>
    </div>
  );
}
