import React, { FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { FullWidthPrimaryButton } from './styled/Button';
import { GameAction } from './redux/game';
import { authenticate } from './redux/authentication';
import { State } from './redux';
import { ErrorMessage, Input, Label } from './styled/Form';

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

  function handleNameChange(event: FormEvent<HTMLInputElement>) {
    setNameInput(event.currentTarget.value);
  }

  function handleTokenChange(event: FormEvent<HTMLInputElement>) {
    setTokenInput(event.currentTarget.value);
  }

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Player name</Label>
        <Input id="name" value={nameInput} onChange={handleNameChange} type="text" name="name" required />

        <Label htmlFor="name">Access token</Label>
        <Input id="token" value={tokenInput} onChange={handleTokenChange} type="password" name="token" required />

        <FullWidthPrimaryButton type="submit">Log in</FullWidthPrimaryButton>
      </form>

      <br />

      { error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}

const mapStateToProps = (state: State) => ({
  error: state.authentication.error,
});

export default connect(mapStateToProps)(Login);
