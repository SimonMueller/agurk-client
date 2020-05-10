import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import { Grid } from '@material-ui/core';
import Turn from './Turn';
import LastPlayedMaxCard from './LastPlayedMaxCard';
import hideAfterTimeout from '../hideAfterTimeout';

interface Props {
  playedTurns: ValidatedTurn[];
}

const InvalidTurnHiddenAfterTimeout = hideAfterTimeout(2000)(Turn);

function MostRecentTurn({ playedTurns }: Props) {
  const mostRecentTurn: ValidatedTurn | undefined = playedTurns[playedTurns.length - 1];

  if (!mostRecentTurn) {
    return null;
  }

  return mostRecentTurn.valid
    ? <Turn turn={mostRecentTurn} />
    : <InvalidTurnHiddenAfterTimeout turn={mostRecentTurn} />;
}

export default function TurnStack({ playedTurns }: Props) {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <LastPlayedMaxCard playedTurns={playedTurns} />
      </Grid>
      <Grid item>
        <MostRecentTurn playedTurns={playedTurns} />
      </Grid>
    </Grid>
  );
}
