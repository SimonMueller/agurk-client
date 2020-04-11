import { PlayerId } from 'agurk-shared';
import { LobbyAction, SET_IS_IN_GAME, SET_LOBBY_PLAYERS } from './lobby.action';

export interface State {
  players: PlayerId[];
  isInGame: boolean;
}

const INITIAL_STATE: State = {
  players: [],
  isInGame: false,
};

export default function (state: State = INITIAL_STATE, action: LobbyAction): State {
  switch (action.type) {
    case SET_LOBBY_PLAYERS:
      return {
        ...state,
        players: action.playerIds,
      };
    case SET_IS_IN_GAME:
      return {
        ...state,
        isInGame: action.isInGame,
      };
    default:
      return state;
  }
}
