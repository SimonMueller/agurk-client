import React from 'react';
import { render } from '../../utils/test-utils';
import Player from './Player';
import { PlayerState } from '../../redux/gamePlayers.reducer';

describe('Player component', () => {
  it('shows initial state', () => {
    const playerState: PlayerState = {
      id: 'testplayer',
      isOut: false,
      isRoundWinner: false,
      isGameWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
      penalties: [],
      order: 1,
    };
    const { getByText } = render(<Player player={playerState} />);

    expect(getByText('testplayer')).toBeVisible();
    expect(getByText('Penalty 0')).toBeVisible();
  });
});
