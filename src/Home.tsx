import React, { FormEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { GameState } from './redux/reducers';
import { authenticateWithToken } from './redux/action';

interface Props {
  isAuthenticated: boolean;
  authenticate: (jwt: string) => void;
}

const API_SERVER_URI = process.env.REACT_APP_API_SERVER_URI as string;

function Home({ isAuthenticated, authenticate }: Props) {
  const [nameInput, setNameInput] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await fetch(`${API_SERVER_URI}/authenticate`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameInput,
          token: tokenInput,
        }),
      });

      if (response.ok) {
        const body = await response.json() as { jwt: string };
        authenticate(body.jwt);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleNameChange(event: FormEvent<HTMLInputElement>) {
    setNameInput(event.currentTarget.value);
  }

  function handleTokenChange(event: FormEvent<HTMLInputElement>) {
    setTokenInput(event.currentTarget.value);
  }

  return (
    <div>
      <h1>Home</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Player name:
          <input id="name" value={nameInput} onChange={handleNameChange} type="text" name="name" />
        </label>

        <label htmlFor="token">
          Access token
          <input id="token" value={tokenInput} onChange={handleTokenChange} type="text" name="token" />
        </label>

        <input type="submit" value="Submit" />
      </form>
      { isAuthenticated && <Redirect to="/game" /> }
    </div>
  );
}

const mapDispatchToProps = (dispatch: (action: Action) => void) => ({
  authenticate: (token: string) => dispatch(authenticateWithToken(token)),
});

const mapStateToProps = (state: GameState) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
