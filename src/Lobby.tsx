import React from 'react';
import { PlayerId } from 'agurk-shared';
import PrimaryButton from './styled/Button';
import PlayerIdList from './PlayerIdList';

interface Props {
  players: PlayerId[];
  startGame: () => void;
}

export default function Lobby({ players, startGame }: Props) {
  return (
    <div>
      <PlayerIdList playerIds={players} />
      <PrimaryButton type="button" onClick={startGame}>Start Game</PrimaryButton>
    </div>
  );
}
