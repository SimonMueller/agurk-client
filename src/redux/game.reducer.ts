import {
  Card, cardEquals, OutPlayer, Penalty, PlayerId, ValidatedTurn,
} from 'agurk-shared';
import {
  ADD_PLAYER_TURN,
  END_CYCLE,
  END_GAME_ERROR, END_GAME_SUCCESS,
  END_ROUND,
  GameAction,
  REQUEST_CARDS,
  RESET_GAME,
  SET_CARDS_IN_HAND,
  SET_PLAYER_ID, START_CYCLE,
  START_GAME,
  START_PLAYER_TURN,
  START_ROUND,
} from './game.action';

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

function isTurnValidAndFromPlayer(playedTurn: ValidatedTurn, playerId: PlayerId | undefined) {
  return playedTurn.playerId === playerId && playedTurn.valid;
}

function findPlayerOutReason(outPlayers: OutPlayer[], playerId: PlayerId) {
  return outPlayers.find((outPlayer) => outPlayer.id === playerId)?.reason;
}

export interface PlayerState {
  id: PlayerId;
  isGameWinner: boolean;
  isCycleHighestTurnPlayer: boolean;
  penalties: Penalty[];
  isRoundWinner: boolean;
  isOut: boolean;
  outReason?: string;
  isServerRequestingCards: boolean;
}

export interface ProtocolEntry {
  message: string;
}

export enum GameStage {
  START,
  END,
  BETWEEN_ROUNDS,
  BETWEEN_CYCLES,
  BEFORE_CYCLE,
  IN_CYCLE,
}

export interface State {
  stage: GameStage;
  playerId: PlayerId | undefined;
  players: PlayerState[];
  validatedTurns: ValidatedTurn[];
  cardsInHand: Card[];
  turnTimeoutInMillis: number | undefined;
  turnRetriesLeft: number,
}

const INITIAL_STATE: State = {
  stage: GameStage.START,
  playerId: undefined,
  players: [],
  validatedTurns: [],
  cardsInHand: [],
  turnTimeoutInMillis: undefined,
  turnRetriesLeft: 0,
};

const INITIAL_PLAYER_STATE = {
  isGameWinner: false,
  isRoundWinner: false,
  isCycleHighestTurnPlayer: false,
  penalties: [],
  isOut: false,
  isServerRequestingCards: false,
};

export default function (state: State = INITIAL_STATE, action: GameAction): State {
  switch (action.type) {
    case SET_PLAYER_ID:
      return {
        ...state,
        playerId: action.playerId,
      };
    case START_GAME:
      return {
        ...state,
        stage: GameStage.START,
        players: action.playerIds.map((playerId) => ({
          ...INITIAL_PLAYER_STATE,
          id: playerId,
        })),
      };
    case END_GAME_SUCCESS:
      return {
        ...state,
        stage: GameStage.END,
        players: state.players.map((player) => ({
          ...player,
          isGameWinner: player.id === action.winner,
        })),
      };
    case RESET_GAME:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          ...INITIAL_PLAYER_STATE,
        })),
        ...INITIAL_STATE,
        playerId: state.playerId,
      };
    case END_GAME_ERROR:
      return {
        ...state,
        stage: GameStage.END,
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
        players: state.players.map((player) => ({
          ...player,
          isServerRequestingCards: action.turn.playerId === player.id ? false : player.isServerRequestingCards,
        })),
        cardsInHand: isTurnValidAndFromPlayer(action.turn, state.playerId)
          ? filterAvailableCardsAfterTurn(state.cardsInHand, action.turn)
          : state.cardsInHand,
      };
    case START_ROUND:
      return {
        ...state,
        stage: GameStage.BEFORE_CYCLE,
      };
    case END_ROUND:
      return {
        ...state,
        stage: GameStage.BETWEEN_ROUNDS,
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
        stage: GameStage.IN_CYCLE,
        validatedTurns: [],
      };
    case END_CYCLE:
      return {
        ...state,
        stage: GameStage.BETWEEN_CYCLES,
        players: state.players.map((player) => ({
          ...player,
          isCycleHighestTurnPlayer: isPlayerIdOneOfHighestTurnPlayers(action.highestTurnPlayerIds, player.id),
          isOut: isPlayerWithIdOut(action.outPlayers, player.id),
          outReason: findPlayerOutReason(action.outPlayers, player.id),
        })),
      };
    case REQUEST_CARDS:
      return {
        ...state,
        turnTimeoutInMillis: action.turnTimeoutInMillis,
        turnRetriesLeft: action.turnRetriesLeft,
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
