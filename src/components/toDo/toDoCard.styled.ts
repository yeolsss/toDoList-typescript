import styled from 'styled-components';

export const ToDoCard = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1.5rem;
  border: 1px solid var(--borderColor);
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition:
    color 0.2s ease-in,
    border-color 0.2s ease-in background-color 0.2s ease-in;

  > span,
  p {
    letter-spacing: 0.05rem;
  }

  > span {
    font-size: 2rem;
    line-height: 2.5rem;
    word-break: break-all;
  }
  > p {
    font-size: 1.4rem;
    line-height: 2rem;
    word-break: break-all;
  }

  &:hover {
    background-color: var(--textColor);

    > span,
    p {
      color: var(--bgColor);
    }
    > div {
      > button {
        transition:
          color 0.2s ease-in,
          border-color 0.2s ease-in;
        color: var(--bgColor);
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  > button:first-child {
    &:hover {
      color: var(--cancelColor);
      border-color: var(--cancelColor);
    }
  }

  > button:last-child {
    &:hover {
      color: var(--doneColor);
      border-color: var(--doneColor);
    }
  }
`;
