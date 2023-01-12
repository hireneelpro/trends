import { TYPES_OF_CART } from "./cart.types";
import { CartItem } from "./cart.types";
import { AnyAction } from "redux";
import { setCartItems, setCartToggle } from "./cart.action";

export type CartState = {
  cartItems: CartItem[];
  cartToggle: boolean;
};

const INITIAL_STATE: CartState = {
  cartItems: [],
  cartToggle: false,
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartToggle.match(action)) {
    return {
      ...state,
      cartToggle: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};

// const { type, payload } = action;
// switch (type) {
//     case TYPES_OF_CART.CART_ITEMS:
//         return {
//             ...state,
//             cartItems: payload,
//         };
//     case TYPES_OF_CART.CART_TOGGLE:
//         return {
//             ...state,
//             cartToggle: payload,
//         };
//     default: {
//         return state;
//     }
// }
