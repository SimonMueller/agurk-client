import { Card, PlayerId, ValidatedTurn } from 'agurk-shared';
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
  START_ROUND,
} from './game.action';

export enum GameStage {
  START,
  END,
  BETWEEN_ROUNDS,
  BETWEEN_CYCLES,
  BEFORE_CYCLE,
  IN_CYCLE,
}

export interface State {
  playerId: PlayerId | undefined;
  stage: GameStage;
  validatedTurns: ValidatedTurn[];
  cardsInHand: Card[];
  isLastCycleOfRound: boolean;
  turnTimeoutInMillis: number | undefined;
  turnRetriesLeft: number;
}

const INITIAL_STATE: State = {
  stage: GameStage.START,
  playerId: undefined,
  validatedTurns: [],
  cardsInHand: [],
  isLastCycleOfRound: false,
  turnTimeoutInMillis: undefined,
  turnRetriesLeft: 0,
};

export default function (state = INITIAL_STATE, action: GameAction): State {
  switch (action.type) {
    case SET_PLAYER_ID:
      return { ...state, playerId: action.playerId };
    case ADD_OUT_PLAYERS:
      return state;
    case START_GAME:
      return { ...state, stage: GameStage.START };
    case END_GAME_SUCCESS:
      return { ...state, stage: GameStage.END };
    case RESET_GAME:
      return {
        ...INITIAL_STATE,
        playerId: state.playerId,
      };
    case END_GAME_ERROR:
      return { ...state, stage: GameStage.END };
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
      return { ...state, stage: GameStage.BEFORE_CYCLE };
    case END_ROUND:
      return { ...state, stage: GameStage.BETWEEN_ROUNDS };
    case START_CYCLE:
      return {
        ...state,
        stage: GameStage.IN_CYCLE,
        validatedTurns: [],
        isLastCycleOfRound: action.isLastOfRound,
      };
    case END_CYCLE:
      return { ...state, stage: GameStage.BETWEEN_CYCLES };
    case REQUEST_CARDS:
      return {
        ...state,
        turnTimeoutInMillis: action.turnTimeoutInMillis,
        turnRetriesLeft: action.turnRetriesLeft,
      };
    default:
      return state;
  }
}
