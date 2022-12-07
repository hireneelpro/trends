import "./checkout-page.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CheckOutItem from "./checkout-item";
import CheckOutHeading from "./checkout-heading";

const CheckOut = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-headings">{<CheckOutHeading />} </div>
      <div className="chk-items-container">
        {cartItems.map((each) => (
          <CheckOutItem item={each} key={each.id} />
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
