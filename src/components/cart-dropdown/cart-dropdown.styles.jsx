import styled from "styled-components";
import { GoogleSignInButton, Inverted } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding:20px 10px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${GoogleSignInButton} {
    background-color: #c4bebe;
    margin-top: auto;
  }
  span {
    font-size: 15px;
    text-transform: upperCase;
    margin: 50px auto;
  }
`;

export const CartItemsStyles = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow : auto;
`;
