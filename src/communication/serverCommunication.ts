import { Observable, Subject } from 'rxjs';
import {
  Card, Message, Error, MessageName, Penalty, PlayerId, TurnError, ValidatedTurn, BroadcastPlayerTurn,
  BroadcastPlayerOrder, DealtCards, BroadcastPlayers, BroadcastPlayerTurnError, BroadcastRoundWinner,
  BroadcastPenalties, OutPlayer, BroadcastOutPlayers, BroadcastGameWinner, BroadcastStartPlayerTurn,
  BroadcastGameError, AvailableCards, BroadcastStartRound, BroadcastEndRound, BroadcastStartCycle,
  BroadcastEndCycle, RequestCards, BroadcastStartGame,
} from 'agurk-shared';
import { filter, map } from 'rxjs/operators';

export function broadcastPlayers(subject: Subject<Message>): Observable<PlayerId[]> {
  return subject.pipe(
    filter((val): val is BroadcastPlayers => val.name === MessageName.BROADCAST_PLAYERS),
    map((val) => val.data),
  );
}

export function startGame(subject: Subject<Message>): void {
  return subject.next({ name: MessageName.START_GAME });
}

export function broadcastStartGame(subject: Subject<Message>): Observable<undefined> {
  return subject.pipe(
    filter((val): val is BroadcastStartGame => val.name === MessageName.BROADCAST_START_GAME),
    map(() => undefined),
  );
}

export function dealtCards(subject: Subject<Message>): Observable<Card[]> {
  return subject.pipe(
    filter((val): val is DealtCards => val.name === MessageName.DEALT_CARDS),
    map((val) => val.data),
  );
}

export function broadcastPlayerOrder(subject: Subject<Message>): Observable<PlayerId[]> {
  return subject.pipe(
    filter((val): val is BroadcastPlayerOrder => val.name === MessageName.BROADCAST_PLAYER_ORDER),
    map((val) => val.data),
  );
}

export function requestCards(subject: Subject<Message>): Observable<undefined> {
  return subject.pipe(
    filter((val): val is RequestCards => val.name === MessageName.REQUEST_CARDS),
    map(() => undefined),
  );
}

export function playCards(subject: Subject<Message>, cards: Card[]): void {
  return subject.next({ name: MessageName.PLAY_CARDS, data: cards });
}

export function broadcastPlayerTurn(subject: Subject<Message>): Observable<ValidatedTurn> {
  return subject.pipe(
    filter((val): val is BroadcastPlayerTurn => val.name === MessageName.BROADCAST_PLAYER_TURN),
    map((val) => val.data),
  );
}

export function broadcastPlayerTurnError(subject: Subject<Message>): Observable<TurnError> {
  return subject.pipe(
    filter((val): val is BroadcastPlayerTurnError => val.name === MessageName.BROADCAST_PLAYER_TURN_ERROR),
    map((val) => val.data),
  );
}

export function broadcastRoundWinner(subject: Subject<Message>): Observable<PlayerId> {
  return subject.pipe(
    filter((val): val is BroadcastRoundWinner => val.name === MessageName.BROADCAST_ROUND_WINNER),
    map((val) => val.data),
  );
}

export function broadcastPenalties(subject: Subject<Message>): Observable<Penalty[]> {
  return subject.pipe(
    filter((val): val is BroadcastPenalties => val.name === MessageName.BROADCAST_PENALTIES),
    map((val) => val.data),
  );
}

export function broadcastOutPlayers(subject: Subject<Message>): Observable<OutPlayer[]> {
  return subject.pipe(
    filter((val): val is BroadcastOutPlayers => val.name === MessageName.BROADCAST_OUT_PLAYERS),
    map((val) => val.data),
  );
}

export function broadcastGameWinner(subject: Subject<Message>): Observable<PlayerId> {
  return subject.pipe(
    filter((val): val is BroadcastGameWinner => val.name === MessageName.BROADCAST_GAME_WINNER),
    map((val) => val.data),
  );
}

export function broadcastStartRound(subject: Subject<Message>): Observable<undefined> {
  return subject.pipe(
    filter((val): val is BroadcastStartRound => val.name === MessageName.BROADCAST_START_ROUND),
    map(() => undefined),
  );
}

export function broadcastEndRound(subject: Subject<Message>): Observable<undefined> {
  return subject.pipe(
    filter((val): val is BroadcastEndRound => val.name === MessageName.BROADCAST_END_ROUND),
    map(() => undefined),
  );
}

export function broadcastStartCycle(subject: Subject<Message>): Observable<undefined> {
  return subject.pipe(
    filter((val): val is BroadcastStartCycle => val.name === MessageName.BROADCAST_START_CYCLE),
    map(() => undefined),
  );
}

export function broadcastEndCycle(subject: Subject<Message>): Observable<undefined> {
  return subject.pipe(
    filter((val): val is BroadcastEndCycle => val.name === MessageName.BROADCAST_END_CYCLE),
    map(() => undefined),
  );
}

export function broadcastStartPlayerTurn(subject: Subject<Message>): Observable<PlayerId> {
  return subject.pipe(
    filter((val): val is BroadcastStartPlayerTurn => val.name === MessageName.BROADCAST_START_PLAYER_TURN),
    map((val) => val.data),
  );
}

export function broadcastEndGame(subject: Subject<Message>): Observable<undefined> {
  return subject.pipe(
    filter((val): val is BroadcastStartPlayerTurn => val.name === MessageName.BROADCAST_END_GAME),
    map(() => undefined),
  );
}

export function broadcastGameError(subject: Subject<Message>): Observable<Error> {
  return subject.pipe(
    filter((val): val is BroadcastGameError => val.name === MessageName.BROADCAST_GAME_ERROR),
    map((val) => val.data),
  );
}

export function availableCards(subject: Subject<Message>): Observable<Card[]> {
  return subject.pipe(
    filter((val): val is AvailableCards => val.name === MessageName.AVAILABLE_CARDS),
    map((val) => val.data),
  );
}
