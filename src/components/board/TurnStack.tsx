import React, { useEffect, useState } from 'react';
import { ValidatedTurn } from 'agurk-shared';
import styled from 'styled-components';
import Turn from './Turn';
import LastPlayedMaxCard from './LastPlayedMaxCard';

interface Props {
  playedTurns: ValidatedTurn[];
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 1em;
    margin-bottom: 1em;
  }
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
    <Flex>
      <LastPlayedMaxCard playedTurns={playedTurns} />
      <MostRecentTurn playedTurns={playedTurns} />
    </Flex>
  );
}
