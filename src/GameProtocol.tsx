import React from 'react';
import styled from 'styled-components';
import { ProtocolEntry } from './redux/game';

interface Props {
  entries: ProtocolEntry[];
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
`;

export default function GameProtocol({ entries }: Props) {
  const entryItems = entries.map((entry) => <div><span>{entry.message}</span></div>);

  return (
    <div>
      <h2>Protocol</h2>

      <Flex>
        { entryItems }
      </Flex>
    </div>
  );
}
