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
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";
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
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div>
            <CrwnLogo />
          </div>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/mainsignpage">sign-in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>

        {toggleCart && <CartDropDown />}

        {/* cartdropdown will be rendered only when both are true
                 cartdropdown is always true */}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
