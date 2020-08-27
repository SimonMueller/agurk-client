import React from 'react';
import {
  Card, Color, Colors, JOKER_CARD_KIND, Rank, Suit, SUIT_CARD_KIND, SuitRank, Suits,
} from 'agurk-shared';
import { render } from '../../utils/test-utils';
import PlayingCard, { PlayingCardPlaceholder } from './PlayingCard';

describe('Playing card component', () => {
  const suitCardAlt = (rank: Rank, suit: Suit) => `card of rank ${rank} and suit ${suit.toLowerCase()}`;
  const jokerCardAlt = (color: Color) => `joker of rank 15 and color ${color.toLowerCase()}`;

  it('has alt text representing suit card rank and suit', () => {
    const card: Card = {
      suit: Suits.DIAMONDS,
      rank: 3,
      kind: SUIT_CARD_KIND,
    };
    const { getByAltText } = render(<PlayingCard card={card} />);

    expect(getByAltText(suitCardAlt(3, Suits.DIAMONDS))).toBeVisible();
  });

  it('has alt text representing joker card rank and color', () => {
    const card: Card = {
      color: Colors.BLACK,
      rank: 15,
      kind: JOKER_CARD_KIND,
    };
    const { getByAltText } = render(<PlayingCard card={card} />);

    expect(getByAltText(jokerCardAlt(Colors.BLACK))).toBeVisible();
  });

  describe('shows correct card image', () => {
    const cardRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as const;

    describe.each<SuitRank>(cardRanks)('for suit card with rank %i', (rank: SuitRank) => {
      it.each<Suit>([
        Suits.SPADES, Suits.CLUBS, Suits.DIAMONDS, Suits.HEARTS,
      ])('and suit %s ', (suit: Suit) => {
        const card: Card = { suit, rank, kind: SUIT_CARD_KIND };
        const { getByAltText } = render(<PlayingCard card={card} />);

        expect(getByAltText(suitCardAlt(rank, suit)))
          .toHaveAttribute('src', `/agurk-client/images/${rank}-${suit.toLowerCase()}.svg`);
      });
    });

    describe('for joker card with rank 15', () => {
      const cardColors = [Colors.BLACK, Colors.RED, Colors.WHITE];

      it.each<Color>(cardColors)('and color %s ', (color: Color) => {
        const rank = 15;
        const card: Card = { color, rank, kind: JOKER_CARD_KIND };
        const { getByAltText } = render(<PlayingCard card={card} />);

        expect(getByAltText(`joker of rank ${rank} and color ${color.toLowerCase()}`))
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
