import styled from 'styled-components';
import { ButtonWrapper } from '../toDo/toDoCard.styled.ts';

export const ModalWrapper = styled.div<{ $IsOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $IsOpen }) => ($IsOpen ? 1 : 0)};
  z-index: ${({ $IsOpen }) => ($IsOpen ? 10 : -1)};
  display: flex;
  transition: opacity 0.2s ease-in;
`;

export const ModalConfirm = styled.main<{ $IsOpen: boolean }>`
  width: 30rem;
  height: 15rem;
  margin: auto;
  background-color: var(--cardColor);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4rem;
  opacity: ${({ $IsOpen }) => ($IsOpen ? 1 : 0)};
  padding: 0 2rem;
  > h1 {
    font-size: 2.4rem;
    letter-spacing: 0.1rem;
    line-height: 3rem;
  }
`;

export const ModalButtonWrapper = styled(ButtonWrapper)`
  justify-content: center;
  column-gap: 1rem;
`;
