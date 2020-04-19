import React from 'react';
import { PlayerId } from 'agurk-shared';
import {
  List, ListItem, ListItemText, Typography,
} from '@material-ui/core';

interface Props {
  playerIds: PlayerId[];
}

export default function PlayerIdList({ playerIds }: Props) {
  const playerItems = playerIds.map((playerId) => (
    <ListItem key={playerId}>
      <ListItemText>{playerId}</ListItemText>
    </ListItem>
  ));

  return (
    <div>
      <Typography variant="h2" gutterBottom>Players</Typography>

      <List>
        { playerItems }
      </List>
    </div>
  );
}
