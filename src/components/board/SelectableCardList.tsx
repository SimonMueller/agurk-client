import React from 'react';
import { Card as CardData } from 'agurk-shared';
import styled from 'styled-components';
import PlayingCard, { generateCardKey } from './PlayingCard';
import { UnstyledButton } from '../styled/Button';
import { Theme } from '../styled/theme';

export type SelectableCard = CardData & { isSelected: boolean };

interface Props {
  cards: SelectableCard[];
  handleSelect: (card: CardData) => void;
}

const cardBoxOverlap = '3em';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  width: calc(100% - ${cardBoxOverlap});

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.minWidth)}) {
    width: 100%;
  }
`;

const Box = styled.div`
  margin-right: -${cardBoxOverlap};
  margin-bottom: 0.5em;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.minWidth)}) {
    margin-right: 0.5em;
  }
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
