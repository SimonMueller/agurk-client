import React, { useEffect, useState } from 'react';
import { ValidatedTurn } from 'agurk-shared';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import Turn from './Turn';
import LastPlayedMaxCard from './LastPlayedMaxCard';

interface Props {
  playedTurns: ValidatedTurn[];
}

const HeightBox = styled(Box)`
  min-height: 7rem;
  max-height: 12rem;
  height: 10vw;
`;

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
    <Grid container>
      <HeightBox marginBottom={1} marginRight={2}>
        <LastPlayedMaxCard playedTurns={playedTurns} />
      </HeightBox>
      <HeightBox marginBottom={1}>
        <MostRecentTurn playedTurns={playedTurns} />
      </HeightBox>
    </Grid>
  );
}
