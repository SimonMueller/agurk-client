import { combineReducers } from 'redux';
import playerReducer, { PlayerState } from './gamePlayers.reducer';
import stateReducer, { State as GameState } from './gameState.reducer';

export interface State {
  state: GameState;
  players: PlayerState[];
}

export default combineReducers<State>({
  players: playerReducer,
  state: stateReducer,
});
