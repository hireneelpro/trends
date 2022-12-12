import "./checkout-page.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CheckOutItem from "./checkout-item";
import CheckOutHeading from "./checkout-heading";
import CheckOutFooter from "./checkout-footer";
import { useEffect } from "react";

const CheckOut = () => {
  const { cartItems, setToggleCart } = useContext(CartContext);

  useEffect(() => {
    setToggleCart(false);
  }, []);

  return (
    <div className="checkout-page">
      <div className="checkout-headings">{<CheckOutHeading />} </div>
      {/* =========== */}
      <div className="chk-items-container">
        {cartItems.map((each) => (
          <CheckOutItem item={each} key={each.id} />
        ))}
      </div>
      {/* =========== */}
      <div className="checkout-footer">
        <CheckOutFooter />
      </div>
    </div>
  );
};

export default CheckOut;
