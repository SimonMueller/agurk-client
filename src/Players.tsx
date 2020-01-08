import React, { useEffect, useState } from 'react';
import { Observable } from 'rxjs';
import { OutPlayer, Penalty, PlayerId } from 'agurk-shared';
import Player from './Player';

interface PlayersProps {
  broadcastPlayers: () => Observable<PlayerId[]>;
  broadcastPlayerOrder: () => Observable<PlayerId[]>;
  broadcastPenalties: () => Observable<Penalty[]>;
  broadcastOutPlayers: () => Observable<OutPlayer[]>;
  broadcastStartPlayerTurn: () => Observable<PlayerId>;
}

export default function Players({ broadcastPlayers }: PlayersProps) {
  const [playerIds, setPlayerIds] = useState<PlayerId[]>([]);
  const playerItems = playerIds.map((playerId) => <li key={playerId}><Player playerId={playerId} /></li>);

  useEffect(() => {
    const subscription = broadcastPlayers().subscribe((ids) => setPlayerIds(ids));
    return () => subscription.unsubscribe();
  });

  return (
    <div>
      <h2>Players</h2>

      <ul>
        { playerItems }
      </ul>
    </div>
  );
}
