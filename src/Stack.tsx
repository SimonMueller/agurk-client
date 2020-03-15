import React, { useState } from 'react';
import { Card } from 'agurk-shared';
import CardList from './CardList';

export default function Stack() {
  const [playedCards] = useState<Card[]>([]);

  return (
    <div>
      <h2>Stack</h2>

      <CardList cards={playedCards} />
    </div>
  );
}
