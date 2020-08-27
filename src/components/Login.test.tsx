import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../utils/test-utils';
import Login from './Login';

describe('Login component', () => {
  const playerNameLabelText = 'Player name *';
  const accessTokenLabelText = 'Access token *';

  it('shows required player name input', () => {
    const { getByLabelText } = render(<Login />);
    const input = getByLabelText(playerNameLabelText);

    expect(input).toBeVisible();
    expect(input).toBeRequired();
  });

  it('shows required access token input of type password', () => {
    const { getByLabelText } = render(<Login />);
    const input = getByLabelText(accessTokenLabelText);

    expect(input).toBeVisible();
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toBeRequired();
  });

  it('player name input is empty initially', () => {
    const { getByLabelText } = render(<Login />);
    const input = getByLabelText(playerNameLabelText);

    expect(input).toHaveValue('');
  });

  it('contains player name after user input', () => {
    const { getByLabelText } = render(<Login />);
    const input = getByLabelText(playerNameLabelText);

    userEvent.type(input, 'player 42');

    expect(input).toHaveValue('player 42');
  });

  it('contains access token after user input', () => {
    const { getByLabelText } = render(<Login />);
    const input = getByLabelText(accessTokenLabelText);

    userEvent.type(input, 'supersecret');

    expect(input).toHaveValue('supersecret');
  });

  it('log in button is visible', () => {
    const { getByRole } = render(<Login />);
    const button = getByRole('button', { name: 'Log in' });

    expect(button).toBeVisible();
  });
});
