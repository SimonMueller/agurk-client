import React from 'react';
import styled, { keyframes } from 'styled-components';
import Badge from '../Badge';
import { PlayerState } from '../../redux/gamePlayers.reducer';

interface Props {
  player: PlayerState;
}

const opacityPulse = keyframes`
  0% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.6;
  }
`;

const PlayerName = styled.span`
  text-decoration-line: ${(props: { isOut: boolean }) => (props.isOut ? 'line-through' : 'none')};
`;

const ActivePlayerName = styled(PlayerName)`
  animation: ${opacityPulse} 2s infinite;
  font-weight: bold;
`;

const InactivePlayerName = styled(PlayerName)`
  font-weight: normal;
`;

export default function Player({ player }: Props) {
  const penaltySum = player.penalties.reduce((accumulator, current) => current.card.rank + accumulator, 0);

  return (
    <>
      { player.isServerRequestingCards
        ? <ActivePlayerName isOut={player.isOut}>{ player.id }</ActivePlayerName>
        : <InactivePlayerName isOut={player.isOut}>{ player.id }</InactivePlayerName>}
      <Badge severity="warning">
        Penalty
        {' '}
        {penaltySum}
      </Badge>
    </>
  );
}
