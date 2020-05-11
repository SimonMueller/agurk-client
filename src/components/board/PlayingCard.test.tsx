import React from 'react';
import {
  Card, Color, Colors, JOKER_CARD_KIND, Suit, SUIT_CARD_KIND, SuitRank, Suits,
} from 'agurk-shared';
import { render } from '../../utils/test-utils';
import PlayingCard, { PlayingCardPlaceholder } from './PlayingCard';

describe('Playing card component', () => {
  it('has alt text representing suit card rank and suit', () => {
    const card: Card = {
      suit: Suits.DIAMONDS,
      rank: 3,
      kind: SUIT_CARD_KIND,
    };
    const { getByAltText } = render(<PlayingCard card={card} />);

    expect(getByAltText('card of rank 3 and suit diamonds')).toBeVisible();
  });

  it('has alt text representing joker card rank and color', () => {
    const card: Card = {
      color: Colors.BLACK,
      rank: 15,
      kind: JOKER_CARD_KIND,
    };
    const { getByAltText } = render(<PlayingCard card={card} />);

    expect(getByAltText('joker of rank 15 and color black')).toBeVisible();
  });

  describe('shows correct card image', () => {
    describe.each<SuitRank>([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    ])('for suit card with rank %i', (rank: SuitRank) => {
      it.each<Suit>([
        Suits.SPADES, Suits.CLUBS, Suits.DIAMONDS, Suits.HEARTS,
      ])('and suit %s ', (suit: Suit) => {
        const card: Card = { suit, rank, kind: SUIT_CARD_KIND };
        const lowercaseSuit = suit.toLowerCase();
        const { getByAltText } = render(<PlayingCard card={card} />);

        expect(getByAltText(`card of rank ${rank} and suit ${lowercaseSuit}`))
          .toHaveAttribute('src', `/agurk-client/images/${rank}-${lowercaseSuit}.svg`);
      });
    });

    describe('for joker card with rank 15', () => {
      it.each<Color>([
        Colors.BLACK, Colors.RED, Colors.WHITE,
      ])('and color %s ', (color: Color) => {
        const rank = 15;
        const card: Card = { color, rank, kind: JOKER_CARD_KIND };
        const lowercaseColor = color.toLowerCase();
        const { getByAltText } = render(<PlayingCard card={card} />);

        expect(getByAltText(`joker of rank ${rank} and color ${lowercaseColor}`))
          .toHaveAttribute('src', '/agurk-client/images/joker.svg');
      });
    });
  });

  describe('placeholder', () => {
    const cardPlaceholderAlt = 'card placeholder';

    it('has alt text representing placeholder', () => {
      const { getByAltText } = render(<PlayingCardPlaceholder />);

      expect(getByAltText(cardPlaceholderAlt)).toBeVisible();
    });

    it('shows correct image', () => {
      const { getByAltText } = render(<PlayingCardPlaceholder />);

      expect(getByAltText(cardPlaceholderAlt))
        .toHaveAttribute('src', '/agurk-client/images/placeholder.svg');
    });
  });
});
