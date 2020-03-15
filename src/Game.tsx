import React from 'react';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';
import { ServerApi } from './communication/serverApi';

interface GameProps {
  serverApi: ServerApi;
}

export default function Game({ serverApi }: GameProps) {
  return (
    <div>
      <h1>Agurk</h1>

      <button type="button" onClick={serverApi.startGame}>Start Game</button>

      <Players />
      <Stack />
      <Hand
        requestCards={serverApi.requestCards}
        playCards={serverApi.playCards}
      />
    </div>
  );
}
