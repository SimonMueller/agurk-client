import { PlayerId } from 'agurk-shared';
import { Action } from 'redux';

export const SET_LOBBY_PLAYERS = 'SET_LOBBY_PLAYERS';
export const SET_IS_IN_GAME = 'SET_IS_IN_GAME';

interface SetLobbyPlayersAction extends Action<typeof SET_LOBBY_PLAYERS> {
  readonly playerIds: PlayerId[];
}

interface SetIsInGameAction extends Action<typeof SET_IS_IN_GAME> {
  readonly isInGame: boolean;
}

export type LobbyAction = SetLobbyPlayersAction | SetIsInGameAction;

export function setLobbyPlayers(playerIds: PlayerId[]): LobbyAction {
  return {
    type: SET_LOBBY_PLAYERS,
    playerIds,
  };
}

export function setIsInGame(isInGame: boolean): LobbyAction {
  return {
    type: SET_IS_IN_GAME,
    isInGame,
  };
}
