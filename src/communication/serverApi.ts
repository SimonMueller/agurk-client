import {
  Observable, pipe, UnaryFunction,
} from 'rxjs';
import {
  Card, Message, Error, MessageName, Penalty, PlayerId, TurnError, ValidatedTurn, BroadcastPlayerTurn,
  BroadcastPlayerOrder, DealtCards, BroadcastPlayers, BroadcastPlayerTurnError, BroadcastRoundWinner,
  BroadcastPenalties, OutPlayer, BroadcastOutPlayers, BroadcastGameWinner, BroadcastStartPlayerTurn,
  BroadcastGameError, AvailableCards, BroadcastStartRound, BroadcastEndRound, BroadcastStartCycle,
  BroadcastEndCycle, RequestCards, BroadcastStartGame, BroadcastEndGame,
} from 'agurk-shared';
import { filter, map } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';

export interface ServerApi {
  broadcastPlayers: () => Observable<PlayerId[]>;
  startGame: () => void;
  broadcastStartGame: () => Observable<void>;
  dealtCards: () => Observable<Card[]>;
  broadcastPlayerOrder: () => Observable<PlayerId[]>;
  requestCards: () => Observable<void>;
  playCards: (cards: Card[]) => void;
  broadcastPlayerTurn: () => Observable<ValidatedTurn>;
  broadcastPlayerTurnError: () => Observable<TurnError>;
  broadcastRoundWinner: () => Observable<PlayerId>;
  broadcastPenalties: () => Observable<Penalty[]>;
  broadcastOutPlayers: () => Observable<OutPlayer[]>;
  broadcastGameWinner: () => Observable<PlayerId>;
  broadcastStartRound: () => Observable<void>;
  broadcastEndRound: () => Observable<void>;
  broadcastStartCycle: () => Observable<void>;
  broadcastEndCycle: () => Observable<void>;
  broadcastStartPlayerTurn: () => Observable<PlayerId>;
  broadcastEndGame: () => Observable<void>;
  broadcastGameError: () => Observable<Error>;
  availableCards: () => Observable<Card[]>;
}

function ofType<T extends Message>(name: MessageName): UnaryFunction< Observable<Message>, Observable<T>> {
  return pipe(
    filter((value: Message): value is T => value.name === name),
  );
}

function broadcastPlayers(subject: WebSocketSubject<Message>): Observable<PlayerId[]> {
  return subject.pipe(
    ofType<BroadcastPlayers>(MessageName.BROADCAST_PLAYERS),
    map((value) => value.data),
  );
}

function startGame(subject: WebSocketSubject<Message>): void {
  return subject.next({ name: MessageName.START_GAME });
}

function broadcastStartGame(subject: WebSocketSubject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastStartGame>(MessageName.BROADCAST_START_GAME),
    map(() => undefined),
  );
}

function dealtCards(subject: WebSocketSubject<Message>): Observable<Card[]> {
  return subject.pipe(
    ofType<DealtCards>(MessageName.DEALT_CARDS),
    map((value) => value.data),
  );
}

function broadcastPlayerOrder(subject: WebSocketSubject<Message>): Observable<PlayerId[]> {
  return subject.pipe(
    ofType<BroadcastPlayerOrder>(MessageName.BROADCAST_PLAYER_ORDER),
    map((value) => value.data),
  );
}

function requestCards(subject: WebSocketSubject<Message>): Observable<void> {
  return subject.pipe(
    ofType<RequestCards>(MessageName.REQUEST_CARDS),
    map(() => undefined),
  );
}

function playCards(subject: WebSocketSubject<Message>, cards: Card[]): void {
  return subject.next({ name: MessageName.PLAY_CARDS, data: cards });
}

function broadcastPlayerTurn(subject: WebSocketSubject<Message>): Observable<ValidatedTurn> {
  return subject.pipe(
    ofType<BroadcastPlayerTurn>(MessageName.BROADCAST_PLAYER_TURN),
    map((value) => value.data),
  );
}

function broadcastPlayerTurnError(subject: WebSocketSubject<Message>): Observable<TurnError> {
  return subject.pipe(
    ofType<BroadcastPlayerTurnError>(MessageName.BROADCAST_PLAYER_TURN_ERROR),
    map((value) => value.data),
  );
}

