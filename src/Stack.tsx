import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import TurnList from './TurnList';

interface Props {
  playedTurns: ValidatedTurn[];
}

export default function Stack({ playedTurns }: Props) {
  return (
    <div>
      <h2>Stack</h2>

      <TurnList turns={playedTurns} />
    </div>
  );
}
