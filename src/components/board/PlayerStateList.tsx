import React from 'react';
import styled from 'styled-components';
import Player from './Player';
import { PlayerState } from '../../redux/game.reducer';

interface Props {
  players: PlayerState[];
}

const Li = styled.li`
  margin-bottom: 0.5em;
`;

function byOrderAsc(first: PlayerState, second: PlayerState) {
  return Math.sign(first.order - second.order);
}

function ActiveOrderedPlayers({ players }: Props) {
  const orderedActivePlayers = players.filter((player) => !player.isOut).sort(byOrderAsc);
  const activePlayerItems = orderedActivePlayers.map((player) => <Li key={player.id}><Player player={player} /></Li>);

  if (activePlayerItems.length === 0) {
    return null;
  }

  return (
    <>
      <h2>Players</h2>

      <ol>
        { activePlayerItems }
      </ol>
    </>
  );
}

function OutPlayers({ players }: Props) {
  const outPlayers = players.filter((player) => player.isOut);
  const outPlayerItems = outPlayers.map((player) => <Li key={player.id}><Player player={player} /></Li>);

  if (outPlayerItems.length === 0) {
    return null;
  }

  return (
    <>
      <ul>
        { outPlayerItems }
      </ul>
    </>
  );
}

export default function PlayerStateList({ players }: Props) {
  return (
    <div>
      <ActiveOrderedPlayers players={players} />
      <OutPlayers players={players} />
    </div>
  );
}
