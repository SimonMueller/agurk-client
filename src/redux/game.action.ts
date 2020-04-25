import {
  Card, OutPlayer, Penalty, PlayerId, ValidatedTurn,
} from 'agurk-shared';
import { Action } from 'redux';

export const SET_PLAYER_ID = 'SET_PLAYER_ID';
export const START_GAME = 'START_GAME';
export const END_GAME_SUCCESS = 'END_GAME_SUCCESS';
export const END_GAME_ERROR = 'END_GAME_ERROR';
export const SET_CARDS_IN_HAND = 'SET_CARDS_IN_HAND';
export const ADD_PLAYER_TURN = 'ADD_PLAYER_TURN';
export const START_ROUND = 'START_ROUND';
export const END_ROUND = 'END_ROUND';
export const ADD_OUT_PLAYERS = 'SET_OUT_PLAYERS';
export const START_CYCLE = 'START_CYCLE';
export const END_CYCLE = 'END_CYCLE';
export const REQUEST_CARDS = 'REQUEST_CARDS';
export const START_PLAYER_TURN = 'START_PLAYER_TURN';
export const RESET_GAME = 'RESET_GAME';

interface AddOutPlayersAction extends Action<typeof ADD_OUT_PLAYERS> {
  readonly outPlayers: OutPlayer[];
}

interface SetPlayerIdAction extends Action<typeof SET_PLAYER_ID> {
  readonly playerId: PlayerId;
}

interface StartGameAction extends Action<typeof START_GAME> {
  readonly playerIds: PlayerId[];
}

interface EndGameSuccessAction extends Action<typeof END_GAME_SUCCESS>{
  readonly winner: PlayerId;
}

interface EndGameErrorAction extends Action<typeof END_GAME_ERROR>{
  readonly errorMessage: string;
}

interface SetCardsInHandAction extends Action<typeof SET_CARDS_IN_HAND>{
  readonly cards: Card[];
}

interface StartPlayerTurnAction extends Action<typeof START_PLAYER_TURN>{
  readonly playerId: PlayerId;
}

interface AddPlayerTurnAction extends Action<typeof ADD_PLAYER_TURN>{
  readonly turn: ValidatedTurn;
}

interface StartRoundAction extends Action<typeof START_ROUND>{
  readonly playerIds: PlayerId[];
}

interface EndRoundAction extends Action<typeof END_ROUND>{
  readonly winner: PlayerId | undefined;
  readonly penalties: Penalty[];
}

interface StartCycleAction extends Action<typeof START_CYCLE>{
  readonly orderedPlayerIds: PlayerId[];
  readonly isLastOfRound: boolean;
}

interface EndCycleAction extends Action<typeof END_CYCLE>{
  readonly highestTurnPlayerIds: PlayerId[];
}

interface RequestCardsAction extends Action<typeof REQUEST_CARDS>{
  readonly turnTimeoutInMillis: number;
  readonly turnRetriesLeft: number;
}

interface ResetGameAction extends Action<typeof RESET_GAME>{}


export type GameAction = StartGameAction | EndGameSuccessAction | EndGameErrorAction | SetCardsInHandAction |
  AddPlayerTurnAction | StartRoundAction | EndRoundAction | StartCycleAction | EndCycleAction | RequestCardsAction |
  StartPlayerTurnAction | ResetGameAction | SetPlayerIdAction | AddOutPlayersAction;

export function setPlayerId(playerId: string): GameAction {
  return {
    type: SET_PLAYER_ID,
    playerId,
  };
}

export function startGame(playerIds: PlayerId[]): GameAction {
  return {
    type: START_GAME,
    playerIds,
  };
}

export function resetGame(): GameAction {
  return {
    type: RESET_GAME,
  };
}

export function endGameError(errorMessage: string): GameAction {
  return {
    type: END_GAME_ERROR,
    errorMessage,
  };
}

export function endGameSuccess(winner: PlayerId): GameAction {
  return {
    type: END_GAME_SUCCESS,
    winner,
  };
}

export function setAvailableCardsInHand(cards: Card[]): GameAction {
  return {
    type: SET_CARDS_IN_HAND,
    cards,
  };
}

export function addPlayerTurn(turn: ValidatedTurn): GameAction {
  return {
    type: ADD_PLAYER_TURN,
    turn,
  };
}

export function startPlayerTurn(playerId: PlayerId): GameAction {
  return {
    type: START_PLAYER_TURN,
    playerId,
  };
}

export function startRound(playerIds: PlayerId[]): GameAction {
  return {
    type: START_ROUND,
    playerIds,
  };
}

export function addOutPlayers(outPlayers: OutPlayer[]): GameAction {
  return {
    type: ADD_OUT_PLAYERS,
    outPlayers,
  };
}

export function endRound(winner: PlayerId | undefined, penalties: Penalty[]): GameAction {
  return {
    type: END_ROUND,
    winner,
    penalties,
  };
}

export function startCycle(orderedPlayerIds: PlayerId[], isLastOfRound: boolean): GameAction {
  return {
    type: START_CYCLE,
    orderedPlayerIds,
    isLastOfRound,
  };
}

export function endCycle(highestTurnPlayerIds: PlayerId[]): GameAction {
  return {
    type: END_CYCLE,
    highestTurnPlayerIds,
  };
}

export function requestCards(turnTimeoutInMillis: number, turnRetriesLeft: number): GameAction {
  return {
    type: REQUEST_CARDS,
    turnTimeoutInMillis,
    turnRetriesLeft,
  };
}
