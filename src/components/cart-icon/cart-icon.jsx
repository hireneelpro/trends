import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
const CartIcon = () => {
  const { toggleCart, setToggleCart, cartCount } = useContext(CartContext);
  const toggle = () => setToggleCart(!toggleCart);

  // console.log(cartItems);
  // const counts = cartItems.reduce((acc, each) => {
  //   acc = acc + each.quantity;
  //   return acc;
  // }, 0);

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;

// =========
