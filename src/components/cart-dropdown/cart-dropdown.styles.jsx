import styled from "styled-components";
import { GoogleSignInButton } from "../button/button.styles";


export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  border: solid;
  
  ${GoogleSignInButton} {
    background-color: #f5afe9;
    margin-top: auto;
  }
  span {
    font-size: 15px;
    text-transform:upperCase;
    margin: 50px auto;
  }
  `;

  export const CartItemsStyles = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  `;