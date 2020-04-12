import React from 'react';
import styled from 'styled-components';
import Player from './Player';
import { PlayerState } from '../../redux/game.reducer';
import Collapsible from '../Collapsible';

interface Props {
  players: PlayerState[];
}

const Li = styled.li`
  margin-bottom: 0.5em;
`;

export default function PlayerStateList({ players }: Props) {
  const playerItems = players.map((player) => <Li key={player.id}><Player player={player} /></Li>);

  return (
    <Collapsible title="Players" collapsedTitle="Players">
      <ul>
        { playerItems }
      </ul>
    </Collapsible>
  );
}
