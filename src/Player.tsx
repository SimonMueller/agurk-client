import React from 'react';
import { PlayerState } from './redux/reducers';

interface PlayerProps {
  player: PlayerState;
}

export default function Player({ player }: PlayerProps) {
  return (
    <div>
      <p>
        { player.isServerRequestingCards && <span>--&gt;</span> }
        { player.id }
      </p>
    </div>
  );
}
