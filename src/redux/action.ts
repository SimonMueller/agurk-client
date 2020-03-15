import {
  Card, OutPlayer, Penalty, PlayerId, TurnError, ValidatedTurn,
} from 'agurk-shared';
import { Action } from 'redux';

export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const SET_CARDS_IN_HAND = 'SET_CARDS_IN_HAND';
export const ADD_PLAYER_TURN = 'ADD_PLAYER_TURN';
export const ADD_PLAYER_TURN_ERROR = 'ADD_PLAYER_TURN_ERROR';
export const START_ROUND = 'START_ROUND';
export const END_ROUND = 'END_ROUND';
export const START_CYCLE = 'START_CYCLE';
export const END_CYCLE = 'END_CYCLE';
export const REQUEST_CARDS = 'REQUEST_CARDS';
export const START_PLAYER_TURN = 'START_PLAYER_TURN';

interface StartGameAction extends Action<typeof START_GAME>{
  readonly playerIds: PlayerId[];
}

interface EndGameAction extends Action<typeof END_GAME>{
  readonly winner: PlayerId;
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

interface AddPlayerTurnErrorAction extends Action<typeof ADD_PLAYER_TURN_ERROR>{
  readonly error: TurnError;
}

interface StartRoundAction extends Action<typeof START_ROUND>{
  readonly playerIds: PlayerId[];
}

interface EndRoundAction extends Action<typeof END_ROUND>{
  readonly winner: PlayerId | undefined;
  readonly penalties: Penalty[];
  readonly outPlayers: OutPlayer[];
}

interface StartCycleAction extends Action<typeof START_CYCLE>{
  readonly orderedPlayerIds: PlayerId[];
}

interface EndCycleAction extends Action<typeof END_CYCLE>{
  readonly highestTurnPlayerIds: PlayerId[];
  readonly outPlayers: OutPlayer[];
}

interface RequestCardsAction extends Action<typeof REQUEST_CARDS>{}

export type GameAction = StartGameAction | EndGameAction | SetCardsInHandAction | AddPlayerTurnAction |
  AddPlayerTurnErrorAction | StartRoundAction | EndRoundAction | StartCycleAction |
  EndCycleAction | RequestCardsAction | StartPlayerTurnAction;

export function startGame(playerIds: PlayerId[]): GameAction {
  return {
    type: START_GAME,
    playerIds,
  };
}

export function endGame(winner: PlayerId): GameAction {
  return {
    type: END_GAME,
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

export function addPlayerTurnError(error: TurnError): GameAction {
  return {
    type: ADD_PLAYER_TURN_ERROR,
    error,
  };
}

export function startRound(playerIds: PlayerId[]): GameAction {
  return {
    type: START_ROUND,
    playerIds,
  };
}

export function endRound(winner: PlayerId | undefined, penalties: Penalty[], outPlayers: OutPlayer[]): GameAction {
  return {
    type: END_ROUND,
    winner,
    penalties,
    outPlayers,
  };
}

export function startCycle(orderedPlayerIds: PlayerId[]): GameAction {
  return {
    type: START_CYCLE,
    orderedPlayerIds,
  };
}

export function endCycle(outPlayers: OutPlayer[], highestTurnPlayerIds: PlayerId[]): GameAction {
  return {
    type: END_CYCLE,
    highestTurnPlayerIds,
    outPlayers,
  };
}

export function requestCards(): GameAction {
  return {
    type: REQUEST_CARDS,
  };
}
