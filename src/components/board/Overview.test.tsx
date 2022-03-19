import React from 'react';
import { render } from '../../utils/test-utils';
import Overview from './Overview';
import { GameStage } from '../../redux/gameState.reducer';

describe('Overview component', () => {
  it('not displayed on start game', () => {
    const { container } = render(<Overview
      isServerRequestingCards={false}
      players={[]}
      gameStage={GameStage.START}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={1}
    />);

    expect(container).toBeEmptyDOMElement();
  });

  it('displays no game winner on end game', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards={false}
      players={players}
      gameStage={GameStage.END}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={1}
    />);

    expect(getByText('No game winner', { exact: false })).toBeVisible();
  });

  it('displays no cycle winner in between cycles', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards={false}
      players={players}
      gameStage={GameStage.BETWEEN_CYCLES}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={1}
    />);

    expect(getByText('No cycle winner', { exact: false })).toBeVisible();
  });

  it('displays no round winner in between rounds', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards={false}
      players={players}
      gameStage={GameStage.BETWEEN_ROUNDS}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={1}
    />);

    expect(getByText('No round winner', { exact: false })).toBeVisible();
  });

  it('displays game winner on end game', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: true,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards={false}
      players={players}
      gameStage={GameStage.END}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={7}
    />);

    expect(getByText('testplayer wins the game', { exact: false })).toBeVisible();
  });

  it('displays round winner in between rounds', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: false,
      isRoundWinner: true,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards={false}
      players={players}
      gameStage={GameStage.BETWEEN_ROUNDS}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={3}
    />);

    expect(getByText('testplayer wins the round', { exact: false })).toBeVisible();
  });

  it('displays cycle winner in between cycles', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: true,
      isServerRequestingCards: false,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards={false}
      players={players}
      gameStage={GameStage.BETWEEN_CYCLES}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={5}
    />);

    expect(getByText('testplayer wins the cycle', { exact: false })).toBeVisible();
  });

  it('displays that it is your turn if server is requesting cards', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: true,
    },
    {
      id: 'someotherplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards
      players={players}
      gameStage={GameStage.IN_CYCLE}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={5}
    />);

    expect(getByText('Your turn', { exact: false })).toBeVisible();
    expect(getByText('2 retries', { exact: false })).toBeVisible();
    expect(getByText('5 seconds', { exact: false })).toBeVisible();
  });

  it('displays which player\'s turn it is if not your turn', () => {
    const players = [{
      id: 'testplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: false,
    },
    {
      id: 'someotherplayer',
      isGameWinner: false,
      isRoundWinner: false,
      isCycleHighestTurnPlayer: false,
      isServerRequestingCards: true,
    }];
    const { getByText } = render(<Overview
      isServerRequestingCards={false}
      players={players}
      gameStage={GameStage.IN_CYCLE}
      turnRetriesLeft={2}
      turnTimeoutInSeconds={5}
    />);

    expect(getByText('someotherplayer\'s turn', { exact: false })).toBeVisible();
  });
});
