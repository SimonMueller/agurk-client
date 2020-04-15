import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import TurnList from './TurnList';
import TurnStack from './TurnStack';

interface Props {
  playedTurns: ValidatedTurn[];
  isLastCycleOfRound: boolean;
}

export default function PlayedTurns({ playedTurns, isLastCycleOfRound }: Props) {
  return isLastCycleOfRound
    ? <TurnList turns={playedTurns} />
    : <TurnStack playedTurns={playedTurns} />;
}
