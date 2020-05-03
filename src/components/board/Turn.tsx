import React from 'react';
import { InvalidTurn, ValidatedTurn, ValidTurn } from 'agurk-shared';
import {
  Box, Grid, Tooltip, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import PlayingCard, { generateCardKey, PlayingCardPlaceholder } from './PlayingCard';
import Badge from '../Badge';

interface Props {
  turn: ValidatedTurn;
}

const PlayerIdMaxWidthBox = styled(Box)`
  max-width: ${({ cardCount }: {cardCount: number }) => (`${cardCount * 6}rem`)};
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
      <PlayerIdMaxWidthBox cardCount={cardItems.length}>
        <Tooltip title={turn.playerId}>
          <Typography variant="body1" align="center" noWrap>
            {turn.playerId}
          </Typography>
        </Tooltip>
      </PlayerIdMaxWidthBox>
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
      <Typography variant="body1" align="center">
        {turn.playerId}
      </Typography>
      <Typography variant="body1" align="center">
        <Badge severity="error">
          {turn.invalidReason}
        </Badge>
      </Typography>
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
