import {
  Card,
  Message,
  MessageName,
} from 'agurk-shared';
import { WebSocketSubject } from 'rxjs/webSocket';
import {
  addPlayerTurn, addPlayerTurnError,
  endCycle,
  endGame,
  endRound,
  GameAction, requestCards, setAvailableCardsInHand,
  startCycle,
  startGame, startPlayerTurn,
  startRound,
} from '../redux/action';

export interface ServerApi {
  sendStartGame: () => void;
  sendPlayCards: (cards: Card[]) => void;
}

function sendStartGame(subject: WebSocketSubject<Message>): void {
  return subject.next({ name: MessageName.START_GAME });
}

function sendPlayCards(subject: WebSocketSubject<Message>, cards: Card[]): void {
  return subject.next({ name: MessageName.PLAY_CARDS, data: cards });
}

export function handleServerMessage(message: Message, dispatch: (action: GameAction) => void) {
  // eslint-disable-next-line default-case
  switch (message.name) {
    case MessageName.BROADCAST_START_GAME:
      return dispatch(startGame(message.data.players));
    case MessageName.BROADCAST_END_GAME:
      return dispatch(endGame(message.data.winner));
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
    case MessageName.BROADCAST_PLAYER_TURN_ERROR:
      return dispatch(addPlayerTurnError(message.data));
    case MessageName.AVAILABLE_CARDS_IN_HAND:
      return dispatch(setAvailableCardsInHand(message.data));
    case MessageName.REQUEST_CARDS:
      return dispatch(requestCards());
    case MessageName.BROADCAST_START_PLAYER_TURN:
      return dispatch(startPlayerTurn(message.data));
  }
}

export function createApi(subject: WebSocketSubject<Message>): ServerApi {
  return {
    sendStartGame: sendStartGame.bind(null, subject),
    sendPlayCards: sendPlayCards.bind(null, subject),
  };
}
