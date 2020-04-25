import React from 'react';
import { createSuitCard, Suits, ValidatedTurn } from 'agurk-shared';
import { render } from '../../utils/test-utils';
import LastPlayedMaxCard from './LastPlayedMaxCard';

describe('Last played max card component', () => {
  it('shows card placeholder if turns is empty', () => {
    const { getByAltText } = render(<LastPlayedMaxCard playedTurns={[]} />);

    expect(getByAltText('card placeholder')).toBeVisible();
    expect(getByAltText('card placeholder')).toHaveAttribute('src', '/agurk-client/images/placeholder.svg');
  });

  it('shows info badge if turns is empty', () => {
    const { getByText } = render(<LastPlayedMaxCard playedTurns={[]} />);

    expect(getByText('Highest card')).toBeVisible();
  });

  it('shows info badge if turns is not empty', () => {
    const turn: ValidatedTurn = {
      valid: true,
      cards: [createSuitCard(2, Suits.HEARTS)],
      playerId: 'testplayer',
    };
    const { getByText } = render(<LastPlayedMaxCard playedTurns={[turn]} />);

    expect(getByText('Highest card')).toBeVisible();
  });

  it('shows card of valid single turn', () => {
    const turn: ValidatedTurn = {
      valid: true,
      cards: [createSuitCard(2, Suits.HEARTS)],
      playerId: 'testplayer',
    };
    const { getByAltText } = render(<LastPlayedMaxCard playedTurns={[turn]} />);

    expect(getByAltText('card of rank 2 and suit hearts')).toBeVisible();
  });

  it('shows placeholder for invalid single turn', () => {
    const turn: ValidatedTurn = {
      valid: false,
      cards: [createSuitCard(2, Suits.HEARTS)],
      playerId: 'testplayer',
      invalidReason: 'some reason',
    };
    const { getByAltText } = render(<LastPlayedMaxCard playedTurns={[turn]} />);

    expect(getByAltText('card placeholder')).toBeVisible();
  });

  it('shows highest ranked card for multiple turns', () => {
    const turns: ValidatedTurn[] = [{
      valid: true,
      cards: [createSuitCard(5, Suits.SPADES)],
      playerId: 'testplayer1',
    },
    {
      valid: true,
      cards: [createSuitCard(14, Suits.CLUBS)],
      playerId: 'testplayer3',
    },
    {
      valid: true,
      cards: [createSuitCard(2, Suits.HEARTS)],
      playerId: 'testplayer2',
    }];
    const { getByAltText } = render(<LastPlayedMaxCard playedTurns={turns} />);

    expect(getByAltText('card of rank 14 and suit clubs')).toBeVisible();
  });
});
