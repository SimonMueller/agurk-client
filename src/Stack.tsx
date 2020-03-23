import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import CardList from './CardList';

interface Props {
  playedTurns: ValidatedTurn[];
}

export default function Stack({ playedTurns }: Props) {
  const validTurns = playedTurns.filter((turn) => turn.valid);
  const playedCards = validTurns.flatMap((turn) => turn.cards);

  return (
    <div>
      <h2>Stack</h2>

      <CardList cards={playedCards} />
    </div>
  );
}
