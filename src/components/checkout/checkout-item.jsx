import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./checkout-item.scss";

const CheckOutItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const addItem = () => {
    addItemToCart(item);
  };
  const removeItem = () => {
    removeItemFromCart(item);
  };
  const clearItem = () => {
    clearItemFromCart(item);
  };

  return (
    <div className="checkout-item">
      <img src={imageUrl} alt={name} />
      <h5>{name}</h5>
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
