import React from 'react';
import { PlayerId } from 'agurk-shared';

interface Props {
  playerIds: PlayerId[];
}

export default function PlayerIds({ playerIds }: Props) {
  const playerItems = playerIds.map((playerId) => <li key={playerId}>{playerId}</li>);

  return (
    <div>
      <h2>Players</h2>

      <ul>
        { playerItems }
      </ul>
    </div>
  );
}