function broadcastRoundWinner(subject: WebSocketSubject<Message>): Observable<PlayerId> {
  return subject.pipe(
    ofType<BroadcastRoundWinner>(MessageName.BROADCAST_ROUND_WINNER),
    map((value) => value.data),
  );
}

function broadcastPenalties(subject: WebSocketSubject<Message>): Observable<Penalty[]> {
  return subject.pipe(
    ofType<BroadcastPenalties>(MessageName.BROADCAST_PENALTIES),
    map((value) => value.data),
  );
}

function broadcastOutPlayers(subject: WebSocketSubject<Message>): Observable<OutPlayer[]> {
  return subject.pipe(
    ofType<BroadcastOutPlayers>(MessageName.BROADCAST_OUT_PLAYERS),
    map((value) => value.data),
  );
}

function broadcastGameWinner(subject: WebSocketSubject<Message>): Observable<PlayerId> {
  return subject.pipe(
    ofType<BroadcastGameWinner>(MessageName.BROADCAST_GAME_WINNER),
    map((value) => value.data),
  );
}

function broadcastStartRound(subject: WebSocketSubject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastStartRound>(MessageName.BROADCAST_START_ROUND),
    map(() => undefined),
  );
}

function broadcastEndRound(subject: WebSocketSubject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastEndRound>(MessageName.BROADCAST_END_ROUND),
    map(() => undefined),
  );
}

function broadcastStartCycle(subject: WebSocketSubject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastStartCycle>(MessageName.BROADCAST_START_CYCLE),
    map(() => undefined),
  );
}

function broadcastEndCycle(subject: WebSocketSubject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastEndCycle>(MessageName.BROADCAST_END_CYCLE),
    map(() => undefined),
  );
}

function broadcastStartPlayerTurn(subject: WebSocketSubject<Message>): Observable<PlayerId> {
  return subject.pipe(
    ofType<BroadcastStartPlayerTurn>(MessageName.BROADCAST_START_PLAYER_TURN),
    map((value) => value.data),
  );
}

function broadcastEndGame(subject: WebSocketSubject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastEndGame>(MessageName.BROADCAST_END_GAME),
    map(() => undefined),
  );
}

function broadcastGameError(subject: WebSocketSubject<Message>): Observable<Error> {
  return subject.pipe(
    ofType<BroadcastGameError>(MessageName.BROADCAST_GAME_ERROR),
    map((value) => value.data),
  );
}

function availableCards(subject: WebSocketSubject<Message>): Observable<Card[]> {
  return subject.pipe(
    ofType<AvailableCards>(MessageName.AVAILABLE_CARDS),
    map((value) => value.data),
  );
}

export default function create(subject: WebSocketSubject<Message>): ServerApi {
  return {
    broadcastPlayers: broadcastPlayers.bind(null, subject),
    startGame: startGame.bind(null, subject),
    broadcastStartGame: broadcastStartGame.bind(null, subject),
    dealtCards: dealtCards.bind(null, subject),
    broadcastPlayerOrder: broadcastPlayerOrder.bind(null, subject),
    requestCards: requestCards.bind(null, subject),
    playCards: playCards.bind(null, subject),
    broadcastPlayerTurn: broadcastPlayerTurn.bind(null, subject),
    broadcastPlayerTurnError: broadcastPlayerTurnError.bind(null, subject),
    broadcastRoundWinner: broadcastRoundWinner.bind(null, subject),
    broadcastPenalties: broadcastPenalties.bind(null, subject),
    broadcastOutPlayers: broadcastOutPlayers.bind(null, subject),
    broadcastGameWinner: broadcastGameWinner.bind(null, subject),
    broadcastStartRound: broadcastStartRound.bind(null, subject),
    broadcastEndRound: broadcastEndRound.bind(null, subject),
    broadcastStartCycle: broadcastStartCycle.bind(null, subject),
    broadcastEndCycle: broadcastEndCycle.bind(null, subject),
    broadcastStartPlayerTurn: broadcastStartPlayerTurn.bind(null, subject),
    broadcastEndGame: broadcastEndGame.bind(null, subject),
    broadcastGameError: broadcastGameError.bind(null, subject),
    availableCards: availableCards.bind(null, subject),
  };
}
