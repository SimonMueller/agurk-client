import React from 'react';
import {
  List, ListItem, ListItemText, Step, StepContent, StepLabel, Stepper, Typography,
} from '@material-ui/core';
import Player from './Player';
import { PlayerState } from '../../redux/gamePlayers.reducer';

interface Props {
  players: PlayerState[];
}

function byOrderAsc(first: PlayerState, second: PlayerState) {
  return Math.sign(first.order - second.order);
}

function ActiveOrderedPlayers({ players }: Props) {
  const orderedActivePlayers = players.filter((player) => !player.isOut).sort(byOrderAsc);
  const currentActivePlayerIndex = orderedActivePlayers.findIndex((player) => player.isServerRequestingCards);
  const isSingleActivePlayer = orderedActivePlayers.length === 1;
  const activePlayerItems = orderedActivePlayers.map((player) => {
    const isCompleted = currentActivePlayerIndex > player.order || isSingleActivePlayer;
    return (
      <Step
        active={player.isServerRequestingCards}
        completed={isCompleted}
        key={player.id}
      >
        <StepLabel error={player.isOut}>
          <Player player={player} />
        </StepLabel>
        <StepContent>
          {player.outReason}
        </StepContent>
      </Step>
    );
  });

  return activePlayerItems.length
    ? <Stepper orientation="vertical">{ activePlayerItems }</Stepper>
    : null;
}

function OutPlayers({ players }: Props) {
  const outPlayers = players.filter((player) => player.isOut);
  const outPlayerItems = outPlayers.map((player) => (
    <ListItem key={player.id}>
      <ListItemText secondary={player.outReason}>
        <Player player={player} />
      </ListItemText>
    </ListItem>
  ));

  return outPlayerItems.length
    ? <List>{ outPlayerItems }</List>
    : null;
}

export default function PlayerStateList({ players }: Props) {
  return (
    <div>
      <Typography variant="h2" gutterBottom>Players</Typography>

      <ActiveOrderedPlayers players={players} />
      <OutPlayers players={players} />
    </div>
  );
}
