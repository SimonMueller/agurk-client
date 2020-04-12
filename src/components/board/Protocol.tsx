import React from 'react';
import styled from 'styled-components';
import { ProtocolEntry } from '../../redux/game.reducer';
import Collapsible from '../Collapsible';

interface Props {
  entries: ProtocolEntry[];
}

const ScrolledUl = styled.ul`
  overflow-y: auto;
  max-height: 35vh;
`;

export default function Protocol({ entries }: Props) {
  const entryItems = entries.map((entry) => <li>{entry.message}</li>);

  return (
    <Collapsible title="Protocol" collapsedTitle="Protocol">
      <ScrolledUl>
        { entryItems }
      </ScrolledUl>
    </Collapsible>
  );
}
