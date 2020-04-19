import React from 'react';
import {
  Card, compareRanks, ValidatedTurn, ValidTurn,
} from 'agurk-shared';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import PlayingCard, { PlayingCardPlaceholder } from './PlayingCard';
import Badge from '../styled/Badge';

interface Props {
  playedTurns: ValidatedTurn[];
}

const Centered = styled.div`
  text-align: center;
`;

function toMaxRankedCard(maxRankCard: Card, currentCard: Card) {
  return compareRanks(maxRankCard, currentCard) > 0 ? maxRankCard : currentCard;
}

export default function LastPlayedMaxCard({ playedTurns }: Props) {
  const validTurns = playedTurns.filter((turn) => turn.valid) as ValidTurn[];
  const playedCards = validTurns.flatMap((turn) => turn.cards);
  const highestPlayedCard = playedCards.length > 0
    ? <PlayingCard sizeAccordingTo="height" card={playedCards.reduce(toMaxRankedCard)} />
    : <PlayingCardPlaceholder sizeAccordingTo="height" />;

  return (
    <Box height="100%">
      <Box height="75%" marginBottom={1}>
        { highestPlayedCard }
      </Box>
      <Centered>
        <Badge severity="info">Highest card</Badge>
      </Centered>
    </Box>
  );
}
