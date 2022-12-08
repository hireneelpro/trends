import { useContext,Fragment } from "react";
import { CartContext } from "../../context/cart-context";

const CheckOutFooter = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, each) => acc + each.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, each) => acc + each.price * each.quantity,
    0
  );

    return (
        <Fragment>
            <h4>Total Items {totalItems} Total Price ${totalPrice}</h4>
            <h5>Thank you for purchase</h5>
      </Fragment>
  )
};
export default CheckOutFooter;
