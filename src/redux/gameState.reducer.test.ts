import { Colors, createJokerCard, ValidatedTurn } from 'agurk-shared';
import reducer, { GameStage } from './gameState.reducer';
import { addPlayerTurn, endCycle, requestCards } from './game.action';

describe('Game state reducer', () => {
  describe('with initial state and after', () => {
    it('add valid player turn', () => {
      const validTurn: ValidatedTurn = {
        playerId: 'testplayer',
        valid: true,
        cards: [createJokerCard(Colors.BLACK)],
      };
      expect(reducer(undefined, addPlayerTurn(validTurn))).toEqual({
        stage: GameStage.START,
        validatedTurns: [validTurn],
        cardsInHand: [],
        isLastCycleOfRound: false,
        turnTimeoutInMillis: undefined,
        turnRetriesLeft: 0,
      });
    });

    it('add invalid player turn', () => {
      const invalidTurn: ValidatedTurn = {
        playerId: 'testplayer',
        valid: false,
        cards: [createJokerCard(Colors.BLACK)],
        invalidReason: 'some reason',
      };
      expect(reducer(undefined, addPlayerTurn(invalidTurn))).toEqual({
        stage: GameStage.START,
        validatedTurns: [invalidTurn],
        cardsInHand: [],
        isLastCycleOfRound: false,
        turnTimeoutInMillis: undefined,
        turnRetriesLeft: 0,
      });
    });

    it('request cards', () => {
      expect(reducer(undefined, requestCards(500, 2))).toEqual({
        stage: GameStage.START,
        validatedTurns: [],
        cardsInHand: [],
        isLastCycleOfRound: false,
        turnTimeoutInMillis: 500,
        turnRetriesLeft: 2,
      });
    });
  });

  describe('with last cycle in round', () => {
    it('end cycle', () => {
      const state = {
        stage: GameStage.IN_CYCLE,
        validatedTurns: [],
        cardsInHand: [],
        isLastCycleOfRound: true,
        turnTimeoutInMillis: 500,
        turnRetriesLeft: 1,
      };

      expect(reducer(state, endCycle([]))).toEqual({
        stage: GameStage.BETWEEN_ROUNDS,
        validatedTurns: [],
        cardsInHand: [],
        isLastCycleOfRound: true,
        turnTimeoutInMillis: 500,
        turnRetriesLeft: 1,
      });
    });
  });
});
