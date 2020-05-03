import reducer from './gamePlayers.reducer';
import { addOutPlayers, resetGame, startGame } from './game.action';

describe('Game players reducer', () => {
  describe('with initial state and after', () => {
    it('start game', () => {
      expect(reducer(undefined, startGame(['testplayer']))).toEqual([
        {
          isGameWinner: false,
          isRoundWinner: false,
          isCycleHighestTurnPlayer: false,
          penalties: [],
          isOut: false,
          isServerRequestingCards: false,
          order: Number.MAX_SAFE_INTEGER,
          id: 'testplayer',
        },
      ]);
    });
  });

  describe('with existing player in initial state and after', () => {
    const initialState = [
      {
        isGameWinner: false,
        isRoundWinner: false,
        isCycleHighestTurnPlayer: false,
        penalties: [],
        isOut: false,
        isServerRequestingCards: false,
        order: Number.MAX_SAFE_INTEGER,
        id: 'testplayer',
      },
    ];

    it('reset game', () => {
      expect(reducer(initialState, resetGame())).toEqual([]);
    });

    it('add out players', () => {
      expect(reducer(initialState, addOutPlayers([{ id: 'testplayer', reason: 'some reason' }])))
        .toEqual([
          {
            isGameWinner: false,
            isRoundWinner: false,
            isCycleHighestTurnPlayer: false,
            penalties: [],
            isOut: true,
            isServerRequestingCards: false,
            order: Number.MAX_SAFE_INTEGER,
            id: 'testplayer',
            outReason: 'some reason',
          },
        ]);
    });
  });

  describe('with existing players of which one is out and after', () => {
    const initialState = [
      {
        isGameWinner: false,
        isRoundWinner: false,
        isCycleHighestTurnPlayer: false,
        penalties: [],
        isOut: true,
        isServerRequestingCards: false,
        order: Number.MAX_SAFE_INTEGER,
        id: 'out player',
        outReason: 'some reason',
      },
      {
        isGameWinner: false,
        isRoundWinner: false,
        isCycleHighestTurnPlayer: false,
        penalties: [],
        isOut: false,
        isServerRequestingCards: false,
        order: Number.MAX_SAFE_INTEGER,
        id: 'active player',
      },
    ];

    it('add out player', () => {
      expect(reducer(initialState, addOutPlayers([{ id: 'active player', reason: 'some other reason' }])))
        .toEqual([
          {
            isGameWinner: false,
            isRoundWinner: false,
            isCycleHighestTurnPlayer: false,
            penalties: [],
            isOut: true,
            isServerRequestingCards: false,
            order: Number.MAX_SAFE_INTEGER,
            id: 'out player',
            outReason: 'some reason',
          },
          {
            isGameWinner: false,
            isRoundWinner: false,
            isCycleHighestTurnPlayer: false,
            penalties: [],
            isOut: true,
            isServerRequestingCards: false,
            order: Number.MAX_SAFE_INTEGER,
            id: 'active player',
            outReason: 'some other reason',
          },
        ]);
    });
  });
});
