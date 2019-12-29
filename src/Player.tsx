import React from 'react';
import { PlayerId } from 'agurk-shared';

interface PlayerProps {
  playerId: PlayerId
}

const Player = ({ playerId }: PlayerProps) => (
  <div className="Player">
    <p>
      { playerId }
    </p>
  </div>
);

export default Player;
