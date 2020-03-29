import React from 'react';
import styled from 'styled-components';
import { PlayerState } from './redux/game';
import Badge from './styled/Badge';

interface Props {
  player: PlayerState;
}

export const PenaltyBadge = styled(Badge)`
  background-color: rgba(227, 38, 54, 0.9);
  color: white;
`;

const PlayerStatus = styled.span`
  text-decoration-line: ${(props: { isOut: boolean }) => (props.isOut ? 'line-through' : 'none')};
`;

export default function Player({ player }: Props) {
  const penaltySum = player.penalties.reduce((accumulator, current) => current.card.rank + accumulator, 0);

  return (
    <>
      <PlayerStatus isOut={player.isOut}>
        { player.isServerRequestingCards && <span>--&gt;</span> }
        {' '}
        { player.id }
        {' '}
        <PenaltyBadge>{penaltySum}</PenaltyBadge>
      </PlayerStatus>
    </>
  );
}
