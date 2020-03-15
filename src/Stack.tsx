import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import CardList from './CardList';

interface StackProps {
  playedTurns: ValidatedTurn[];
}

export default function Stack({ playedTurns }: StackProps) {
  const playedCards = playedTurns.flatMap((turn) => turn.cards);

  return (
    <div>
      <h2>Stack</h2>

      <CardList cards={playedCards} />
    </div>
  );
}
