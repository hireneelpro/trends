import { createAction } from "../../utils/reducer/reducer.utils";
import { TYPES_OF_CART } from "./cart.types";


export const setCartItems = (newCartItems) => createAction(TYPES_OF_CART.CART_ITEMS, newCartItems)
export const setCartToggle = (bool) => createAction(TYPES_OF_CART.CART_TOGGLE, bool)

//=================
export const addItemToCart = (addItem, cartItems) => {
    let x = false;
    cartItems.forEach((item) => {
        if (item.id === addItem.id) {
            item.quantity++;
            x = true;
        }
    });
    if (x === false) {
        const newCartItems = [...cartItems, { ...addItem, quantity: 1 }]
        return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems)
    } else {
        const newCartItems = [...cartItems];
        return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems)
    }
};

// ===================
export const clearItemFromCart = (clearItem, cartItems) => {
    const newCartItems = cartItems.filter((item) => !(item.id === clearItem.id));
    return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems)
};

// =============
export const removeItemFromCart = (removeItem, cartItems) => {
    if (removeItem.quantity < 2) {
        // clearItemFromCart(removeItem, cartItems)

        const newCartItems = cartItems.filter((item) => !(item.id === removeItem.id));
        return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems)
    } else {
        const newCartItems = cartItems.map((item) => {
            if (item.id === removeItem.id) {
                removeItem.quantity--;
            }
            return item
        });
        return createAction(TYPES_OF_CART.CART_ITEMS, newCartItems);
    }
};
// ==================
