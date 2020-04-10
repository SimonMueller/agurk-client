import React from 'react';
import { PlayerId } from 'agurk-shared';
import styled from 'styled-components';

interface Props {
  playerIds: PlayerId[];
}

const Element = styled.li`
  margin-bottom: 0.5em;
`;

export default function PlayerIdList({ playerIds }: Props) {
  const playerItems = playerIds.map((playerId) => <Element key={playerId}>{playerId}</Element>);

  return (
    <div>
      <h2>Players</h2>

      <ul>
        { playerItems }
      </ul>
    </div>
  );
}
