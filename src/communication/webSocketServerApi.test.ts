import MessageName from 'agurk-shared/dist/communication/messageName';
import { dispatchWebSocketMessageAsActions } from './webSocketServerApi';
import { setIsInGame, setLobbyPlayers } from '../redux/lobby.action';
import {
  addOutPlayers,
  addPlayerTurn,
  endCycle,
  endGameError,
  endGameSuccess,
  endRound, requestCards,
  setAvailableCardsInHand,
  startCycle,
  startGame, startPlayerTurn,
  startRound,
} from '../redux/game.action';

describe('Websocket server API', () => {
  describe('dispatches correct actions from message', () => {
    it('broadcast start game', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_START_GAME, data: { players: ['testplayer'] },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(startGame(['testplayer']));
      expect(mockedDispatch).toHaveBeenCalledWith(setIsInGame(true));
    });

    it('broadcast lobby players', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_LOBBY_PLAYERS, data: ['testplayer'],
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(setLobbyPlayers(['testplayer']));
    });

    it('broadcast end game (successful)', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_END_GAME, data: { isValid: true, winner: 'testplayer' },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(endGameSuccess('testplayer'));
    });

    it('broadcast end game (error)', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_END_GAME, data: { isValid: false, errorMessage: 'some error' },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(endGameError('some error'));
    });

    it('broadcast start round', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_START_ROUND, data: { players: ['testplayer'] },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(startRound(['testplayer']));
    });

    it('broadcast end round', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_END_ROUND,
        data: {
          outPlayers: [],
          penalties: [],
          winner: 'winningplayer',
        },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(addOutPlayers([]));
      expect(mockedDispatch).toHaveBeenCalledWith(endRound('winningplayer', []));
    });

    it('broadcast start cycle', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_START_CYCLE,
        data: { isLastOfRound: false, orderedPlayers: ['testplayer'] },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(startCycle(['testplayer'], false));
    });

    it('broadcast end cycle', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_END_CYCLE,
        data: { outPlayers: [], highestTurnPlayers: ['testplayer'], delayAfterEndInMillis: 0 },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(addOutPlayers([]));
      expect(mockedDispatch).toHaveBeenCalledWith(endCycle(['testplayer']));
    });

    it('broadcast player turn', () => {
      const mockedDispatch = jest.fn();
      const turn = {
        playerId: 'testplayer', valid: false, cards: [], invalidReason: 'some reason',
      };
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_PLAYER_TURN,
        data: turn,
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(addPlayerTurn(turn));
    });

    it('available cards in hand', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.AVAILABLE_CARDS_IN_HAND,
        data: [],
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(setAvailableCardsInHand([]));
    });

    it('request cards', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.REQUEST_CARDS,
        data: { timeoutInMillis: 1, retriesLeft: 3 },
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(requestCards(1, 3));
    });

    it('broadcast start player turn', () => {
      const mockedDispatch = jest.fn();
      dispatchWebSocketMessageAsActions({
        name: MessageName.BROADCAST_START_PLAYER_TURN,
        data: 'testplayer',
      }, mockedDispatch);

      expect(mockedDispatch).toHaveBeenCalledWith(startPlayerTurn('testplayer'));
    });
  });
});
