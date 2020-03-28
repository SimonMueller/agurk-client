import {
  Card, cardEquals, Error, OutPlayer, Penalty, PlayerId, ValidatedTurn,
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
export const START_CYCLE = 'START_CYCLE';
export const END_CYCLE = 'END_CYCLE';
export const REQUEST_CARDS = 'REQUEST_CARDS';
export const START_PLAYER_TURN = 'START_PLAYER_TURN';
export const RESET_GAME = 'RESET_GAME';

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
  readonly error: Error;
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

interface ResetGameAction extends Action<typeof RESET_GAME>{}


export type GameAction = StartGameAction | EndGameSuccessAction | EndGameErrorAction | SetCardsInHandAction |
  AddPlayerTurnAction | StartRoundAction | EndRoundAction | StartCycleAction | EndCycleAction | RequestCardsAction |
  StartPlayerTurnAction | ResetGameAction | SetPlayerIdAction;

export interface PlayerState {
  id: PlayerId;
  isGameWinner: boolean;
  isCycleHighestTurnPlayer: boolean;
  penalties: Penalty[];
  isRoundWinner: boolean;
  isOut: boolean;
  isServerRequestingCards: boolean;
}

export interface State {
  isRunning: boolean;
  playerId: PlayerId | undefined;
  players: PlayerState[];
  validatedTurns: ValidatedTurn[];
  cardsInHand: Card[];
}

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

export function endGameError(error: Error): GameAction {
  return {
    type: END_GAME_ERROR,
    error,
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

function filterPenaltiesForPlayerId(penalties: Penalty[], playerId: PlayerId) {
  return penalties.filter((penalty) => penalty.playerId === playerId);
}

function isPlayerWithIdOut(outPlayers: OutPlayer[], playerId: PlayerId) {
  return outPlayers.some((outPlayer) => outPlayer.id === playerId);
}

function isPlayerIdOneOfHighestTurnPlayers(highestTurnPlayerIds: PlayerId[], playerId: PlayerId) {
  return highestTurnPlayerIds.some((highestTurnPlayerId) => highestTurnPlayerId === playerId);
}

function filterAvailableCardsAfterTurn(cardsInHand: Card[], turn: ValidatedTurn) {
  return cardsInHand.filter((cardInHand) => turn.cards
    .find((turnCard) => cardEquals(cardInHand, turnCard)) === undefined);
}

const INITIAL_STATE: State = {
  isRunning: false,
  playerId: undefined,
  players: [],
  validatedTurns: [],
  cardsInHand: [],
};

const INITIAL_PLAYER_STATE = {
  isGameWinner: false,
  isRoundWinner: false,
  isCycleHighestTurnPlayer: false,
  penalties: [],
  isOut: false,
  isServerRequestingCards: false,
};

export function reducer(state: State = INITIAL_STATE, action: GameAction): State {
  switch (action.type) {
    case SET_PLAYER_ID:
      return {
        ...state,
        playerId: action.playerId,
      };
    case START_GAME:
      return {
        ...state,
        isRunning: true,
        players: action.playerIds.map((playerId) => ({
          ...INITIAL_PLAYER_STATE,
          id: playerId,
        })),
      };
    case END_GAME_SUCCESS:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          isGameWinner: player.id === action.winner,
          isServerRequestingCards: false,
        })),
        validatedTurns: [],
        cardsInHand: [],
      };
    case RESET_GAME:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          ...INITIAL_PLAYER_STATE,
        })),
        ...INITIAL_STATE,
      };
    case END_GAME_ERROR:
      return state;
    case SET_CARDS_IN_HAND:
      return {
        ...state,
        cardsInHand: action.cards,
      };
    case ADD_PLAYER_TURN:
      return {
        ...state,
        validatedTurns: [
          ...state.validatedTurns,
          action.turn,
        ],
        cardsInHand: (action.turn.playerId === state.playerId && action.turn.valid
          ? filterAvailableCardsAfterTurn(state.cardsInHand, action.turn)
          : state.cardsInHand),
      };
    case START_ROUND:
      return state;
    case END_ROUND:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          penalties: [
            ...player.penalties,
            ...filterPenaltiesForPlayerId(action.penalties, player.id),
          ],
          isOut: isPlayerWithIdOut(action.outPlayers, player.id),
          isRoundWinner: player.id === action.winner,
        })),
      };
    case START_CYCLE:
      return {
        ...state,
        validatedTurns: [],
      };
    case END_CYCLE:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          isCycleHighestTurnPlayer: isPlayerIdOneOfHighestTurnPlayers(action.highestTurnPlayerIds, player.id),
          isOut: isPlayerWithIdOut(action.outPlayers, player.id),
          isServerRequestingCards: false,
        })),
      };
    case REQUEST_CARDS:
      return state;
    case START_PLAYER_TURN:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          isServerRequestingCards: action.playerId === player.id,
        })),
      };
    default:
      return state;
  }
}
