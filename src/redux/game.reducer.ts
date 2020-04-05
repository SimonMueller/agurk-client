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

function createProtocolMessage(message: string) {
  return {
    message,
  };
}

function isTurnValidAndFromPlayer(playedTurn: ValidatedTurn, playerId: PlayerId | undefined) {
  return playedTurn.playerId === playerId && playedTurn.valid;
}

export interface PlayerState {
  id: PlayerId;
  isGameWinner: boolean;
  isCycleHighestTurnPlayer: boolean;
  penalties: Penalty[];
  isRoundWinner: boolean;
  isOut: boolean;
  isServerRequestingCards: boolean;
}

export interface ProtocolEntry {
  message: string;
}

export interface State {
  isRunning: boolean;
  playerId: PlayerId | undefined;
  players: PlayerState[];
  validatedTurns: ValidatedTurn[];
  cardsInHand: Card[];
  turnTimeoutInMillis: number | undefined;
  turnRetriesLeft: number,
  protocol: ProtocolEntry[],
}

const INITIAL_STATE: State = {
  isRunning: false,
  playerId: undefined,
  players: [],
  validatedTurns: [],
  cardsInHand: [],
  turnTimeoutInMillis: undefined,
  turnRetriesLeft: 0,
  protocol: [],
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
        })),
        protocol: [
          createProtocolMessage(`${action.winner} wins the game`),
          ...state.protocol,
        ],
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
        protocol: [
          createProtocolMessage(`${action.error.message}`),
          ...state.protocol,
        ],
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
        protocol: action.turn.valid
          ? [
            createProtocolMessage(`
                ${action.turn.playerId} plays
                ${action.turn.cards.length > 1 ? 'cards' : 'card'}
                with
                ${action.turn.cards.length > 1 ? 'ranks' : 'rank'}
                ${action.turn.cards.map((card) => card.rank).join(', ')}`),
            ...state.protocol,
          ]
          : state.protocol,
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
        protocol: [
          createProtocolMessage(`${action.winner} wins the current round`),
          ...action.penalties
            .map((penalty) => createProtocolMessage(`${penalty.playerId} gets a penalty of ${penalty.card.rank}`)),
          ...action.outPlayers
            .map((outPlayer) => createProtocolMessage(`${outPlayer.id} is out because ${outPlayer.reason}`)),
          ...state.protocol,
        ],
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
        protocol: [
          ...action.highestTurnPlayerIds
            .map((playerId) => (createProtocolMessage(`${playerId} played the highest card in cycle`))),
          ...action.outPlayers
            .map((outPlayer) => createProtocolMessage(`${outPlayer.id} is out because ${outPlayer.reason}`)),
          ...state.protocol,
        ],
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
