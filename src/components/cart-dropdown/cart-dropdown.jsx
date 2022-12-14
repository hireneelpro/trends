import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CartItem from "../cart-item/cart-item";
import { Link } from "react-router-dom";
import { CartDropdownContainer, CartItemsStyles } from "./cart-dropdown.styles";
import Button from "../button/button.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CartDropDown = () => {
  // const { cartItems } = useContext(CartContext);
const cartItems = useSelector(selectCartItems)
  return (
    <CartDropdownContainer>
      <CartItemsStyles>
        {cartItems.length ? (
          cartItems.map((each) => <CartItem item={each} key={each.id} />)
        ) : (
          <span>your cart is empty</span>
        )}
      </CartItemsStyles>
      <Button buttonType="google">
        <Link to={"/checkout"}>checkout</Link>
      </Button>
    </CartDropdownContainer>
  );
};
export default CartDropDown;
