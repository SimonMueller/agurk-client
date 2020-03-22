import {
  Card, OutPlayer, Penalty, PlayerId, ValidatedTurn,
} from 'agurk-shared';
import {
  ADD_PLAYER_TURN,
  AUTHENTICATE_WITH_TOKEN,
  END_CYCLE,
  END_GAME_ERROR,
  END_GAME_SUCCESS,
  END_ROUND,
  GameAction,
  REQUEST_CARDS,
  RESET_GAME,
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
  authentication: {
    isAuthenticated: boolean,
    jwt: string,
  },
  isGameFinished: boolean;
  players: PlayerState[];
  validatedTurns: ValidatedTurn[];
  cardsInHand: Card[];
}

const INITIAL_STATE: GameState = {
  authentication: {
    isAuthenticated: false,
    jwt: '',
  },
  isGameFinished: false,
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
    case END_GAME_SUCCESS:
      return {
        ...state,
        isGameFinished: true,
        players: state.players.map((player) => ({
          ...player,
          isGameWinner: player.id === action.winner,
          isServerRequestingCards: false,
        })),
        cardsInHand: [],
        validatedTurns: [],
      };
    case RESET_GAME:
      return {
        ...state,
        cardsInHand: [],
        validatedTurns: [],
        players: state.players.map((player) => ({
          ...player,
          isServerRequestingCards: false,
        })),
      };
    case END_GAME_ERROR:
      return {
        ...state,
        isGameFinished: true,
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
        })),
      };
    case REQUEST_CARDS:
      return state;
    case AUTHENTICATE_WITH_TOKEN:
      return {
        ...state,
        authentication: {
          isAuthenticated: true,
          jwt: action.jwt,
        },
      };
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