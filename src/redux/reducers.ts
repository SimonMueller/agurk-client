import {
  Card, OutPlayer, Penalty, PlayerId, TurnError, ValidatedTurn,
} from 'agurk-shared';
import {
  ADD_PLAYER_TURN,
  ADD_PLAYER_TURN_ERROR,
  END_CYCLE,
  END_GAME,
  END_ROUND,
  GameAction,
  REQUEST_CARDS,
  SET_CARDS_IN_HAND,
  START_CYCLE,
  START_GAME,
  START_PLAYER_TURN,
  START_ROUND,
} from './action';

export interface PlayerState {
  id: PlayerId;
  isGameWinner: boolean;
  isCycleHighestTurnPlayer: boolean;
  penalties: Penalty[];
  isRoundWinner: boolean;
  isOut: boolean;
  isServerRequestingCards: boolean;
}

export interface GameState {
  isGameFinished: boolean;
  players: PlayerState[];
  turnErrors: TurnError[];
  validatedTurns: ValidatedTurn[];
  cardsInHand: Card[];
}

const INITIAL_STATE: GameState = {
  isGameFinished: false,
  players: [],
  turnErrors: [],
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

function filterPenaltiesForPlayerId(penalties: Penalty[], playerId: PlayerId) {
  return penalties.filter((penalty) => penalty.playerId === playerId);
}

function isPlayerWithIdOut(outPlayers: OutPlayer[], playerId: PlayerId) {
  return outPlayers.some((outPlayer) => outPlayer.id === playerId);
}

function isPlayerIdOneOfHighestTurnPlayers(highestTurnPlayerIds: PlayerId[], playeId: PlayerId) {
  return highestTurnPlayerIds.some((playerId) => playerId === playeId);
}

export default function reducer(state: GameState = INITIAL_STATE, action: GameAction): GameState {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        players: action.playerIds.map((playerId) => ({
          ...INITIAL_PLAYER_STATE,
          id: playerId,
        })),
      };
    case END_GAME:
      return {
        ...state,
        isGameFinished: true,
        players: state.players.map((player) => ({
          ...player,
          isGameWinner: player.id === action.winner,
        })),
      };
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
      };
    case ADD_PLAYER_TURN_ERROR:
      return {
        ...state,
        turnErrors: [
          ...state.turnErrors,
          action.error,
        ],
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
        turnErrors: [],
      };
    case END_CYCLE:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          isCycleHighestTurnPlayer: isPlayerIdOneOfHighestTurnPlayers(action.highestTurnPlayerIds, player.id),
          isOut: isPlayerWithIdOut(action.outPlayers, player.id),
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
