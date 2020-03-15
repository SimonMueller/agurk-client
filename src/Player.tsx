import React from 'react';
import { PlayerId } from 'agurk-shared';

interface PlayerProps {
  playerId: PlayerId;
}

export default function Player({ playerId }: PlayerProps) {
  return (
    <div>
      <p>
        { playerId }
      </p>
    </div>
  );
}
