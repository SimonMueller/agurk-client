import React from 'react';
import { compareRanks, ValidatedTurn, ValidTurn } from 'agurk-shared';
import styled from 'styled-components';
import PlayingCard, { PlayingCardPlaceholder } from './PlayingCard';
import TurnList from './TurnList';
import { PrimaryBadge } from '../styled/Badge';

interface Props {
  playedTurns: ValidatedTurn[];
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  margin-right: 1em;
  margin-bottom: 1em;
`;

const Centered = styled.div`
  text-align: center;
`;

const CardBox = styled.div`
  margin-bottom: 0.5em;
`;

function LastPlayedMaxCard({ playedTurns }: Props) {
  const validTurns = playedTurns.filter((turn) => turn.valid) as ValidTurn[];
  const playedCards = validTurns.flatMap((turn) => turn.cards);
  const highestPlayedCard = playedCards.length > 0
    ? (
      <PlayingCard card={playedCards.reduce(
        (maxRankCard, currentCard) => (compareRanks(maxRankCard, currentCard) > 0 ? maxRankCard : currentCard),
      )}
      />
    )
    : <PlayingCardPlaceholder />;

  return (
    <Box>
      <CardBox>
        { highestPlayedCard }
      </CardBox>
      <Centered>
        <PrimaryBadge>Highest card</PrimaryBadge>
      </Centered>
    </Box>
  );
}

export default function Stack({ playedTurns }: Props) {
  return (
    <Flex>
      <Box>
        <LastPlayedMaxCard playedTurns={playedTurns} />
      </Box>
      <Box>
        <TurnList turns={playedTurns} />
      </Box>
    </Flex>
  );
}
