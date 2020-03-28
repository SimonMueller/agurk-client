import React from 'react';
import {
  Card as CardData, JOKER_CARD_KIND, JokerCard as JokerCardData, SuitCard as SuitCardData,
} from 'agurk-shared';
import styled from 'styled-components';

interface PlayingCardProps {
  card: CardData;
  isSelected?: boolean;
}

interface JokerCardProps {
  card: JokerCardData;
}

interface SuitCardProps {
  card: SuitCardData;
}

const CardRankText = styled.p`
  font-weight: bold;
  flex-basis: 100%;
  text-align: center;
  display: block;
  font-size: 3em;
  margin: 0;
`;

const CardAttributeText = styled.p`
  font-weight: bold;
  flex-basis: 100%;
  text-align: center;
  display: block;
  font-size: 1em;
  margin: 0;
`;

const Card = styled.div`
  outline: ${(props: { isSelected: boolean }) => (props.isSelected ? '2px solid #007fff' : '1px solid grey')};
  width: 7em;
  height: 11em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

function JokerCard({ card }: JokerCardProps) {
  return (
    <>
      <CardRankText>
        J
      </CardRankText>
      <CardAttributeText>
        { card.color }
      </CardAttributeText>
    </>
  );
}

function SuitCard({ card }: SuitCardProps) {
  return (
    <>
      <CardRankText>
        { card.rank }
      </CardRankText>
      <CardAttributeText>
        { card.suit }
      </CardAttributeText>
    </>
  );
}

export default function PlayingCard({ card, isSelected = false }: PlayingCardProps) {
  return (
    <Card isSelected={isSelected}>
      { card.kind === JOKER_CARD_KIND
        ? <JokerCard card={card} />
        : <SuitCard card={card} /> }
    </Card>
  );
}
