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

const Box = styled.div`
   padding: 0 0.75em;
`;

export default function TurnList({ turns }: Props) {
  const cardItems = turns.map((turn) => (
    <Box key={generateTurnKey(turn)}>
      <Turn turn={turn} />
    </Box>
  ));

  return (
    <Flex>
      { cardItems }
    </Flex>
  );
}
