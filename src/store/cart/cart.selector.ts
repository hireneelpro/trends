import { setCartToggle } from "./cart.action";
import { CartItem } from "./cart.types";
import { createSelector } from "reselect";

import { CartState } from "./cart.reducer";

// export const selectCartToggle = (state) => state.cart.cartToggle

const selectCartReducer = (state): CartState => state.cart;

export const selectCartToggle = createSelector(
  [selectCartReducer],
  (cart) => cart.cartToggle
);
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart: CartState): CartItem[] => cart.cartItems
);

// ===
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => {
    total = total + item.quantity * item.price;
    return total;
  }, 0)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((count, item) => {
    count = count + item.quantity;
    return count;
  }, 0)
);
