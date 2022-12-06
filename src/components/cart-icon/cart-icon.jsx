import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";

import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
const CartIcon = () => {
  const {cartItems, toggleCart, setToggleCart } = useContext(CartContext);
  const toggle = () => setToggleCart(!toggleCart);

// console.log(cartItems);
  const counts = cartItems.reduce((acc, each) => {
    acc = acc + each.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{counts}</span>
    </div>
  );
};
export default CartIcon;



// =========
