import { PlayerId } from 'agurk-shared';
import { Action } from 'redux';

export const SET_LOBBY_PLAYERS = 'SET_LOBBY_PLAYERS';

interface SetLobbyPlayersAction extends Action<typeof SET_LOBBY_PLAYERS> {
  readonly playerIds: PlayerId[];
}

export type LobbyAction = SetLobbyPlayersAction;

export function setLobbyPlayers(playerIds: PlayerId[]): LobbyAction {
  return {
    type: SET_LOBBY_PLAYERS,
    playerIds,
  };
}
