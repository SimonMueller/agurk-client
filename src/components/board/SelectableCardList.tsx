import React from 'react';
import { Card as CardData } from 'agurk-shared';
import styled from 'styled-components';
import { Box, ButtonBase } from '@material-ui/core';
import PlayingCard, { generateCardKey } from './PlayingCard';
import { Theme } from '../../theme';

export type SelectableCard = CardData & { isSelected: boolean };

interface Props {
  cards: SelectableCard[];
  handleSelect: (card: CardData) => void;
}

const Flex = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 3.75rem);

 @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.sm)}px) {
    width: calc(100% - 2.5rem);
  }
`;

const OverlappingBox = styled(Box)`
  margin-right: -3.75rem;

  @media(min-width: ${({ theme }: { theme: Theme }) => (theme.breakpoints.values.sm)}px) {
    margin-right: -2.5rem;
  }
`;

export default function CardList({ cards, handleSelect }: Props) {
  const cardItems = cards.map((card) => (
    <OverlappingBox key={generateCardKey(card)} marginBottom={1}>
      <ButtonBase onClick={() => handleSelect(card)}>
        <PlayingCard card={card} isSelected={card.isSelected} />
      </ButtonBase>
    </OverlappingBox>
  ));

  return (
    <Flex marginBottom={1}>
      { cardItems }
    </Flex>
  );
}
