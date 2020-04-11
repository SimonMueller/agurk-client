import styled from 'styled-components';
import { Theme } from './theme';

export default styled.div`
  background-color: ${({ theme }: { theme: Theme }) => (theme.colors.error)};
  padding: 0.5em;
  width: 100%;
  color: white;
  font-weight: bold;
`;
