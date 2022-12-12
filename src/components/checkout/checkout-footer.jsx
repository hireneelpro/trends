import { useContext, Fragment } from "react";
import { CartContext } from "../../context/cart-context";

const CheckOutFooter = () => {
  const { cartCount, cartTotal } = useContext(CartContext);

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
