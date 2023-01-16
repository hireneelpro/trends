import { useContext, Fragment } from "react";
// import { CartContext } from "../../context/cart-context";
import { useSelector } from "react-redux";
import "./checkout-footer.scss"
import {
  selectCartTotal,
  selectCartCount,
} from "../../store/cart/cart.selector";

const CheckOutFooter = () => {
  // const { cartCount, cartTotal } = useContext(CartContext);
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  return (
    <footer className="checkout-footer">
       <h4>Thank you for purchase</h4> 
      <h4>
        Total Items {cartCount} Total Price ${cartTotal}  
      </h4>
   
    </footer>
  );
};
export default CheckOutFooter;
