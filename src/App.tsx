import React, { useEffect } from 'react';
import { Message } from 'agurk-shared';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import {
  availableCards,
  broadcastEndCycle, broadcastEndGame, broadcastEndRound, broadcastGameError, broadcastGameWinner,
  broadcastOutPlayers, broadcastPenalties, broadcastPlayerOrder, broadcastPlayers, broadcastPlayerTurn,
  broadcastPlayerTurnError, broadcastRoundWinner, broadcastStartCycle, broadcastStartGame,
  broadcastStartPlayerTurn, broadcastStartRound, dealtCards, playCards, requestCards, startGame,
} from './communication/serverCommunication';

function createServerApi(subject: WebSocketSubject<Message>) {
  return {
    broadcastPlayers: broadcastPlayers.bind(null, subject),
    startGame: startGame.bind(null, subject),
    broadcastStartGame: broadcastStartGame.bind(null, subject),
    dealtCards: dealtCards.bind(null, subject),
    broadcastPlayerOrder: broadcastPlayerOrder.bind(null, subject),
    requestCards: requestCards.bind(null, subject),
    playCards: playCards.bind(null, subject),
    broadcastPlayerTurn: broadcastPlayerTurn.bind(null, subject),
    broadcastPlayerTurnError: broadcastPlayerTurnError.bind(null, subject),
    broadcastRoundWinner: broadcastRoundWinner.bind(null, subject),
    broadcastPenalties: broadcastPenalties.bind(null, subject),
    broadcastOutPlayers: broadcastOutPlayers.bind(null, subject),
    broadcastGameWinner: broadcastGameWinner.bind(null, subject),
    broadcastStartRound: broadcastStartRound.bind(null, subject),
    broadcastEndRound: broadcastEndRound.bind(null, subject),
    broadcastStartCycle: broadcastStartCycle.bind(null, subject),
    broadcastEndCycle: broadcastEndCycle.bind(null, subject),
    broadcastStartPlayerTurn: broadcastStartPlayerTurn.bind(null, subject),
    broadcastEndGame: broadcastEndGame.bind(null, subject),
    broadcastGameError: broadcastGameError.bind(null, subject),
    availableCards: availableCards.bind(null, subject),
  };
}

export default function App() {
  const subject: WebSocketSubject<Message> = webSocket('ws://localhost:3001');

  useEffect(() => {
    subject.subscribe();
    return () => subject.complete();
  });

  const serverApi = createServerApi(subject);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <Game serverApi={serverApi} />
      </main>
    </div>
  );
}
