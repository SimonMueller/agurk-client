import React from 'react';
import styled from 'styled-components';
import { InvalidTurn, ValidatedTurn, ValidTurn } from 'agurk-shared';
import PlayingCard from './PlayingCard';
import Badge from './styled/badge';

interface Props {
  turn: ValidatedTurn;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MutedFlex = styled(Flex)`
  color: grey;
`;

const Box = styled.div`
  padding: 1em;
`;

const CenteredParagraph = styled.p`
  text-align: center;
`;

export const ErrorBadge = styled(Badge)`
  background-color: rgba(227, 38, 54, 0.9);
  color: white;
  text-transform: uppercase;
`;

export const SuccessBadge = styled(Badge)`
  background-color: rgba(50, 205, 50, 0.9);
  color: white;
  text-transform: uppercase;
`;

function Valid({ turn }: { turn: ValidTurn }) {
  const cardItems = turn.cards.map((card) => (
    <Box>
      <PlayingCard card={card} />
    </Box>
  ));

  return (
    <>
      <Flex>
        { cardItems }
      </Flex>
      <CenteredParagraph>{turn.playerId}</CenteredParagraph>
      <CenteredParagraph>
        <SuccessBadge>Valid turn</SuccessBadge>
      </CenteredParagraph>
    </>
  );
}

function Invalid({ turn }: { turn: InvalidTurn }) {
  const cardItems = turn.cards.map((card) => (
    <Box>
      <PlayingCard card={card} />
    </Box>
  ));

  return (
    <>
      <MutedFlex>
        { cardItems }
      </MutedFlex>
      <CenteredParagraph>{turn.playerId}</CenteredParagraph>
      <CenteredParagraph>
        <ErrorBadge>{turn.invalidReason}</ErrorBadge>
      </CenteredParagraph>
    </>
  );
}

export default function Turn({ turn }: Props) {
  return (
    <>
      { turn.valid ? <Valid turn={turn} /> : <Invalid turn={turn} />}
    </>
  );
}
