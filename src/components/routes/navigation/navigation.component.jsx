import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "./crown.svg";
import "./navigation.styles.scss";
import { signOut } from "firebase/auth";
import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firbase.utils";
// import { signOutUser } from "../../../utils/firebase/firbase.utils";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropDown from "../../cart-dropdown/cart-dropdown";
import { CartContext } from "../../../context/cart-context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  // ===
  // const signOutHandler = async () => {
  //   await signOutUser()
  //   setCurrentUser(null)
  const { toggleCart } = useContext(CartContext);

  // };
  // ====
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/mainsignpage">
              sign-in
            </Link>
          )}
          <CartIcon />
        </div>

        {toggleCart && <CartDropDown />}

        {/* cartdropdown will be rendered only when both are true
                 cartdropdown is always true */}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
