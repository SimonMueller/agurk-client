import { PlayerId } from 'agurk-shared';
import { Action } from 'redux';

export const SET_LOBBY_PLAYERS = 'SET_LOBBY_PLAYERS';

interface SetLobbyPlayersAction extends Action<typeof SET_LOBBY_PLAYERS> {
  readonly playerIds: PlayerId[];
}

export type LobbyAction = SetLobbyPlayersAction;

export interface State {
  players: PlayerId[];
}

export function setLobbyPlayers(playerIds: PlayerId[]): LobbyAction {
  return {
    type: SET_LOBBY_PLAYERS,
    playerIds,
  };
}

const INITIAL_STATE: State = {
  players: [],
};

export function reducer(state: State = INITIAL_STATE, action: LobbyAction): State {
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
