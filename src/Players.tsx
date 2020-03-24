import React from 'react';
import Player from './Player';
import { PlayerState } from './redux/reducers';

interface Props {
  players: PlayerState[];
}

export default function Players({ players }: Props) {
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