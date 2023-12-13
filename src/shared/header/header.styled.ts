import styled from 'styled-components';

export const Header = styled.header`
  font-size: 2.4rem;
  font-weight: 100;
  letter-spacing: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  > div {
    display: flex;
    column-gap: 2rem;
    align-items: center;
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5rem;
      height: 5rem;
      font-size: 2.4rem;
    }
  }
`;
