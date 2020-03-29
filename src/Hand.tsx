import React, { useEffect, useState } from 'react';
import { Card, cardEquals } from 'agurk-shared';
import styled from 'styled-components';
import SelectableCardList, { SelectableCard } from './SelectableCardList';
import { FullWidthPrimaryButton } from './styled/Button';
import TextTimeout from './TextTimeout';
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

const CenteredFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MutedParagraph = styled.p`
  color: ${({ theme }: { theme: Theme }) => (theme.colors.muted)};
`;

function PlayTurn({ handlePlayClick, turnTimeoutInMillis, turnRetriesLeft }: PlayTurnProps) {
  return (
    <>
      <FullWidthPrimaryButton type="button" onClick={handlePlayClick}>
      Play Cards
        { ' ' }
        { turnTimeoutInMillis && <TextTimeout timeoutInMillis={turnTimeoutInMillis} /> }
      </FullWidthPrimaryButton>

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
          <CenteredFlex>
            <PlayTurn
              handlePlayClick={playSelectedCards}
              turnTimeoutInMillis={turnTimeoutInMillis}
              turnRetriesLeft={turnRetriesLeft}
            />
          </CenteredFlex>
        )}
    </div>
  );
}
