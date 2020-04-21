import React, { ChangeEvent, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  Button, Container, TextField, Typography, Box,
} from '@material-ui/core';
import { GameAction } from '../redux/game.action';
import { authenticate } from '../redux/authentication.action';
import { State } from '../redux/root.reducer';
import Message from './Message';

interface Props {
  dispatch: ThunkDispatch<State, undefined, GameAction>;
  error: string | undefined;
}

function Login({ dispatch, error }: Props) {
  const [nameInput, setNameInput] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');

  function handleSubmit(event: FormEvent) {
    dispatch(authenticate({ name: nameInput, token: tokenInput }));
    event.preventDefault();
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setNameInput(event.target.value);
  }

  function handleTokenChange(event: ChangeEvent<HTMLInputElement>) {
    setTokenInput(event.target.value);
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" gutterBottom>Login</Typography>

      <Box marginBottom={2}>
        <form onSubmit={handleSubmit}>
          <Box marginBottom={1}>
            <TextField
              variant="outlined"
              label="Player name"
              id="name"
              value={nameInput}
              onChange={handleNameChange}
              type="text"
              name="name"
              fullWidth
              margin="dense"
              size="medium"
              required
              autoFocus
            />

            <TextField
              variant="outlined"
              label="Access token"
              id="token"
              value={tokenInput}
              onChange={handleTokenChange}
              type="password"
              name="token"
              fullWidth
              margin="dense"
              size="medium"
              required
            />
          </Box>

          <Button size="large" fullWidth variant="contained" color="secondary" type="submit">Log in</Button>
        </form>
      </Box>

      { error && <Message severity="error"><Typography variant="body1">{error}</Typography></Message> }
    </Container>
  );
}

const mapStateToProps = (state: State) => ({
  error: state.authentication.error,
});

export default connect(mapStateToProps)(Login);
