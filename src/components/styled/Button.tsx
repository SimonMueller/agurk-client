import styled from 'styled-components';
import { Theme } from './theme';

export const PrimaryButton = styled.button`
  display: inline-block;
  font-size: 1em;
  height: 3em;
  padding: 0.75em;
  width: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }: { theme: Theme }) => (theme.colors.primary)};
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => (theme.colors.primary)};

  &:hover {
    background-color: ${({ theme }: { theme: Theme }) => (theme.colors.primary)};
    color: white;
    cursor: pointer;
  }
`;

export const UnstyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;
