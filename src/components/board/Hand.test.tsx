import React from 'react';
import userEvent from '@testing-library/user-event';
import { createSuitCard, Suits } from 'agurk-shared';
import { render } from '../../utils/test-utils';
import Hand from './Hand';

describe('Hand component', () => {
  const playCardsButtonText = 'Play cards';

  it('shows play cards button when requesting cards', () => {
    const mockedPlayCards = jest.fn();
    const { getByRole } = render(<Hand
      cardsInHand={[]}
      isServerRequestingCards
      playCards={mockedPlayCards}
    />);

    expect(getByRole('button', { name: playCardsButtonText })).toBeVisible();
  });

  it('doesn\'t show play cards button when not requesting cards', () => {
    const mockedPlayCards = jest.fn();
    const { queryByRole } = render(<Hand
      cardsInHand={[]}
      isServerRequestingCards={false}
      playCards={mockedPlayCards}
    />);

    expect(queryByRole('button', { name: playCardsButtonText })).toBeNull();
  });

  it('displays given cards', () => {
    const mockedPlayCards = jest.fn();
    const { getByAltText } = render(<Hand
      cardsInHand={[createSuitCard(14, Suits.HEARTS), createSuitCard(2, Suits.DIAMONDS)]}
      isServerRequestingCards={false}
      playCards={mockedPlayCards}
    />);

    expect(getByAltText('card of rank 14 and suit hearts')).toBeVisible();
    expect(getByAltText('card of rank 2 and suit diamonds')).toBeVisible();
  });

  it('play cards is called with empty selected cards after button click', () => {
    const mockedPlayCards = jest.fn();
    const { getByRole } = render(<Hand
      cardsInHand={[]}
      isServerRequestingCards
      playCards={mockedPlayCards}
    />);

    userEvent.click(getByRole('button', { name: playCardsButtonText }));

    expect(mockedPlayCards).toHaveBeenCalledWith([]);
  });

  it('play cards is called with selected cards after button click', () => {
    const mockedPlayCards = jest.fn();
    const { getByAltText, getByRole } = render(<Hand
      cardsInHand={[createSuitCard(14, Suits.HEARTS)]}
      isServerRequestingCards
      playCards={mockedPlayCards}
    />);

    userEvent.click(getByAltText('card of rank 14 and suit hearts'));

    userEvent.click(getByRole('button', { name: playCardsButtonText }));

    expect(mockedPlayCards).toHaveBeenCalledWith([{
      ...createSuitCard(14, Suits.HEARTS),
      isSelected: true,
    }]);
  });
});
