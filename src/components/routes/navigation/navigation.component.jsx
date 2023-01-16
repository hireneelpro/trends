import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "./crown.svg";
// import "./navigation.styles.jsx";
import { signOut } from "firebase/auth";
// import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firbase.utils";
import { useSelector } from "react-redux";
// import { signOutUser } from "../../../utils/firebase/firbase.utils";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropDown from "../../cart-dropdown/cart-dropdown";
import { CartContext } from "../../../context/cart-context";
import {
  NavigationDiv,
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,TrendsTitle
} from "./navigation.styles.jsx";
import { selectUser } from "../../../store/user/user.selector";
import { selectCartToggle } from "../../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectUser);
  const toggleCart = useSelector(selectCartToggle)

  // const { currentUser } = useContext(UserContext);S
  // console.log(currentUser);
  // ===
  // const signOutHandler = async () => {
  //   await signOutUser()
  //   setCurrentUser(null)
  // const { toggleCart } = useContext(CartContext);

  // };
  // ====
  return (
    <NavigationDiv>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <CrwnLogo />
          </div>
        </LogoContainer>
        <TrendsTitle>Trends</TrendsTitle>
        <NavLinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/mainsignpage">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>

        {toggleCart && <CartDropDown />}

        {/* cartdropdown will be rendered only when both are true
                 cartdropdown is always true */}
      </NavigationContainer>

      <Outlet />
    </NavigationDiv>
  );
};

export default Navigation;
