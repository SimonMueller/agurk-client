import React from 'react';
import styled from 'styled-components';
import { ValidatedTurn } from 'agurk-shared';
import PlayingCard from './PlayingCard';

interface Props {
  turn: ValidatedTurn;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
   padding-right: 1em;
`;

const CenteredParagraph = styled.p`
  text-align: center;
`;

export default function Turn({ turn }: Props) {
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
    </>
  );
}
