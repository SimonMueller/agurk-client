import { PlayerId } from 'agurk-shared';
import { LobbyAction, SET_LOBBY_PLAYERS } from './lobby.action';

export interface State {
  players: PlayerId[];
}

const INITIAL_STATE: State = {
  players: [],
};

export default function (state: State = INITIAL_STATE, action: LobbyAction): State {
  switch (action.type) {
    case SET_LOBBY_PLAYERS:
      return {
        ...state,
        players: action.playerIds,
      };
    default:
      return state;
  }
}
