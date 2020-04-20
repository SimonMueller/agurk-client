import { combineReducers } from 'redux';
import authenticationReducer, { State as AuthenticationState } from './authentication.reducer';
import gameReducer, { State as GameState } from './game.reducer';
import lobbyReducer, { State as LobbyState } from './lobby.reducer';

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
