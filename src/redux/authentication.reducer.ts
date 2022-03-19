import {
  AUTHENTICATE_WITH_TOKEN,
  AUTHENTICATION_ERROR,
  AuthenticationAction,
  REQUEST_AUTHENTICATION,
  UNAUTHENTICATE_WITH_ERROR,
} from './authentication.action';

export interface State {
  subject: string;
  isAuthenticated: boolean;
  isRequesting: boolean;
  token: string;
  error: string | undefined;
}

const INITIAL_STATE: State = {
  subject: '',
  isAuthenticated: false,
  isRequesting: false,
  token: '',
  error: undefined,
};

export default function reduce(state: State = INITIAL_STATE, action: AuthenticationAction): State {
  switch (action.type) {
    case AUTHENTICATE_WITH_TOKEN:
      return {
        ...state,
        subject: action.subject,
        isAuthenticated: true,
        token: action.token,
        isRequesting: false,
        error: undefined,
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.message,
        isRequesting: false,
      };
    case UNAUTHENTICATE_WITH_ERROR:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.message,
      };
    case REQUEST_AUTHENTICATION:
      return {
        ...state,
        isRequesting: true,
      };
    default:
      return state;
  }
}
