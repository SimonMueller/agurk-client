import React from 'react';
import {
  List, ListItem, ListItemText, Typography,
} from '@material-ui/core';
import Player from './Player';
import { PlayerState } from '../../redux/game.reducer';

interface Props {
  players: PlayerState[];
}

function byOrderAsc(first: PlayerState, second: PlayerState) {
  return Math.sign(first.order - second.order);
}

function ActiveOrderedPlayers({ players }: Props) {
  const orderedActivePlayers = players.filter((player) => !player.isOut).sort(byOrderAsc);
  const activePlayerItems = orderedActivePlayers.map((player) => (
    <ListItem key={player.id}>
      <ListItemText>
        <Player player={player} />
      </ListItemText>
    </ListItem>
  ));

  if (activePlayerItems.length === 0) {
    return null;
  }

  return (
    <>
      <Typography variant="h2" gutterBottom>Players</Typography>

      <List>{ activePlayerItems }</List>
    </>
  );
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
      <ActiveOrderedPlayers players={players} />
      <OutPlayers players={players} />
    </div>
  );
}
