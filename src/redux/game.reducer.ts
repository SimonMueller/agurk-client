import {
  Card, cardEquals, OutPlayer, Penalty, PlayerId, ValidatedTurn,
} from 'agurk-shared';
import {
  ADD_OUT_PLAYERS,
  ADD_PLAYER_TURN,
  END_CYCLE,
  END_GAME_ERROR,
  END_GAME_SUCCESS,
  END_ROUND,
  GameAction,
  REQUEST_CARDS,
  RESET_GAME,
  SET_CARDS_IN_HAND,
  SET_PLAYER_ID,
  START_CYCLE,
  START_GAME,
  START_PLAYER_TURN,
  START_ROUND,
} from './game.action';

function filterPenaltiesForPlayerId(penalties: Penalty[], playerId: PlayerId) {
  return penalties.filter((penalty) => penalty.playerId === playerId);
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

function isPlayerWithIdOut(outPlayers: OutPlayer[], player: PlayerState) {
  return player.isOut
    ? true
    : outPlayers.some((outPlayer) => outPlayer.id === player.id);
}

function findPlayerOutReason(outPlayers: OutPlayer[], player: PlayerState) {
  return outPlayers.find((outPlayer) => outPlayer.id === player.id)?.reason;
}

function findPlayerOrder(orderedPlayerIds: PlayerId[], player: PlayerState) {
  return orderedPlayerIds.findIndex((playerId) => playerId === player.id);
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
  order: number;
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
  isLastCycleOfRound: boolean;
  turnTimeoutInMillis: number | undefined;
  turnRetriesLeft: number;
}

const INITIAL_STATE: State = {
  stage: GameStage.START,
  playerId: undefined,
  players: [],
  validatedTurns: [],
  cardsInHand: [],
  isLastCycleOfRound: false,
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
  order: -1,
};

export default function (state: State = INITIAL_STATE, action: GameAction): State {
  switch (action.type) {
    case SET_PLAYER_ID:
      return {
        ...state,
        playerId: action.playerId,
      };
    case ADD_OUT_PLAYERS:
      return {
        ...state,
        players: state.players.map((player) => ({
          ...player,
          isOut: isPlayerWithIdOut(action.outPlayers, player),
          outReason: findPlayerOutReason(action.outPlayers, player),
        })),
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
          isRoundWinner: player.id === action.winner,
        })),
      };
    case START_CYCLE:
      return {
        ...state,
        players: state.players
          .map((player) => ({ ...player, order: findPlayerOrder(action.orderedPlayerIds, player) })),
        stage: GameStage.IN_CYCLE,
        validatedTurns: [],
        isLastCycleOfRound: action.isLastOfRound,
      };
    case END_CYCLE:
      return {
        ...state,
        stage: GameStage.BETWEEN_CYCLES,
        players: state.players.map((player) => ({
          ...player,
          isCycleHighestTurnPlayer: isPlayerIdOneOfHighestTurnPlayers(action.highestTurnPlayerIds, player.id),
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
