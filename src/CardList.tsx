import React from 'react';
import { Card as CardData } from 'agurk-shared';
import styled from 'styled-components';
import PlayingCard from './PlayingCard';

interface Props {
  cards: CardData[];
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
   padding: 1em;
`;

export default function CardList({ cards }: Props) {
  const cardItems = cards.map((card) => (
    <Box>
      <PlayingCard card={card} />
    </Box>
  ));

  return (
    <Flex>
      { cardItems }
    </Flex>
  );
}
