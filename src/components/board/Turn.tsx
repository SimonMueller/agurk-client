import React from 'react';
import styled from 'styled-components';
import { InvalidTurn, ValidatedTurn, ValidTurn } from 'agurk-shared';
import { Box, Grid } from '@material-ui/core';
import PlayingCard, { generateCardKey, PlayingCardPlaceholder } from './PlayingCard';
import Badge from '../styled/Badge';

interface Props {
  turn: ValidatedTurn;
}

const FullHeightFlex = styled(Grid)`
  height: 100%;
`;

const Centered = styled.div`
  text-align: center;
`;

export function generateTurnKey(turn: ValidatedTurn): string {
  return turn.playerId + turn.valid;
}

function createCardItems(turn: ValidatedTurn) {
  return turn.cards.map((card) => (
    <Box height="100%" marginRight={1} marginBottom={1} key={generateCardKey(card)}>
      <PlayingCard sizeAccordingTo="height" card={card} />
    </Box>
  ));
}

function Valid({ turn }: { turn: ValidTurn }) {
  const cardItems = createCardItems(turn);

  return (
    <>
      <Box height="75%" marginBottom={1}>
        <FullHeightFlex container justify="center">
          { cardItems }
        </FullHeightFlex>
      </Box>
      <Centered><span>{turn.playerId}</span></Centered>
    </>
  );
}

function Invalid({ turn }: { turn: InvalidTurn }) {
  const cardItems = createCardItems(turn);

  return (
    <>
      <Box height="75%" marginBottom={1}>
        <FullHeightFlex container justify="center">
          { cardItems.length === 0
            ? <PlayingCardPlaceholder sizeAccordingTo="height" />
            : cardItems }
        </FullHeightFlex>
      </Box>
      <Centered><span>{turn.playerId}</span></Centered>
      <Centered>
        <Badge severity="error">{turn.invalidReason}</Badge>
      </Centered>
    </>
  );
}

export default function Turn({ turn }: Props) {
  return (
    <Box height="100%">
      {turn.valid
        ? <Valid turn={turn} />
        : <Invalid turn={turn} />}
    </Box>
  );
}
