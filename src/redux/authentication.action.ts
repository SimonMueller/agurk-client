import { Action, Dispatch } from 'redux';
import jwtDecode from 'jwt-decode';
import { AuthenticationBody, JwtPayload } from 'agurk-shared';
import { setPlayerId } from './game.action';

const API_SERVER_URI = process.env.REACT_APP_API_SERVER_URI as string;

export const AUTHENTICATE_WITH_TOKEN = 'AUTHENTICATE_WITH_TOKEN';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const UNAUTHENTICATE_WITH_ERROR = 'UNAUTHENTICATE_WITH_ERROR';

interface AuthenticateWithTokenAction extends Action<typeof AUTHENTICATE_WITH_TOKEN>{
  readonly token: string;
  readonly subject: string;
}

interface AuthenticationError extends Action<typeof AUTHENTICATION_ERROR>{
  readonly message: string;
}

interface UnauthenticateWithErrorAction extends Action<typeof UNAUTHENTICATE_WITH_ERROR>{
  readonly message: string;
}

export type AuthenticationAction = AuthenticateWithTokenAction | AuthenticationError | UnauthenticateWithErrorAction;

export function authenticateWithToken(token: string, subject: string): AuthenticationAction {
  return {
    type: AUTHENTICATE_WITH_TOKEN,
    token,
    subject,
  };
}

export function unauthenticateWithError(message: string): AuthenticationAction {
  return {
    type: UNAUTHENTICATE_WITH_ERROR,
    message,
  };
}

export function authenticationError(message: string): AuthenticationAction {
  return {
    type: AUTHENTICATION_ERROR,
    message,
  };
}

function extractSubjectFromToken(token: string) {
  return (jwtDecode(token) as JwtPayload).sub;
}

export function authenticate(data: AuthenticationBody) {
  return function postAuthentication(dispatch: Dispatch<Action>) {
    fetch(`${API_SERVER_URI}/authenticate`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        if (response.ok) {
          const body = await response.json() as { jwt: string };
          const token = body.jwt;
          const subject = extractSubjectFromToken(body.jwt);
          dispatch(authenticateWithToken(token, subject));
          dispatch(setPlayerId(subject));
        } else {
          dispatch(authenticationError('Authentication failed'));
        }
      }, () => dispatch(authenticationError('Could not contact server. Try again later...')));
  };
}
