import "./checkout-page.scss";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart-context";
import CheckOutItem from "./checkout-item";
import CheckOutHeading from "./checkout-heading";
import CheckOutFooter from "./checkout-footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import PaymentForm from "../payment-form/payment-form";
import { setCartToggle } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

const CheckOut = () => {
  // const { cartItems, setToggleCart } = useContext(CartContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartToggle(false));
  }, []);

  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  //

  return (
    <div className="checkout-page">
      <div className="checkout-headings">{<CheckOutHeading />} </div>
      <div className="chk-items-container">
        {cartItems.map((each) => (
          <CheckOutItem item={each} key={each.id} />
        ))}
      </div>
      {/* =========== */}
      <div className="checkout-footer">
        <CheckOutFooter />
      </div>
      <PaymentForm />
    </div>
  );
};

export default CheckOut;
