import { useContext, Fragment } from "react";
import { CartContext } from "../../context/cart-context";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartCount,
} from "../../store/cart/cart.selector";

const CheckOutFooter = () => {
  // const { cartCount, cartTotal } = useContext(CartContext);
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  return (
    <Fragment>
      <h4>
        Total Items {cartCount} Total Price ${cartTotal}
      </h4>
      <h5>Thank you for purchase</h5>
    </Fragment>
  );
};
export default CheckOutFooter;
