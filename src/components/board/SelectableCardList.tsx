import React from 'react';
import { Card as CardData } from 'agurk-shared';
import styled from 'styled-components';
import PlayingCard, { generateCardKey } from './PlayingCard';

export type SelectableCard = CardData & { isSelected: boolean };

interface Props {
  cards: SelectableCard[];
  handleSelect: (card: CardData) => void;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
`;

const Box = styled.div`
  margin-right: 0.5em;
  margin-bottom: 0.5em;
`;

const UnstyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export default function CardList({ cards, handleSelect }: Props) {
  const cardItems = cards.map((card) => (
    <Box key={generateCardKey(card)}>
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