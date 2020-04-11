import styled from 'styled-components';
import { Theme } from './theme';

export const Badge = styled.span`
  background-color: transparent;
  border-radius: 0.25em;
  font-size: 0.7em;
  margin: 0 0.5em;
  padding: 0.15em 0.25em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const PrimaryBadge = styled(Badge)`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.primary)};
  color: white;
`;

export const AccentBadge = styled(Badge)`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.accent)};
  color: white;
`;

export const ErrorBadge = styled(Badge)`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.error)};
  color: white;
`;
