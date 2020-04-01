import React from 'react';
import { compareRanks, ValidatedTurn, ValidTurn } from 'agurk-shared';
import styled from 'styled-components';
import PlayingCard, { PlayingCardPlaceholder } from './PlayingCard';
import { Theme } from './styled/theme';
import Badge from './styled/Badge';
import TurnList from './TurnList';

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

export const SuccessBadge = styled(Badge)`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.success)};
  color: white;
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
    <>
      <CardBox>
        { highestPlayedCard }
      </CardBox>
      <Centered>
        <SuccessBadge>Highest played card</SuccessBadge>
      </Centered>
    </>
  );
}

export default function Stack({ playedTurns }: Props) {
  return (
    <div>
      <h2>Stack</h2>

      <Flex>
        <Box>
          <LastPlayedMaxCard playedTurns={playedTurns} />
        </Box>
        <Box>
          <TurnList turns={playedTurns} />
        </Box>
      </Flex>
    </div>
  );
}
