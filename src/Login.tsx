import React, { FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { GameAction } from './redux/game';
import { authenticate } from './redux/authentication';
import { State } from './redux';

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
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Player name
          <input id="name" value={nameInput} onChange={handleNameChange} type="text" name="name" required />
        </label>

        <br />

        <label htmlFor="token">
          Access token
          <input id="token" value={tokenInput} onChange={handleTokenChange} type="text" name="token" required />
        </label>

        <br />

        <input type="submit" value="Submit" />
      </form>

      { error && <p>{error}</p>}
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  error: state.authentication.error,
});

export default connect(mapStateToProps)(Login);
