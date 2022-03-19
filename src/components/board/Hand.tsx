import React, {
  useCallback, useEffect, useState,
} from 'react';
import { Card, cardEquals } from 'agurk-shared';
import { Box, Button, Typography } from '@material-ui/core';
import SelectableCardList, { SelectableCard } from './SelectableCardList';

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
    <Button size="large" fullWidth variant="contained" color="secondary" onClick={handlePlayClick}>
      Play cards
    </Button>
  );
}

export default function Hand({ playCards, cardsInHand, isServerRequestingCards }: Props) {
  const [selectableCards, setSelectableCards] = useState<SelectableCard[]>([]);
  const handleCardSelect = useCallback((clicked: Card) => {
    setSelectableCards(selectableCards.map((card) => (cardEquals(card, clicked)
      ? { ...card, isSelected: !card.isSelected }
      : card)));
  }, [selectableCards]);
  const playSelectedCards = useCallback(() => {
    const selectedCards = selectableCards.filter((card) => card.isSelected);
    playCards(selectedCards);
  }, [playCards, selectableCards]);

  useEffect(() => {
    const cards = cardsInHand.map((card) => ({ ...card, isSelected: false }));
    setSelectableCards(cards);
  }, [cardsInHand]);

  return (
    <div>
      <Typography variant="h2" gutterBottom>Your hand</Typography>

      <Box marginBottom={2}>
        <SelectableCardList cards={selectableCards} handleSelect={handleCardSelect} />
      </Box>

      { isServerRequestingCards && <PlayTurn handlePlayClick={playSelectedCards} /> }
    </div>
  );
}
