import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";

import { TYPES_OF_CART } from "./cart.types";
import { CartItem } from "./cart.types";

export const setCartItems = withMatcher((newCartItems: CartItem[]) =>
  createAction(TYPES_OF_CART.CART_ITEMS, newCartItems)
);
export const setCartToggle = withMatcher((bool: boolean) =>
  createAction(TYPES_OF_CART.CART_TOGGLE, bool)
);

//=================
export const addItemToCart = (addItem: CartItem, cartItems: CartItem[]) => {
  let x = false;
  cartItems.forEach((item) => {
    if (item.id === addItem.id) {
      item.quantity++;
      x = true;
    }
  });
  if (x === false) {
    const newCartItems = [...cartItems, { ...addItem, quantity: 1 }];
    return newCartItems;
    //   return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems);
  } else {
    const newCartItems = [...cartItems];
    return newCartItems;
    //   return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems);
  }
};

// ===================
export const clearItemFromCart = (
  clearItem: CartItem,
  cartItems: CartItem[]
) => {
  const newCartItems = cartItems.filter((item) => !(item.id === clearItem.id));
  return newCartItems;
  // return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems);
};

// =============
export const removeItemFromCart = (
  removeItem: CartItem,
  cartItems: CartItem[]
) => {
  if (removeItem.quantity < 2) {
    // clearItemFromCart(removeItem, cartItems)

    const newCartItems = cartItems.filter(
      (item) => !(item.id === removeItem.id)
    );
    return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems);
  } else {
    const newCartItems = cartItems.map((item) => {
      if (item.id === removeItem.id) {
        removeItem.quantity--;
      }
      return item;
    });
    return newCartItems;
    //   return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems);
  }
};

// ==================
