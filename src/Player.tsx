import React from 'react';
import styled from 'styled-components';
import { PlayerState } from './redux/game';

interface Props {
  player: PlayerState;
}

const PlayerStatus = styled.span`
  textDecorationLine: ${(props: { isOut: boolean }) => (props.isOut ? 'line-through' : 'none')};
`;

const Badge = styled.span`
  background-color: rgba(227, 38, 54, 0.9);
  color: white;
  border-radius: 0.2em;
  font-size: 0.75em;
  padding: 0.1rem;
  font-weight: bold;
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
        <Badge>
          Penalty:
          {penaltySum}
        </Badge>
      </PlayerStatus>
    </>
  );
}
