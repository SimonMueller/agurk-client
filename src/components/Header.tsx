import React from 'react';
import {
  AppBar, Button, Toolbar, Typography,
} from '@material-ui/core';

export default function Header() {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href="./">
            <Typography variant="h5">
              Agurk
            </Typography>
          </Button>
          <Button
            color="inherit"
            target="_blank"
            href="https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules"
          >
            <Typography variant="body1">
              Rules
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}
