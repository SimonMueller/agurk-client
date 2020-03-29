import styled from 'styled-components';

export const PrimaryButton = styled.button`
  display: inline-block;
  padding: 0.5rem;
  width: 10rem;
  background-color: transparent;
  border: 2px solid #008b8b;
  font-weight: bold;
  color: #008b8b;

  &:hover {
    background-color: #00a5a5;
    color: white;
    cursor: pointer;
  }
`;

export const FullWidthPrimaryButton = styled(PrimaryButton)`
  width: 100%;
`;
