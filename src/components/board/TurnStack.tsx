import React, { useEffect, useState } from 'react';
import { ValidatedTurn } from 'agurk-shared';
import { Divider, Grid } from '@material-ui/core';
import Turn from './Turn';
import LastPlayedMaxCard from './LastPlayedMaxCard';

interface Props {
  playedTurns: ValidatedTurn[];
}

function findLastTurn(playedTurns: ValidatedTurn[]): ValidatedTurn | undefined {
  return playedTurns[playedTurns.length - 1];
}

function MostRecentTurn({ playedTurns }: Props) {
  const [displayedTurn, setDisplayedTurn] = useState<ValidatedTurn | undefined>(undefined);
  const SHOW_INVALID_TURN_TIMEOUT = 2000;

  useEffect(() => {
    const previousTurn = findLastTurn(playedTurns);
    setDisplayedTurn(previousTurn);

    if (previousTurn && !previousTurn.valid) {
      const validTurns = playedTurns.filter((turn) => turn.valid);
      const previousValidTurn = findLastTurn(validTurns);

      const timeout: number = setTimeout(() => {
        setDisplayedTurn(previousValidTurn);
      }, SHOW_INVALID_TURN_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [playedTurns]);

  return displayedTurn
    ? <Turn turn={displayedTurn} />
    : null;
}

export default function TurnStack({ playedTurns }: Props) {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <LastPlayedMaxCard playedTurns={playedTurns} />
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item>
        <MostRecentTurn playedTurns={playedTurns} />
      </Grid>
    </Grid>
  );
}
