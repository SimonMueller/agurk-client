import styled from 'styled-components';
import { Theme } from './theme';

export const PrimaryButton = styled.button`
  display: inline-block;
  padding: 0.5rem;
  width: 10rem;
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

export const FullWidthPrimaryButton = styled(PrimaryButton)`
  width: 100%;
`;
