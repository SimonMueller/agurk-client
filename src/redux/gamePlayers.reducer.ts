import { OutPlayer, Penalty, PlayerId } from 'agurk-shared';
import {
  ADD_OUT_PLAYERS,
  ADD_PLAYER_TURN,
  END_CYCLE,
  END_GAME_SUCCESS,
  END_ROUND,
  GameAction,
  RESET_GAME,
  START_CYCLE,
  START_GAME,
  START_PLAYER_TURN,
} from './game.action';

export interface PlayerState {
  id: PlayerId;
  isGameWinner: boolean;
  isCycleHighestTurnPlayer: boolean;
  penalties: Penalty[];
  isRoundWinner: boolean;
  isOut: boolean;
  outReason?: string;
  isServerRequestingCards: boolean;
  order: number;
}

export type State = PlayerState[];

const LOWEST_ORDER_PRECEDENCE = Number.MAX_SAFE_INTEGER;

function filterPenaltiesForPlayerId(penalties: Penalty[], playerId: PlayerId) {
  return penalties.filter((penalty) => penalty.playerId === playerId);
}

function isPlayerIdOneOfHighestTurnPlayers(highestTurnPlayerIds: PlayerId[], playerId: PlayerId) {
  return highestTurnPlayerIds.some((highestTurnPlayerId) => highestTurnPlayerId === playerId);
}

function isPlayerWithIdOut(outPlayers: OutPlayer[], player: PlayerState) {
  const foundOutPlayer = outPlayers.find((outPlayer) => outPlayer.id === player.id);
  return foundOutPlayer
    ? true
    : player.isOut;
}

function findPlayerOutReason(outPlayers: OutPlayer[], player: PlayerState) {
  const foundOutPlayer = outPlayers.find((outPlayer) => outPlayer.id === player.id);
  return foundOutPlayer
    ? foundOutPlayer.reason
    : player.outReason;
}

function findPlayerOrder(orderedActivePlayerIds: PlayerId[], player: PlayerState) {
  const foundIndex = orderedActivePlayerIds.findIndex((playerId) => playerId === player.id);
  return foundIndex === -1
    ? LOWEST_ORDER_PRECEDENCE
    : foundIndex;
}

const INITIAL_STATE: State = [];

const INITIAL_PLAYER_STATE = {
  isGameWinner: false,
  isRoundWinner: false,
  isCycleHighestTurnPlayer: false,
  penalties: [],
  isOut: false,
  isServerRequestingCards: false,
  order: LOWEST_ORDER_PRECEDENCE,
};

export default function reduce(state = INITIAL_STATE, action: GameAction): State {
  switch (action.type) {
    case ADD_OUT_PLAYERS:
      return state.map((player) => ({
        ...player,
        isOut: isPlayerWithIdOut(action.outPlayers, player),
        outReason: findPlayerOutReason(action.outPlayers, player),
      }));
    case START_GAME:
      return action.playerIds.map((playerId) => ({
        ...INITIAL_PLAYER_STATE,
        id: playerId,
      }));
    case END_GAME_SUCCESS:
      return state.map((player) => ({
        ...player,
        isGameWinner: player.id === action.winner,
      }));
    case RESET_GAME:
      return INITIAL_STATE;
    case ADD_PLAYER_TURN:
      return state.map((player) => ({
        ...player,
        isServerRequestingCards: action.turn.playerId === player.id ? false : player.isServerRequestingCards,
      }));
    case END_ROUND:
      return state.map((player) => ({
        ...player,
        penalties: [
          ...player.penalties,
          ...filterPenaltiesForPlayerId(action.penalties, player.id),
        ],
        isRoundWinner: player.id === action.winner,
      }));
    case START_CYCLE:
      return state.map((player) => ({ ...player, order: findPlayerOrder(action.orderedPlayerIds, player) }));
    case END_CYCLE:
      return state.map((player) => ({
        ...player,
        isCycleHighestTurnPlayer: isPlayerIdOneOfHighestTurnPlayers(action.highestTurnPlayerIds, player.id),
      }));
    case START_PLAYER_TURN:
      return state.map((player) => ({
        ...player,
        isServerRequestingCards: action.playerId === player.id,
      }));
    default:
      return state;
  }
}
