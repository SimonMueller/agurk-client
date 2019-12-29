import React from 'react';
import { PlayerId } from 'agurk-shared';
import Player from './Player';

interface PlayerListProps {
  playerIds: PlayerId[]
}

const Players = ({ playerIds }: PlayerListProps) => {
  const playerItems = playerIds.map((playerId) => <li><Player playerId={playerId} /></li>);

  return (
    <div>
      <p>Players</p>

      <ul>
        { playerItems }
      </ul>
    </div>
  );
};

export default Players;
