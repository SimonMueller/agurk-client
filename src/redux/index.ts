import { combineReducers } from 'redux';
import { reducer as authenticationReducer, State as AuthenticationState } from './authentication';
import { reducer as gameReducer, State as GameState } from './game';
import { reducer as lobbyReducer, State as LobbyState } from './lobby';

export interface State {
  authentication: AuthenticationState;
  game: GameState;
  lobby: LobbyState;
}

export default combineReducers<State>({
  authentication: authenticationReducer,
  game: gameReducer,
  lobby: lobbyReducer,
});
