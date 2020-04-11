import React from 'react';
import { ValidatedTurn } from 'agurk-shared';
import styled from 'styled-components';
import Turn, { generateTurnKey } from './Turn';

interface Props {
  turns: ValidatedTurn[];
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function TurnList({ turns }: Props) {
  const turnItems = turns.map((turn) => (<Turn key={generateTurnKey(turn)} turn={turn} />));

  return (
    <Flex>
      { turnItems }
    </Flex>
  );
}
