import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 80%;
  margin: 5rem 0;
  > form {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
    > div {
      width: 60rem;
      display: flex;
      justify-content: space-between;
    }
  }
`;
