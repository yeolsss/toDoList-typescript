import styled from 'styled-components';

export const Input = styled.input`
  padding: 1rem;
  background-color: unset;
  border: 1px solid rgba(0, 0, 0, 0);
  border-bottom-color: var(--borderColor);
  width: 27rem;
  font-weight: 100;
  color: var(--textColor);
  font-size: 1.6rem;
  transition:
    border-color 0.2s ease-in,
    border-radius 0.2s ease-in;

  &:focus {
    border-color: var(--borderColor);
    border-radius: 0.5rem;
  }
`;
