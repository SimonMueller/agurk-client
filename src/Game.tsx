import React from 'react';
import {
  Card, OutPlayer, Penalty, PlayerId, TurnError, ValidatedTurn, Error,
} from 'agurk-shared';
import { Observable } from 'rxjs';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';

interface ServerApi {
  broadcastPlayers: () => Observable<PlayerId[]>;
  startGame: () => void;
  broadcastStartGame: () => Observable<undefined>;
  dealtCards: () => Observable<Card[]>;
  broadcastPlayerOrder: () => Observable<PlayerId[]>;
  requestCards: () => Observable<undefined>;
  playCards: (cards: Card[]) => void;
  broadcastPlayerTurn: () => Observable<ValidatedTurn>;
  broadcastPlayerTurnError: () => Observable<TurnError>;
  broadcastRoundWinner: () => Observable<PlayerId>;
  broadcastPenalties: () => Observable<Penalty[]>;
  broadcastOutPlayers: () => Observable<OutPlayer[]>;
  broadcastGameWinner: () => Observable<PlayerId>;
  broadcastStartRound: () => Observable<undefined>;
  broadcastEndRound: () => Observable<undefined>;
  broadcastStartCycle: () => Observable<undefined>;
  broadcastEndCycle: () => Observable<undefined>;
  broadcastStartPlayerTurn: () => Observable<PlayerId>;
  broadcastEndGame: () => Observable<undefined>;
  broadcastGameError: () => Observable<Error>;
  availableCards: () => Observable<Card[]>;
}

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
