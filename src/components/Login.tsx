import React, { FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components';
import { PrimaryButton } from './styled/Button';
import { GameAction } from '../redux/game.action';
import { authenticate } from '../redux/authentication.action';
import { State } from '../redux';
import ErrorMessage from './styled/Message';

interface Props {
  dispatch: ThunkDispatch<State, undefined, GameAction>;
  error: string | undefined;
}

const Container = styled.div`
  max-width: 500px;
  margin: auto;
`;

const Input = styled.input`
  padding: 0.5em;
  width: 100%;
  height: 3em;
  margin-bottom: 1em;
  display: block;
  font-size: 1em;
`;

const SpacedForm = styled.form`
  margin-bottom: 1em;
`;

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
    <Container>
      <h2>Login</h2>

      <SpacedForm onSubmit={handleSubmit}>
        <Input
          placeholder="Player name"
          id="name"
          value={nameInput}
          onChange={handleNameChange}
          type="text"
          name="name"
          required
        />

        <Input
          placeholder="Access token"
          id="token"
          value={tokenInput}
          onChange={handleTokenChange}
          type="password"
          name="token"
          required
        />

        <PrimaryButton type="submit">Log in</PrimaryButton>
      </SpacedForm>

      { error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

const mapStateToProps = (state: State) => ({
  error: state.authentication.error,
});

export default connect(mapStateToProps)(Login);
