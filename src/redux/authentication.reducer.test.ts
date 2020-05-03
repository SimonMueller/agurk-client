import reducer from './authentication.reducer';
import {
  authenticateWithToken,
  authenticationError,
  requestAuthentication,
  unauthenticateWithError,
} from './authentication.action';

describe('Authentication reducer', () => {
  describe('with initial state and after', () => {
    it('authenticate with token', () => {
      expect(reducer(undefined, authenticateWithToken('1234', 'subject')))
        .toEqual({
          subject: 'subject',
          isAuthenticated: true,
          isRequesting: false,
          token: '1234',
          error: undefined,
        });
    });

    it('request authentication', () => {
      expect(reducer(undefined, requestAuthentication()))
        .toEqual({
          subject: '',
          isAuthenticated: false,
          isRequesting: true,
          token: '',
          error: undefined,
        });
    });

    it('authentication error', () => {
      expect(reducer(undefined, authenticationError('some error')))
        .toEqual({
          subject: '',
          isAuthenticated: false,
          isRequesting: false,
          token: '',
          error: 'some error',
        });
    });

    it('unauthenticate with error', () => {
      expect(reducer(undefined, unauthenticateWithError('some error')))
        .toEqual({
          subject: '',
          isAuthenticated: false,
          isRequesting: false,
          token: '',
          error: 'some error',
        });
    });
  });

  describe('with authenticated state and after', () => {
    const initialState = {
      subject: 'subject',
      isAuthenticated: true,
      isRequesting: false,
      token: '1234',
      error: undefined,
    };

    it('unauthenticate with error', () => {
      expect(reducer(initialState, unauthenticateWithError('some error')))
        .toEqual({
          subject: '',
          isAuthenticated: false,
          isRequesting: false,
          token: '',
          error: 'some error',
        });
    });
  });
});
