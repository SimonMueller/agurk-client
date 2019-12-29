import React from 'react';
import { Message, MessageName } from 'agurk-shared';
import { Subject } from 'rxjs';
import Hand from './Hand';
import Players from './Players';
import Stack from './Stack';

interface GameProps {
  subject: Subject<Message<object>>;
}

interface GameState {}

export default class Game extends React.Component<GameProps, GameState> {
  startGame() {
    const { subject } = this.props;
    subject.next({
      name: MessageName.START_GAME,
    });
  }

  render() {
    return (
      <div className="Game">

        <button type="button" onClick={() => this.startGame()}>Start Game</button>

        <Players playerIds={[]} />
        <Stack />
        <Hand />
      </div>
    );
  }
}
