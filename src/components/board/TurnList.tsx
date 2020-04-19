import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import Turn, { generateTurnKey } from './Turn';

interface Props {
  turns: ValidatedTurn[];
}

const HeightBox = styled(Box)`
  min-height: 7rem;
  max-height: 12rem;
  height: 10vw;
`;

export default function TurnList({ turns }: Props) {
  const mostRecentPlayerTurns = turns.reduceRight<ValidatedTurn[]>((acc, current) => {
    const isMostRecentPlayerTurn = acc.find((turn) => turn.playerId === current.playerId) === undefined;
    return isMostRecentPlayerTurn
      ? [current, ...acc]
      : acc;
  }, []);
  const turnItems = mostRecentPlayerTurns.map((turn) => (
    <HeightBox marginRight={1} marginBottom={1} key={generateTurnKey(turn)}>
      <Turn turn={turn} />
    </HeightBox>
  ));

  return (
    <Grid container>
      { turnItems }
    </Grid>
  );
}
