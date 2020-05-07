import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import { Grid } from '@material-ui/core';
import Turn, { generateTurnKey } from './Turn';

interface Props {
  turns: ValidatedTurn[];
}

export default function TurnList({ turns }: Props) {
  const mostRecentPlayerTurns = turns.reduceRight<ValidatedTurn[]>((acc, current) => {
    const isMostRecentPlayerTurn = acc.find((turn) => turn.playerId === current.playerId) === undefined;
    return isMostRecentPlayerTurn
      ? [current, ...acc]
      : acc;
  }, []);
  const turnItems = mostRecentPlayerTurns.map((turn) => (
    <Grid item key={generateTurnKey(turn)}>
      <Turn turn={turn} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      { turnItems }
    </Grid>
  );
}
