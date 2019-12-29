import React from 'react';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';

const Game = () => (
  <div className="Game">
    <p>
      Game
    </p>

    <Players playerIds={[]} />
    <Stack />
    <Hand />
  </div>
);

export default Game;
