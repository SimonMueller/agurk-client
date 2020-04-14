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

export default function PlayerStateList({ players }: Props) {
  const orderedActivePlayers = players.filter((player) => !player.isOut).sort(byOrderAsc);
  const outPlayers = players.filter((player) => player.isOut);
  const activePlayerItems = orderedActivePlayers.map((player) => <Li key={player.id}><Player player={player} /></Li>);
  const outPlayerItems = outPlayers.map((player) => <Li key={player.id}><Player player={player} /></Li>);

  return (
    <div>
      <h2>Players</h2>

      <ol>
        { activePlayerItems }
      </ol>

      { outPlayerItems.length > 0
        && (
        <ul>
          { outPlayerItems }
        </ul>
        )}
    </div>
  );
}
