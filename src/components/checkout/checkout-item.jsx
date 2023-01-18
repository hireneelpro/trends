// import { useContext } from "react";
// import { CartContext } from "../../context/cart-context";
import "./checkout-item.scss";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";


const CheckOutItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  //   useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const dispatch = useDispatch();

  const addItem = () => {
    const newCartItems = addItemToCart(item, cartItems);
    dispatch(newCartItems);
  };

  const removeItem = () => {
    const newCartItems = removeItemFromCart(item, cartItems);
    dispatch(newCartItems)
  };
  const clearItem = () => {
    const newCartItems = clearItemFromCart(item, cartItems);
    dispatch(newCartItems)
  };

  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
      <div className="dec-no-inc">
        <i onClick={removeItem} className="fas fa-chevron-left decrease"></i>
        <span className="quantity">{quantity}</span>
        <i onClick={addItem} className="fas fa-chevron-right increase"></i>
      </div>
      <span> ${price}</span>
      <span>
        <i onClick={clearItem} className="fas fa-times remove"></i>
      </span>
    </div>
  );
};

export default CheckOutItem;

// ===============================================================
// import { useContext } from "react";
// import { CartContext } from "../../context/cart-context";
// import "./checkout-item.scss";
// // import Decrease from "./decrease-item";

// const CheckOutItem = ({ item }) => {
//   const { name, price, id, quantity, imageUrl } = item;
//   const { cartItems, setCartItems } = useContext(CartContext);

//   // ===============decrease===============//
//   const decrease = () => {
//     const decCartItems = [...cartItems];
//     decCartItems.forEach((each) => {
//       if (each.id === id) {
//         each.quantity--;
//         if (each.quantity < 1) {
//           console.log("hello");
//           remove();
//         } else {
//           setCartItems([...decCartItems]);
//         }
//       }
//     });
//   };
//   // ===============increase===============//
//   const increase = () => {
//     console.log(cartItems);
//     const incCartItems = cartItems.map((each) => {
//       if (each.id === id) {
//         each.quantity++;
//       }
//       return each;
//     });
//     setCartItems([...incCartItems]);
//   };
//   // ===============remove===============//
//   const remove = () => {
//     // console.log(cartItems);
//     const removedCartItems = cartItems.filter((each) => !(each.id === id));
//     setCartItems([...removedCartItems]);
//   };
//   return (
//     <div className="checkout-item">
//       <img src={imageUrl} alt={name} />
//       <h5>{name}</h5>
//       <div className="dec-no-inc">
//         <i onClick={decrease} className="fas fa-chevron-left decrease"></i>
//         <span className="quantity">{quantity}</span>
//         <i onClick={increase} className="fas fa-chevron-right increase"></i>
//       </div>
//       <span> ${price}</span>
//       <span>
//         <i onClick={remove} className="fas fa-times remove"></i>
//       </span>
//     </div>
//   );
// };

// export default CheckOutItem;
