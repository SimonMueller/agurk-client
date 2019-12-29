import React from 'react';
import { Message, MessageName } from 'agurk-shared';
import { Subject } from 'rxjs';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';

interface GameProps {
  subject: Subject<Message<object>>;
}

export default function Game(props: GameProps) {
  const { subject } = props;
  const handleStartGame = () => subject.next({
    name: MessageName.START_GAME,
  });

  return (
    <div className="Game">

      <button type="button" onClick={handleStartGame}>Start Game</button>

      <Players playerIds={[]} />
      <Stack />
      <Hand />
    </div>
  );
}
