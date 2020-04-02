import React from 'react';
import { connect } from 'react-redux';
import { Card, ValidatedTurn } from 'agurk-shared';
import styled from 'styled-components';
import Hand from './Hand';
import PlayerStateList from './PlayerStateList';
import Stack from './Stack';
import { State } from './redux';
import { WebSocketGameApi } from './communication/webSocketServerApi';
import { PlayerState, ProtocolEntry } from './redux/game';
import GameProtocol from './GameProtocol';

interface Props {
  players: PlayerState[];
  playedTurns: ValidatedTurn[];
  cardsInHand: Card[];
  playCards: (cards: Card[]) => void;
  playerState: PlayerState;
  turnTimeoutInMillis: number | undefined;
  turnRetriesLeft: number;
  protocolEntries: ProtocolEntry[];
}

const Flex = styled.div`
  display: flex;
  height: 30vh;
`;

const Box = styled.div`
  flex-basis: 50%;
  overflow-y: auto;
`;

function Game({
  players, playedTurns, cardsInHand, playCards, playerState, turnTimeoutInMillis, turnRetriesLeft, protocolEntries,
}: Props) {
  return (
    <div>
      <Flex>
        <Box>
          <PlayerStateList players={players} />
        </Box>
        <Box>
          <GameProtocol entries={protocolEntries} />
        </Box>
      </Flex>
      <Stack playedTurns={playedTurns} />
      <Hand
        isServerRequestingCards={playerState.isServerRequestingCards}
        turnTimeoutInMillis={turnTimeoutInMillis}
        turnRetriesLeft={turnRetriesLeft}
        cardsInHand={cardsInHand}
        playCards={playCards}
      />
    </div>
  );
}

const mapStateToProps = (state: State, ownProps: { serverApi: WebSocketGameApi }) => ({
  cardsInHand: state.game.cardsInHand,
  players: state.game.players,
  playedTurns: state.game.validatedTurns,
  playerState: state.game.players.find((player) => player.id === state.game.playerId) as PlayerState,
  playCards: (cards: Card[]) => ownProps.serverApi.sendPlayCards(cards),
  turnTimeoutInMillis: state.game.turnTimeoutInMillis,
  turnRetriesLeft: state.game.turnRetriesLeft,
  protocolEntries: state.game.protocol,
});

export default connect(mapStateToProps)(Game);
