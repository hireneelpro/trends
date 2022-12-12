import { createContext, useReducer } from "react";

const addSingleItem = (addItem, cartItems) => {
  let x = false;
  cartItems.forEach((item) => {
    if (item.id === addItem.id) {
      item.quantity++;
      x = true;
    }
  });
  if (x === false) {
    return [...cartItems, { ...addItem, quantity: 1 }];
  } else {
    return [...cartItems];
  }
};
// ============
const clearSingleItem = (clearItem, cartItems) => {
  const newCartItems = cartItems.filter((item) => !(item.id === clearItem.id));
  return [...newCartItems];
};
// ====================
const removeSingleItem = (removeItem, cartItems) => {
  // console.log(removeItem);
  if (removeItem.quantity < 2) {
    const x = clearSingleItem(removeItem, cartItems);
    return x;
  } else {
    cartItems.forEach((item) => {
      if (item.id === removeItem.id) {
        removeItem.quantity--;
      }
    });
    return [...cartItems];
  }
};
// ===========================
const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  toggleCart: false,
};

// =========================== cartReducer==============================
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        toggleCart: payload,
      };
    default:
      throw new Error(`unhandled type of ${type}in cartReducer`);
  }
};

// ===================================//
export const CartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

// ================== CartProvider =============================//
export const CartProvider = ({ children }) => {
  // const [toggleCart, setToggleCart] = useState(false);

  const [{ cartItems, cartCount, cartTotal, toggleCart }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  // ================
  const updateCartItemReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce((total, item) => {
      total = total + item.quantity * item.price;
      return total;
    }, 0);
    // ===
    const newCartCount = newCartItems.reduce((count, item) => {
      count = count + item.quantity;
      return count;
    }, 0);
    // ===
    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  //=================
  const addItemToCart = (addItem) => {
    const newCartItems = addSingleItem(addItem, cartItems);
    updateCartItemReducer(newCartItems);
  };
  // ===================
  const clearItemFromCart = (clearItem) => {
    const newCartItems = clearSingleItem(clearItem, cartItems);
    updateCartItemReducer(newCartItems);
  };

  // =============
  const removeItemFromCart = (removeItem) => {
    const newCartItems = removeSingleItem(removeItem, cartItems);
    updateCartItemReducer(newCartItems);
  };
  // ==================
  const setToggleCart = (bool) => {
    dispatch({ type: "TOGGLE_CART", payload: bool });
  };

  //=============
  const value = {
    toggleCart,
    setToggleCart,
    cartItems,
    cartCount,
    cartTotal,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// ======================================================================
// import { useEffect } from "react";
// import { useState, createContext } from "react";

// const addSingleItem = (addItem, cartItems, setCartItems) => {
//   console.log(addItem);
//   let x = false;
//   const newProduct = { ...addItem, quantity: 1 };
//   cartItems.forEach((item) => {
//     if (item.id === newProduct.id) {
//       item.quantity++;
//       x = true;
//     }
//   });
//   if (x === false) {
//     setCartItems([...cartItems, newProduct]);
//   } else {
//     setCartItems([...cartItems]);
//   }
// };
// // ============
// const clearSingleItem = (clearItem, cartItems, setCartItems) => {
//   const newCartItems = cartItems.filter((item) => !(item.id === clearItem.id));
//   setCartItems([...newCartItems]);
// };
// // ====================
// const removeSingleItem = (removeItem, cartItems, setCartItems) => {
//   // console.log(removeItem);
//   if (removeItem.quantity < 2) {
//     clearSingleItem(removeItem, cartItems, setCartItems);
//     return;
//   } else {
//     cartItems.forEach((item) => {
//       if (item.id === removeItem.id) {
//         removeItem.quantity--;
//       }
//     });
//     setCartItems([...cartItems]);
//   }
// };

// // ===================================//
// export const CartContext = createContext({
//   toggleCart: false,
//   setToggleCart: () => {},
//   cartItems: [],
//   setCartItems: () => {},
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });
// export const CartProvider = ({ children }) => {
//   const [toggleCart, setToggleCart] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);
//   // ================
//   useEffect(() => {
//     const newCartCount = cartItems.reduce((count, item) => {
//       count = count + item.quantity;
//       return count;
//     }, 0);
//     setCartCount(newCartCount);
//   }, [cartItems]);
//   useEffect(() => {
//     const newCartTotal = cartItems.reduce((total, item) => {
//       total = total + item.quantity * item.price;
//       return total;
//     }, 0);
//     setCartTotal(newCartTotal);
//   }, [cartItems]);

//   //=================
//   const addItemToCart = (addItem) => {
//     addSingleItem(addItem, cartItems, setCartItems);
//   };
//   // ===================
//   const clearItemFromCart = (clearItem) => {
//     clearSingleItem(clearItem, cartItems, setCartItems);
//   };

//   // =============
//   const removeItemFromCart = (removeItem) => {
//     removeSingleItem(removeItem, cartItems, setCartItems);
//   };
//   // ==================

//   //=============
//   const value = {
//     toggleCart,
//     setToggleCart,
//     cartItems,
//     setCartItems,
//     cartCount,
//     setCartCount,
//     cartTotal,
//     setCartTotal,
//     addItemToCart,
//     removeItemFromCart,
//     clearItemFromCart,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
