import React from 'react';
import { Card as CardData } from 'agurk-shared';
import styled from 'styled-components';
import PlayingCard from './PlayingCard';

export type SelectableCard = CardData & { isSelected: boolean };

interface Props {
  cards: SelectableCard[];
  handleSelect: (card: CardData) => void;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
  padding: 1em;
`;

const UnstyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export default function CardList({ cards, handleSelect }: Props) {
  const cardItems = cards.map((card) => (
    <Box>
      <UnstyledButton onClick={() => handleSelect(card)}>
        <PlayingCard card={card} isSelected={card.isSelected} />
      </UnstyledButton>
    </Box>
  ));

  return (
    <Flex>
      { cardItems }
    </Flex>
  );
}
