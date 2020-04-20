import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Severity, Theme } from '../theme';

interface Props {
  children: ReactNode | ReactNode[];
  severity: Severity;
}

const MessageBox = styled(Box)`
  width: 100%;
  color: white;
  background-color: ${({ theme, severity }: { theme: Theme, severity: Severity }) => (theme.palette[severity].main)};
`;

export default function Message({ children, severity }: Props) {
  return (
    <MessageBox padding={1} severity={severity}>
      {children}
    </MessageBox>
  );
}
