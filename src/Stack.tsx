import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import TurnList from './TurnList';

interface Props {
  playedTurns: ValidatedTurn[];
}

export default function Stack({ playedTurns }: Props) {
  const validTurns = playedTurns.filter((turn) => turn.valid);

  return (
    <div>
      <h2>Stack</h2>

      <TurnList turns={validTurns} />
    </div>
  );
}
