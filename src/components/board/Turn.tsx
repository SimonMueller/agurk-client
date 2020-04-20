import React from 'react';
import styled from 'styled-components';
import { InvalidTurn, ValidatedTurn, ValidTurn } from 'agurk-shared';
import { Box, Grid } from '@material-ui/core';
import PlayingCard, { generateCardKey, PlayingCardPlaceholder } from './PlayingCard';
import Badge from '../Badge';

interface Props {
  turn: ValidatedTurn;
}

const Centered = styled.div`
  text-align: center;
`;

export function generateTurnKey(turn: ValidatedTurn): string {
  return turn.playerId + turn.valid;
}

function createCardItems(turn: ValidatedTurn) {
  return turn.cards.map((card) => (
    <Box marginRight={1} key={generateCardKey(card)}>
      <PlayingCard size="small" card={card} />
    </Box>
  ));
}

function Valid({ turn }: { turn: ValidTurn }) {
  const cardItems = createCardItems(turn);

  return (
    <>
      <Box marginBottom={1}>
        <Grid container justify="center">
          { cardItems }
        </Grid>
      </Box>
      <Centered><span>{turn.playerId}</span></Centered>
    </>
  );
}

function Invalid({ turn }: { turn: InvalidTurn }) {
  const cardItems = createCardItems(turn);

  return (
    <>
      <Box marginBottom={1}>
        <Grid container justify="center">
          { cardItems.length === 0
            ? <PlayingCardPlaceholder size="small" />
            : cardItems }
        </Grid>
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
    <Box>
      {turn.valid
        ? <Valid turn={turn} />
        : <Invalid turn={turn} />}
    </Box>
  );
}
