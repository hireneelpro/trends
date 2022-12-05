import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "./crown.svg";
import "./navigation.styles.scss";
import { signOut } from "firebase/auth";
import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../../utils/firebase/firbase.utils";
// import { signOutUser } from "../../../utils/firebase/firbase.utils";
import CartIcon from "../../cart-icon/cart-icon";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log(currentUser);
  // ===
  // const signOutHandler = async () => {
  //   await signOutUser()
  //   setCurrentUser(null)
  //   // when system signout  , it sends response as undefined , so it gets some response and then after only setCurrentUser(null) will be run

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
        </div>
          <Link className="nav-link" to="/cart">
            <CartIcon/>
          </Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
