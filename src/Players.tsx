import React from 'react';
import Player from './Player';
import { PlayerState } from './redux/reducers';

interface PlayersProps {
  players: PlayerState[];
}

export default function Players({ players }: PlayersProps) {
  const playerItems = players.map((player) => <li key={player.id}><Player player={player} /></li>);

  return (
    <div>
      <h2>Players</h2>

      <ul>
        { playerItems }
      </ul>
    </div>
  );
}
