import React from 'react';
import { PlayerId } from 'agurk-shared';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import PlayerIdList from './board/PlayerIdList';
import { State } from '../redux/root.reducer';

interface Props {
  playerIds: PlayerId[];
  startGame: () => void;
}

function Lobby({ playerIds, startGame }: Props) {
  return (
    <div>
      <PlayerIdList playerIds={playerIds} />
      <Button size="large" fullWidth variant="contained" color="secondary" onClick={startGame}>
        Start Game
      </Button>
    </div>
  );
}

const mapStateToProps = (state: State) => ({
  playerIds: state.lobby.players,
});

export default connect(mapStateToProps)(Lobby);
