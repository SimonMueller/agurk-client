import React from 'react';
import { PlayerId } from 'agurk-shared';
import UnstyledList from './styled/List';

interface Props {
  playerIds: PlayerId[];
}

export default function PlayerIds({ playerIds }: Props) {
  const playerItems = playerIds.map((playerId) => <li key={playerId}>{playerId}</li>);

  return (
    <div>
      <h2>Players</h2>

      <UnstyledList>
        { playerItems }
      </UnstyledList>
    </div>
  );
}
