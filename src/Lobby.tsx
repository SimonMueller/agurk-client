import React from 'react';
import { PlayerId } from 'agurk-shared';
import { connect } from 'react-redux';
import PrimaryButton from './styled/Button';
import PlayerIdList from './PlayerIdList';
import { State } from './redux';

interface Props {
  playerIds: PlayerId[];
  startGame: () => void;
}

function Lobby({ playerIds, startGame }: Props) {
  return (
    <div>
      <PlayerIdList playerIds={playerIds} />
      <PrimaryButton type="button" onClick={startGame}>Start Game</PrimaryButton>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  playerIds: state.lobby.players,
});

export default connect(mapStateToProps)(Lobby);
