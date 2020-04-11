import React from 'react';
import styled from 'styled-components';
import { ProtocolEntry } from '../../redux/game.reducer';

interface Props {
  entries: ProtocolEntry[];
}

const ScrolledUl = styled.ul`
  overflow-y: auto;
  max-height: 25vh;
`;

export default function Protocol({ entries }: Props) {
  const entryItems = entries.map((entry) => <li>{entry.message}</li>);

  return (
    <div>
      <h2>Protocol</h2>

      <ScrolledUl>
        { entryItems }
      </ScrolledUl>
    </div>
  );
}
