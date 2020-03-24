import {
  Card, cardEquals, JwtPayload, OutPlayer, Penalty, PlayerId, ValidatedTurn,
} from 'agurk-shared';
import jwtDecode from 'jwt-decode';
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
  SET_LOBBY_PLAYERS,
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

export interface State {
  authentication: {
    subject: PlayerId;
    isAuthenticated: boolean,
    token: string,
  },
  lobby: {
    players: PlayerId[],
  },
  game: {
    isRunning: boolean;
    players: PlayerState[];
    validatedTurns: ValidatedTurn[];
    cardsInHand: Card[];
  }
}

const INITIAL_STATE: State = {
  authentication: {
    subject: '',
    isAuthenticated: false,
    token: '',
  },
  lobby: {
    players: [],
  },
  game: {
    isRunning: false,
    players: [],
    validatedTurns: [],
    cardsInHand: [],
  },
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

function isPlayerIdOneOfHighestTurnPlayers(highestTurnPlayerIds: PlayerId[], playerId: PlayerId) {
  return highestTurnPlayerIds.some((highestTurnPlayerId) => highestTurnPlayerId === playerId);
}

function filterAvailableCardsAfterTurn(cardsInHand: Card[], turn: ValidatedTurn) {
  return cardsInHand.filter((cardInHand) => turn.cards
    .find((turnCard) => cardEquals(cardInHand, turnCard)) === undefined);
}

function extractSubjectFromToken(token: string) {
  return (jwtDecode(token) as JwtPayload).sub;
}

export default function reducer(state: State = INITIAL_STATE, action: GameAction): State {
  switch (action.type) {
    case SET_LOBBY_PLAYERS:
      return {
        ...state,
        lobby: {
          ...state.lobby,
          players: action.playerIds,
        },
      };
    case START_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          isRunning: true,
          players: action.playerIds.map((playerId) => ({
            ...INITIAL_PLAYER_STATE,
            id: playerId,
          })),
        },
      };
    case END_GAME_SUCCESS:
      return {
        ...state,
        game: {
          ...state.game,
          players: state.game.players.map((player) => ({
            ...player,
            isGameWinner: player.id === action.winner,
            isServerRequestingCards: false,
          })),
          validatedTurns: [],
          cardsInHand: [],
        },
      };
    case RESET_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          validatedTurns: [],
          players: state.game.players.map((player) => ({
            ...player,
            isServerRequestingCards: false,
          })),
          cardsInHand: [],
          isRunning: false,
        },
      };
    case END_GAME_ERROR:
      return state;
    case SET_CARDS_IN_HAND:
      return {
        ...state,
        game: {
          ...state.game,
          cardsInHand: action.cards,
        },
      };
    case ADD_PLAYER_TURN:
      return {
        ...state,
        game: {
          ...state.game,
          validatedTurns: [
            ...state.game.validatedTurns,
            action.turn,
          ],
          cardsInHand: (action.turn.playerId === state.authentication.subject && action.turn.valid
            ? filterAvailableCardsAfterTurn(state.game.cardsInHand, action.turn)
            : state.game.cardsInHand),
        },
      };
    case START_ROUND:
      return state;
    case END_ROUND:
      return {
        ...state,
        game: {
          ...state.game,
          players: state.game.players.map((player) => ({
            ...player,
            penalties: [
              ...player.penalties,
              ...filterPenaltiesForPlayerId(action.penalties, player.id),
            ],
            isOut: isPlayerWithIdOut(action.outPlayers, player.id),
            isRoundWinner: player.id === action.winner,
          })),
        },
      };
    case START_CYCLE:
      return {
        ...state,
        game: {
          ...state.game,
          validatedTurns: [],
        },
      };
    case END_CYCLE:
      return {
        ...state,
        game: {
          ...state.game,
          players: state.game.players.map((player) => ({
            ...player,
            isCycleHighestTurnPlayer: isPlayerIdOneOfHighestTurnPlayers(action.highestTurnPlayerIds, player.id),
            isOut: isPlayerWithIdOut(action.outPlayers, player.id),
          })),
        },
      };
    case REQUEST_CARDS:
      return state;
    case AUTHENTICATE_WITH_TOKEN:
      return {
        ...state,
        authentication: {
          subject: extractSubjectFromToken(action.jwt),
          isAuthenticated: true,
          token: action.jwt,
        },
      };
    case START_PLAYER_TURN:
      return {
        ...state,
        game: {
          ...state.game,
          players: state.game.players.map((player) => ({
            ...player,
            isServerRequestingCards: action.playerId === player.id,
          })),
        },
      };
    default:
      return state;
  }
}
