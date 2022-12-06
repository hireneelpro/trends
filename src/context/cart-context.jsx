import { useState, createContext } from "react";

export const CartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cartItems: [],
  setCartItems: () => {},
});
export const CartProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = { toggleCart, setToggleCart, cartItems, setCartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
