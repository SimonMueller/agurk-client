import React, { ReactElement, useState } from 'react';
import { UnstyledButton } from './styled/Button';

interface Props {
  children: ReactElement | ReactElement[];
  title: ReactElement;
  collapsedTitle: ReactElement;
  isDefaultCollapsed?: boolean;
}

export default function Collapsible({
  children, collapsedTitle, title, isDefaultCollapsed = true,
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isDefaultCollapsed);

  return (
    <div>
      <UnstyledButton onClick={() => setIsCollapsed(!isCollapsed)}>
        { isCollapsed ? collapsedTitle : title }
      </UnstyledButton>

      { !isCollapsed && children }
    </div>
  );
}
