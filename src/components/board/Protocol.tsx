import React from 'react';
import styled from 'styled-components';
import { ProtocolEntry } from '../../redux/game.reducer';
import Collapsible from '../Collapsible';

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
    <Collapsible
      title={(
        <h2>
          <span role="img" aria-label="close collapsible">➖</span>
          { ' ' }
          Protocol
        </h2>
      )}
      collapsedTitle={(
        <h2>
          <span role="img" aria-label="open collapsible">➕</span>
          { ' ' }
          Protocol
        </h2>
      )}
    >
      <ScrolledUl>
        { entryItems }
      </ScrolledUl>
    </Collapsible>
  );
}
