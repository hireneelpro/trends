import styled from "styled-components";

export const BaseButton = styled.button`
  width: auto;
  height: 35px;
  letter-spacing: 0.5px;
  line-height: 35px;
  padding: 0 35px 0 35px;
  margin:0 0.5rem;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

`
export const GoogleSignInButton = styled(BaseButton)`
   background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`  
export const Inverted = styled(BaseButton)`
background-color: white;
    width:fit-content;
    margin:1rem auto;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  
`
  

