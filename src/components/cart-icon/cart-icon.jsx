import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart-context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { selectCartToggle } from "../../store/cart/cart.selector";
import { setCartToggle } from "../../store/cart/cart.action";
import { selectCartCount } from "../../store/cart/cart.selector";
const CartIcon = () => {
  // const { toggleCart, setToggleCart, cartCount } = useContext(CartContext);
  // const toggle = () => setToggleCart(!toggleCart);
  const dispatch = useDispatch();
  const cartToggleValue = useSelector(selectCartToggle);
  const cartCountValue = useSelector(selectCartCount);
  const toggle = () => {
    dispatch(setCartToggle(!cartToggleValue));
  };

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{cartCountValue}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;

// =========
