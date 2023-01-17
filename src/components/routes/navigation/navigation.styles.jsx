import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationDiv = styled.div`
  width: 100%;
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  z-index: 5;
  background-color: white;
padding:0 1rem;
  position: sticky;
  top: 0;
  @media screen and (min-width:768px){
    padding:0 2rem
  }
  @media screen and (min-width:1170px){
    padding:0 4rem
  }
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
