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

      <button type="button" onClick={serverApi.startGame}>Start Game</button>

      <Players
        broadcastPlayers={serverApi.broadcastPlayers}
        broadcastPlayerOrder={serverApi.broadcastPlayerOrder}
        broadcastPenalties={serverApi.broadcastPenalties}
        broadcastOutPlayers={serverApi.broadcastOutPlayers}
        broadcastStartPlayerTurn={serverApi.broadcastStartPlayerTurn}
      />
      <Stack
        broadcastPlayerTurn={serverApi.broadcastPlayerTurn}
        broadcastPlayerTurnError={serverApi.broadcastPlayerTurnError}
        broadcastStartRound={serverApi.broadcastStartRound}
        broadcastEndRound={serverApi.broadcastEndRound}
        broadcastStartCycle={serverApi.broadcastStartCycle}
        broadcastEndCycle={serverApi.broadcastEndCycle}
      />
      <Hand
        requestCards={serverApi.requestCards}
        playCards={serverApi.playCards}
        dealtCards={serverApi.dealtCards}
        availableCards={serverApi.availableCards}
      />
    </div>
  );
}
