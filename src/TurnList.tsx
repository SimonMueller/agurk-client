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
  margin-bottom: 1em;
`;

const Box = styled.div`
  padding: 0 0.5em;
`;

export default function TurnList({ turns }: Props) {
  const turnItems = turns.map((turn) => (
    <Box key={generateTurnKey(turn)}>
      <Turn turn={turn} />
    </Box>
  ));

  return (
    <Flex>
      { turnItems }
    </Flex>
  );
}
