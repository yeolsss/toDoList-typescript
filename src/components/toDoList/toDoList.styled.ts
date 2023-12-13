import styled from 'styled-components';

export const ToDoList = styled.ul`
  max-width: 100rem;
  min-width: 80rem;
  width: 100%;
  font-size: 1.6rem;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, 20rem);
  justify-content: center;
`;

export const ToDoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  > section > h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;
