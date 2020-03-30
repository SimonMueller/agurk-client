import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InvalidTurn, ValidatedTurn, ValidTurn } from 'agurk-shared';
import PlayingCard, { generateCardKey } from './PlayingCard';
import Badge from './styled/Badge';
import { Theme } from './styled/theme';

interface Props {
  turn: ValidatedTurn;
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MutedFlex = styled(Flex)`
  color: ${({ theme }: { theme: Theme }) => (theme.colors.muted)};
`;

const Box = styled.div`
  padding: 1em;
`;

const CenteredParagraph = styled.p`
  text-align: center;
`;

export const ErrorBadge = styled(Badge)`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.error)};
  color: white;
  text-transform: uppercase;
`;

export const SuccessBadge = styled(Badge)`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.success)};
  color: white;
  text-transform: uppercase;
`;

export function generateTurnKey(turn: ValidatedTurn): string {
  return turn.playerId + turn.valid;
}

function Valid({ turn }: { turn: ValidTurn }) {
  const cardItems = turn.cards.map((card) => (
    <Box key={generateCardKey(card)}>
      <PlayingCard card={card} />
    </Box>
  ));

  return (
    <>
      <Flex>
        { cardItems }
      </Flex>
      <CenteredParagraph>{turn.playerId}</CenteredParagraph>
      <CenteredParagraph>
        <SuccessBadge>Valid turn</SuccessBadge>
      </CenteredParagraph>
    </>
  );
}

function InvalidHiddenAfterTimeout({ turn }: { turn: InvalidTurn }) {
  const SHOW_INVALID_TURN_TIMEOUT = 2000;
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const cardItems = turn.cards.map((card) => (
    <Box key={generateCardKey(card)}>
      <PlayingCard card={card} />
    </Box>
  ));

  useEffect(() => {
    const timeout: number = setTimeout(() => {
      setIsVisible(false);
    }, SHOW_INVALID_TURN_TIMEOUT);
    return () => clearTimeout(timeout);
  });

  return isVisible
    ? (
      <>
        <MutedFlex>
          { cardItems }
        </MutedFlex>
        <CenteredParagraph>{turn.playerId}</CenteredParagraph>
        <CenteredParagraph>
          <ErrorBadge>{turn.invalidReason}</ErrorBadge>
        </CenteredParagraph>
      </>
    )
    : null;
}

export default function Turn({ turn }: Props) {
  return turn.valid
    ? <Valid turn={turn} />
    : <InvalidHiddenAfterTimeout turn={turn} />;
}
