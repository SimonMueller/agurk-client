import { Observable, pipe, UnaryFunction } from 'rxjs';
import {
  AvailableCards,
  BroadcastEndCycle,
  BroadcastEndGame,
  BroadcastEndRound,
  BroadcastGameError,
  BroadcastPlayerTurn,
  BroadcastStartCycle,
  BroadcastStartGame,
  BroadcastStartPlayerTurn,
  BroadcastStartRound,
  Card,
  DealtCards,
  Error,
  Message,
  MessageName,
  PlayerId,
  RequestCards,
  TurnError,
  ValidatedTurn,
  BroadcastPlayerTurnError,
  StartRoundData,
  EndRoundData,
  EndCycleData,
  EndGameData,
  StartGameData, StartCycleData,
} from 'agurk-shared';
import { filter, map } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';

export interface ServerApi {
  startGame: () => void;
  broadcastStartGame: () => Observable<StartGameData>;
  dealtCards: () => Observable<Card[]>;
  requestCards: () => Observable<void>;
  playCards: (cards: Card[]) => void;
  broadcastPlayerTurn: () => Observable<ValidatedTurn>;
  broadcastPlayerTurnError: () => Observable<TurnError>;
  broadcastStartRound: () => Observable<StartRoundData>;
  broadcastEndRound: () => Observable<EndRoundData>;
  broadcastStartCycle: () => Observable<StartCycleData>;
  broadcastEndCycle: () => Observable<EndCycleData>;
  broadcastStartPlayerTurn: () => Observable<PlayerId>;
  broadcastEndGame: () => Observable<EndGameData>;
  broadcastGameError: () => Observable<Error>;
  availableCards: () => Observable<Card[]>;
}

function ofType<T extends Message>(name: MessageName): UnaryFunction<Observable<Message>, Observable<T>> {
  return pipe(
    filter((value: Message): value is T => value.name === name),
  );
}

function startGame(subject: WebSocketSubject<Message>): void {
  return subject.next({ name: MessageName.START_GAME });
}

function broadcastStartGame(subject: WebSocketSubject<Message>): Observable<StartGameData> {
  return subject.pipe(
    ofType<BroadcastStartGame>(MessageName.BROADCAST_START_GAME),
    map((value) => value.data),
  );
}

function dealtCards(subject: WebSocketSubject<Message>): Observable<Card[]> {
  return subject.pipe(
    ofType<DealtCards>(MessageName.DEALT_CARDS),
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

function broadcastStartRound(subject: WebSocketSubject<Message>): Observable<StartRoundData> {
  return subject.pipe(
    ofType<BroadcastStartRound>(MessageName.BROADCAST_START_ROUND),
    map((value) => value.data),
  );
}

function broadcastEndRound(subject: WebSocketSubject<Message>): Observable<EndRoundData> {
  return subject.pipe(
    ofType<BroadcastEndRound>(MessageName.BROADCAST_END_ROUND),
    map((value) => value.data),
  );
}

function broadcastStartCycle(subject: WebSocketSubject<Message>): Observable<StartCycleData> {
  return subject.pipe(
    ofType<BroadcastStartCycle>(MessageName.BROADCAST_START_CYCLE),
    map((value) => value.data),
  );
}

function broadcastEndCycle(subject: WebSocketSubject<Message>): Observable<EndCycleData> {
  return subject.pipe(
    ofType<BroadcastEndCycle>(MessageName.BROADCAST_END_CYCLE),
    map((value) => value.data),
  );
}

function broadcastStartPlayerTurn(subject: WebSocketSubject<Message>): Observable<PlayerId> {
  return subject.pipe(
    ofType<BroadcastStartPlayerTurn>(MessageName.BROADCAST_START_PLAYER_TURN),
    map((value) => value.data),
  );
}

function broadcastEndGame(subject: WebSocketSubject<Message>): Observable<EndGameData> {
  return subject.pipe(
    ofType<BroadcastEndGame>(MessageName.BROADCAST_END_GAME),
    map((value) => value.data),
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
    startGame: startGame.bind(null, subject),
    broadcastStartGame: broadcastStartGame.bind(null, subject),
    dealtCards: dealtCards.bind(null, subject),
    requestCards: requestCards.bind(null, subject),
    playCards: playCards.bind(null, subject),
    broadcastPlayerTurn: broadcastPlayerTurn.bind(null, subject),
    broadcastPlayerTurnError: broadcastPlayerTurnError.bind(null, subject),
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
