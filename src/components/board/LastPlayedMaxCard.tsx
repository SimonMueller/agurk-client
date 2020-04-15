import React from 'react';
import {
  Card, compareRanks, ValidatedTurn, ValidTurn,
} from 'agurk-shared';
import styled from 'styled-components';
import PlayingCard, { PlayingCardPlaceholder } from './PlayingCard';
import { PrimaryBadge } from '../styled/Badge';

interface Props {
  playedTurns: ValidatedTurn[];
}

const Centered = styled.div`
  text-align: center;
`;

const CardBox = styled.div`
  margin-bottom: 0.5em;
`;

function toMaxRankedCard(maxRankCard: Card, currentCard: Card) {
  return compareRanks(maxRankCard, currentCard) > 0 ? maxRankCard : currentCard;
}

export default function LastPlayedMaxCard({ playedTurns }: Props) {
  const validTurns = playedTurns.filter((turn) => turn.valid) as ValidTurn[];
  const playedCards = validTurns.flatMap((turn) => turn.cards);
  const highestPlayedCard = playedCards.length > 0
    ? <PlayingCard card={playedCards.reduce(toMaxRankedCard)} />
    : <PlayingCardPlaceholder />;

  return (
    <div>
      <CardBox>
        { highestPlayedCard }
      </CardBox>
      <Centered>
        <PrimaryBadge>Highest card</PrimaryBadge>
      </Centered>
    </div>
  );
}
