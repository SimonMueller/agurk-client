import {
  Card,
  Message,
  MessageName,
} from 'agurk-shared';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Action } from 'redux';
import {
  addPlayerTurn,
  endCycle,
  endGameError,
  endGameSuccess,
  endRound,
  requestCards,
  resetGame,
  setAvailableCardsInHand,
  startCycle,
  startGame, startPlayerTurn,
  startRound,
} from '../redux/game.action';
import { setLobbyPlayers } from '../redux/lobby.action';

export interface WebSocketGameApi {
  sendStartGame: () => void;
  sendPlayCards: (cards: Card[]) => void;
}

export interface WebSocketAuthenticationApi {
  sendAuthenticate: (token: string) => void;
}

function sendStartGame(subject: WebSocketSubject<Message>): void {
  return subject.next({ name: MessageName.START_GAME });
}

function sendPlayCards(subject: WebSocketSubject<Message>, cards: Card[]): void {
  return subject.next({ name: MessageName.PLAY_CARDS, data: cards });
}

function sendAuthenticate(subject: WebSocketSubject<Message>, token: string): void {
  return subject.next({ name: MessageName.AUTHENTICATE, data: token });
}

export function dispatchWebSocketMessageAsActions(message: Message, dispatch: (action: Action) => void) {
  // eslint-disable-next-line default-case
  switch (message.name) {
    case MessageName.BROADCAST_LOBBY_PLAYERS:
      return dispatch(setLobbyPlayers(message.data));
    case MessageName.BROADCAST_START_GAME:
      return dispatch(startGame(message.data.players));
    case MessageName.BROADCAST_END_GAME:
      if (message.data.isValid) {
        dispatch(endGameSuccess(message.data.winner));
      } else {
        dispatch(endGameError(message.data.error));
      }
      return dispatch(resetGame());
    case MessageName.BROADCAST_START_ROUND:
      return dispatch(startRound(message.data.players));
    case MessageName.BROADCAST_END_ROUND:
      return dispatch(endRound(message.data.winner, message.data.penalties, message.data.outPlayers));
    case MessageName.BROADCAST_START_CYCLE:
      return dispatch(startCycle(message.data.orderedPlayers));
    case MessageName.BROADCAST_END_CYCLE:
      return dispatch(endCycle(message.data.outPlayers, message.data.highestTurnPlayers));
    case MessageName.BROADCAST_PLAYER_TURN:
      return dispatch(addPlayerTurn(message.data));
    case MessageName.AVAILABLE_CARDS_IN_HAND:
      return dispatch(setAvailableCardsInHand(message.data));
    case MessageName.REQUEST_CARDS:
      return dispatch(requestCards(message.data.timeoutInMillis, message.data.retriesLeft));
    case MessageName.BROADCAST_START_PLAYER_TURN:
      return dispatch(startPlayerTurn(message.data));
  }
}

export function createGameApi(subject: WebSocketSubject<Message>): WebSocketGameApi {
  return {
    sendStartGame: sendStartGame.bind(null, subject),
    sendPlayCards: sendPlayCards.bind(null, subject),
  };
}

export function createAuthenticationApi(subject: WebSocketSubject<Message>): WebSocketAuthenticationApi {
  return {
    sendAuthenticate: sendAuthenticate.bind(null, subject),
  };
}
