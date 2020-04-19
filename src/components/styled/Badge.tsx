import styled from 'styled-components';
import { Severity, Theme } from '../../theme';

export default styled.span`
  background-color: ${({ theme, severity }: { theme: Theme, severity: Severity }) => (theme.palette[severity].main)};
  border-radius: 0.25rem;
  font-size: ${({ theme }: { theme: Theme }) => (theme.typography.caption.fontSize)};
  margin: 0 ${({ theme }: { theme: Theme }) => (theme.spacing(1))}px;
  padding: 0.15rem 0.25rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;
