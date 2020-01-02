import {
  Observable, Subject, pipe, UnaryFunction,
} from 'rxjs';
import {
  Card, Message, Error, MessageName, Penalty, PlayerId, TurnError, ValidatedTurn, BroadcastPlayerTurn,
  BroadcastPlayerOrder, DealtCards, BroadcastPlayers, BroadcastPlayerTurnError, BroadcastRoundWinner,
  BroadcastPenalties, OutPlayer, BroadcastOutPlayers, BroadcastGameWinner, BroadcastStartPlayerTurn,
  BroadcastGameError, AvailableCards, BroadcastStartRound, BroadcastEndRound, BroadcastStartCycle,
  BroadcastEndCycle, RequestCards, BroadcastStartGame, BroadcastEndGame,
} from 'agurk-shared';
import { filter, map } from 'rxjs/operators';

function ofType<T extends Message>(name: MessageName): UnaryFunction< Observable<Message>, Observable<T>> {
  return pipe(
    filter((value: Message): value is T => value.name === name),
  );
}

export function broadcastPlayers(subject: Subject<Message>): Observable<PlayerId[]> {
  return subject.pipe(
    ofType<BroadcastPlayers>(MessageName.BROADCAST_PLAYERS),
    map((value) => value.data),
  );
}

export function startGame(subject: Subject<Message>): void {
  return subject.next({ name: MessageName.START_GAME });
}

export function broadcastStartGame(subject: Subject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastStartGame>(MessageName.BROADCAST_START_GAME),
    map(() => undefined),
  );
}

export function dealtCards(subject: Subject<Message>): Observable<Card[]> {
  return subject.pipe(
    ofType<DealtCards>(MessageName.DEALT_CARDS),
    map((value) => value.data),
  );
}

export function broadcastPlayerOrder(subject: Subject<Message>): Observable<PlayerId[]> {
  return subject.pipe(
    ofType<BroadcastPlayerOrder>(MessageName.BROADCAST_PLAYER_ORDER),
    map((value) => value.data),
  );
}

export function requestCards(subject: Subject<Message>): Observable<void> {
  return subject.pipe(
    ofType<RequestCards>(MessageName.REQUEST_CARDS),
    map(() => undefined),
  );
}

export function playCards(subject: Subject<Message>, cards: Card[]): void {
  return subject.next({ name: MessageName.PLAY_CARDS, data: cards });
}

export function broadcastPlayerTurn(subject: Subject<Message>): Observable<ValidatedTurn> {
  return subject.pipe(
    ofType<BroadcastPlayerTurn>(MessageName.BROADCAST_PLAYER_TURN),
    map((value) => value.data),
  );
}

export function broadcastPlayerTurnError(subject: Subject<Message>): Observable<TurnError> {
  return subject.pipe(
    ofType<BroadcastPlayerTurnError>(MessageName.BROADCAST_PLAYER_TURN_ERROR),
    map((value) => value.data),
  );
}

export function broadcastRoundWinner(subject: Subject<Message>): Observable<PlayerId> {
  return subject.pipe(
    ofType<BroadcastRoundWinner>(MessageName.BROADCAST_ROUND_WINNER),
    map((value) => value.data),
  );
}

export function broadcastPenalties(subject: Subject<Message>): Observable<Penalty[]> {
  return subject.pipe(
    ofType<BroadcastPenalties>(MessageName.BROADCAST_PENALTIES),
    map((value) => value.data),
  );
}

export function broadcastOutPlayers(subject: Subject<Message>): Observable<OutPlayer[]> {
  return subject.pipe(
    ofType<BroadcastOutPlayers>(MessageName.BROADCAST_OUT_PLAYERS),
    map((value) => value.data),
  );
}

export function broadcastGameWinner(subject: Subject<Message>): Observable<PlayerId> {
  return subject.pipe(
    ofType<BroadcastGameWinner>(MessageName.BROADCAST_GAME_WINNER),
    map((value) => value.data),
  );
}

export function broadcastStartRound(subject: Subject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastStartRound>(MessageName.BROADCAST_START_ROUND),
    map(() => undefined),
  );
}

export function broadcastEndRound(subject: Subject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastEndRound>(MessageName.BROADCAST_END_ROUND),
    map(() => undefined),
  );
}

export function broadcastStartCycle(subject: Subject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastStartCycle>(MessageName.BROADCAST_START_CYCLE),
    map(() => undefined),
  );
}

export function broadcastEndCycle(subject: Subject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastEndCycle>(MessageName.BROADCAST_END_CYCLE),
    map(() => undefined),
  );
}

export function broadcastStartPlayerTurn(subject: Subject<Message>): Observable<PlayerId> {
  return subject.pipe(
    ofType<BroadcastStartPlayerTurn>(MessageName.BROADCAST_START_PLAYER_TURN),
    map((value) => value.data),
  );
}

export function broadcastEndGame(subject: Subject<Message>): Observable<void> {
  return subject.pipe(
    ofType<BroadcastEndGame>(MessageName.BROADCAST_END_GAME),
    map(() => undefined),
  );
}

export function broadcastGameError(subject: Subject<Message>): Observable<Error> {
  return subject.pipe(
    ofType<BroadcastGameError>(MessageName.BROADCAST_GAME_ERROR),
    map((value) => value.data),
  );
}

export function availableCards(subject: Subject<Message>): Observable<Card[]> {
  return subject.pipe(
    ofType<AvailableCards>(MessageName.AVAILABLE_CARDS),
    map((value) => value.data),
  );
}
