import React from 'react';
import styled from 'styled-components';
import { ProtocolEntry } from './redux/game.reducer';

interface Props {
  entries: ProtocolEntry[];
}

const Container = styled.div`
  max-height: 25vh;
`;

export default function Protocol({ entries }: Props) {
  const entryItems = entries.map((entry) => <li>{entry.message}</li>);

  return (
    <Container>
      <h2>Protocol</h2>

      <ul>
        { entryItems }
      </ul>
    </Container>
  );
}
