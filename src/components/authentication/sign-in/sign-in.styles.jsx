import styled from "styled-components";

export const SignInStyles = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;

  & input {
    border: none;
    height: 2rem;
    // margin: 0 1rem;
    background-color: rgb(241, 232, 232);
    border-bottom: 1px solid rgb(233, 229, 229);
    &:focus {
      outline: none;
    }
  }
  & label {
    padding-left: 0.5rem;
    font-size: 0.7rem;
  }
  & h4,
  & h5 {
    text-align: center;
  }
`;
export const ButtonContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
`;
