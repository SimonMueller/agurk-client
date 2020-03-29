import styled from 'styled-components';
import { Theme } from './theme';

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
  display: block;
`;

export const Label = styled.label`
  display: block;
  font-style: italic;
  margin-bottom: 0.25rem;
`;

export const ErrorMessage = styled.div`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.error)};
  padding: 0.5rem;
  width: 100%;
  color: white;
  font-weight: bold;
`;
