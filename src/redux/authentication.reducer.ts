import {
  AUTHENTICATE_WITH_TOKEN,
  AUTHENTICATION_ERROR,
  AuthenticationAction,
  UNAUTHENTICATE_WITH_ERROR,
} from './authentication.action';

export interface State {
  subject: string;
  isAuthenticated: boolean,
  token: string,
  error: string | undefined,
}

const INITIAL_STATE: State = {
  subject: '',
  isAuthenticated: false,
  token: '',
  error: undefined,
};

export default function (state: State = INITIAL_STATE, action: AuthenticationAction): State {
  switch (action.type) {
    case AUTHENTICATE_WITH_TOKEN:
      return {
        ...state,
        subject: action.subject,
        isAuthenticated: true,
        token: action.token,
        error: undefined,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.message,
      };
    case UNAUTHENTICATE_WITH_ERROR:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.message,
      };
    default:
      return state;
  }
}
