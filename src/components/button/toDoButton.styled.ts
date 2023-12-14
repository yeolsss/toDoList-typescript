import styled from 'styled-components';

export const Button = styled.button`
  width: 7rem;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0);
  transition:
    border-color 0.2s ease-in,
    color 0.2s ease-in;
  &:hover {
    border-color: var(--borderColor);
  }
`;
