import React, { useEffect, useState } from 'react';
import { Card, TurnError, ValidatedTurn } from 'agurk-shared';
import { Observable } from 'rxjs';
import CardList from './CardList';

interface StackProps {
  broadcastPlayerTurn: () => Observable<ValidatedTurn>;
  broadcastPlayerTurnError: () => Observable<TurnError>;
  broadcastStartRound: () => Observable<void>;
  broadcastEndRound: () => Observable<void>;
  broadcastStartCycle: () => Observable<void>;
  broadcastEndCycle: () => Observable<void>;
}

export default function Stack({ broadcastPlayerTurn, broadcastEndRound, broadcastEndCycle }: StackProps) {
  const [playedCards, setPlayedCards] = useState<Card[]>([]);

  useEffect(() => {
    const subscription = broadcastPlayerTurn().subscribe((turn) => setPlayedCards([...playedCards, ...turn.cards]));
    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const subscription = broadcastEndRound().subscribe(() => setPlayedCards([]));
    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    const subscription = broadcastEndCycle().subscribe(() => setPlayedCards([]));
    return () => subscription.unsubscribe();
  });

  return (
    <div>
      <h2>Stack</h2>

      <CardList cards={playedCards} />
    </div>
  );
}
