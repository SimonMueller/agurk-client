import React, { useState } from 'react';
import { PlayerId } from 'agurk-shared';
import Player from './Player';

export default function Players() {
  const [playerIds] = useState<PlayerId[]>([]);
  const playerItems = playerIds.map((playerId) => <li key={playerId}><Player playerId={playerId} /></li>);

  return (
    <div>
      <h2>Players</h2>

      <ul>
        { playerItems }
      </ul>
    </div>
  );
}
