import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationDiv = styled.div`
`;

export const NavigationContainer = styled.div`
  /* height: 70px; */
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const LogoContainer = styled(Link)`
  padding: 15px 25px;
`;

export const TrendsTitle = styled.h1``;

export const NavLinksContainer = styled.div`
  /* width: 50%; */
  /* height: 100%; */
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  ::first-letter {
    color: red;
  }
  cursor: pointer;
  padding: 5px 10px;
  color: black;
  font-weight: 800;
  &:hover {
    transition: all 0.5s linear;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 25px;
  }
`;
