import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { UnstyledButton } from './styled/Button';
import { MonoSpan } from './styled/Text';

interface Props {
  children: ReactElement | ReactElement[];
  title: string;
  collapsedTitle: string;
  isDefaultCollapsed?: boolean;
}

const FullWidthUnstyledButton = styled(UnstyledButton)`
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default function Collapsible({
  children, collapsedTitle, title, isDefaultCollapsed = true,
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isDefaultCollapsed);

  return (
    <div>
      <FullWidthUnstyledButton onClick={() => setIsCollapsed(!isCollapsed)}>
        <Flex>
          <h2>
            { isCollapsed ? collapsedTitle : title }
          </h2>
          <h2>
            <MonoSpan>{ isCollapsed ? '+' : '-' }</MonoSpan>
          </h2>
        </Flex>
      </FullWidthUnstyledButton>

      { !isCollapsed && children }
    </div>
  );
}
