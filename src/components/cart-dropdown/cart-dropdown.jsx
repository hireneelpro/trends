import "./cart-dropdown.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CartItem from "../cart-item/cart-item";
import CheckOut from "../checkout/checkout-page";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems} = useContext(CartContext);
  // console.log(cartItems);
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((each) =>( < CartItem item={each} key={each.id} />) 
        )}
      </div>
      <button className="btn">
       <Link to={'/checkout'}>
           checkout
          </Link>
      </button>
    </div>
  );
};
export default CartDropDown;
