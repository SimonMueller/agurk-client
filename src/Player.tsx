import React from 'react';
import { PlayerState } from './redux/game';

interface Props {
  player: PlayerState;
}

export default function Player({ player }: Props) {
  return (
    <span>
      { player.isServerRequestingCards && <span>--&gt;</span> }
      { player.id }
    </span>
  );
}
