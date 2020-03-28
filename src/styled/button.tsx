import styled from 'styled-components';

export const PrimaryButton = styled.button`
  display: inline-block;
  padding: 0.5rem;
  width: 10rem;
  background: transparent;
  border: 2px solid black;

  &:hover {
    font-weight: bold;
  }
`;

export const FullWitdthPrimaryButton = styled(PrimaryButton)`
  width: 100%;
`;

export const UnstyledButton = styled.button`
  all: unset;
`;
