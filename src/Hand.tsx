import React, { useEffect, useState } from 'react';
import { Card, cardEquals } from 'agurk-shared';
import styled from 'styled-components';
import SelectableCardList, { SelectableCard } from './SelectableCardList';
import PrimaryButton from './styled/Button';
import TextSecondTimer from './TextSecondTimer';
import { Theme } from './styled/theme';

interface Props {
  playCards: (cards: Card[]) => void;
  cardsInHand: Card[];
  isServerRequestingCards: boolean;
  turnTimeoutInMillis: number | undefined;
  turnRetriesLeft: number;
}

interface PlayTurnProps {
  handlePlayClick: () => void;
  turnTimeoutInMillis: number | undefined;
  turnRetriesLeft: number;
}

const MutedParagraph = styled.p`
  color: ${({ theme }: { theme: Theme }) => (theme.colors.muted)};
  text-align: center;
`;

function PlayTurn({ handlePlayClick, turnTimeoutInMillis, turnRetriesLeft }: PlayTurnProps) {
  return (
    <>
      <PrimaryButton type="button" onClick={handlePlayClick}>
      Play Cards
        { ' ' }
        { turnTimeoutInMillis && (
        <span>
          (
          <TextSecondTimer timeoutInSeconds={turnTimeoutInMillis / 1000} />
          )
        </span>
        ) }
      </PrimaryButton>

      <MutedParagraph>
        { turnRetriesLeft }
        { ' ' }
        { turnRetriesLeft === 1
          ? 'Retry left'
          : 'Retries left' }
      </MutedParagraph>
    </>
  );
}

export default function Hand({
  playCards, cardsInHand, isServerRequestingCards, turnTimeoutInMillis, turnRetriesLeft,
}: Props) {
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

      { isServerRequestingCards
        && (
          <PlayTurn
            handlePlayClick={playSelectedCards}
            turnTimeoutInMillis={turnTimeoutInMillis}
            turnRetriesLeft={turnRetriesLeft}
          />
        )}
    </div>
  );
}
