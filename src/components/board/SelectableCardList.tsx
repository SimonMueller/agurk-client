import React from 'react';
import { Card as CardData } from 'agurk-shared';
import styled from 'styled-components';
import { Box, ButtonBase } from '@material-ui/core';
import PlayingCard, { generateCardKey } from './PlayingCard';

export type SelectableCard = CardData & { isSelected: boolean };

interface Props {
  cards: SelectableCard[];
  handleSelect: (card: CardData) => void;
}

const maxCardCountPerRow = 7;
const overlapWidthInPercent = 50;
const cardOverlapInPercent = Math.floor(100 / maxCardCountPerRow);
const cardWidthInPercent = Math.floor((100 / maxCardCountPerRow) * (100 / overlapWidthInPercent));
const containerWidthInPercent = 100 - cardOverlapInPercent;

const Flex = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: ${containerWidthInPercent}%;
`;

const OverlappingBox = styled(Box)`
  margin-right: -${cardOverlapInPercent}%;
  width: ${cardWidthInPercent}%;
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
