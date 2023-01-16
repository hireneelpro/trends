import "./product-card.scss";
// import { CartContext } from "../../context/cart-context";
// import { useContext } from "react";
import { addItemToCart, setCartItems } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch } from "react-redux";

// const { addItemToCart } = useContext(CartContext);


const ProductCard = ({ product }) => {

  const { name, price, imageUrl, } = product;

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  
  const addToCart = () => {
    const newCartItems = addItemToCart(product, cartItems)
    dispatch(newCartItems)
  }
  // ============================//
 
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <button onClick={addToCart} className="btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
// ===================================================================================================
// import "./product-card.scss";
// import { CartContext } from "../../context/cart-context";
// import { useContext } from "react";

// const ProductCard = ({ product }) => {
//   const newProduct = { ...product, quantity: 1 };
//   const { name, price, imageUrl, id } = newProduct;

//   const { cartItems, setCartItems } = useContext(CartContext);
//   // ============================//
//   let x = false;
//   const addToCart = () => {
//     cartItems.forEach((item) => {
//       if (item.id === id) {
//         item.quantity++;
//         console.log(item.quantity);
//         x = true;
//       }
//     });
//     if (x === false) {
//       setCartItems([...cartItems, newProduct]);
//     } else {
//       setCartItems([...cartItems]);
//     }
//   };

//   return (
//     <div className="product-card-container">
//       <img src={imageUrl} alt={`${name}`} />
//       <div className="footer">
//         <span className="name">{name}</span>
//         <span className="price">{price}</span>
//       </div>
//       <button onClick={addToCart} className="btn">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
// // ===================================================================================================