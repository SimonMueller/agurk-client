import React from 'react';
import { createSuitCard, Suits } from 'agurk-shared';
import { render, fireEvent } from '../../utils/test-utils';
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


  it('play cards is called with empty selected cards after button click', () => {
    const mockedPlayCards = jest.fn();
    const { getByRole } = render(<Hand
      cardsInHand={[]}
      isServerRequestingCards
      playCards={mockedPlayCards}
    />);

    fireEvent(
      getByRole('button', { name: playCardsButtonText }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(mockedPlayCards).toHaveBeenCalledWith([]);
  });

  it('play cards is called with selected cards after button click', () => {
    const mockedPlayCards = jest.fn();
    const { getByAltText, getByRole } = render(<Hand
      cardsInHand={[createSuitCard(14, Suits.HEARTS)]}
      isServerRequestingCards
      playCards={mockedPlayCards}
    />);

    fireEvent(
      getByAltText('card of rank 14 and suit hearts'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    fireEvent(
      getByRole('button', { name: playCardsButtonText }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(mockedPlayCards).toHaveBeenCalledWith([{
      ...createSuitCard(14, Suits.HEARTS),
      isSelected: true,
    }]);
  });
});
