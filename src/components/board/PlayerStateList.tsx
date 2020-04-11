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
    <Collapsible
      title={(
        <h2>
          <span role="img" aria-label="close collapsible">➖</span>
          { ' ' }
          Players
        </h2>
      )}
      collapsedTitle={(
        <h2>
          <span role="img" aria-label="open collapsible">➕</span>
          { ' ' }
          Players
        </h2>
      )}
    >
      <ul>
        { playerItems }
      </ul>
    </Collapsible>
  );
}
