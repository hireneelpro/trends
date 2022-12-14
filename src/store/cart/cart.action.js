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
        return [...cartItems, { ...addItem, quantity: 1 }];
    } else {
        return [...cartItems];
    }
};

// ===================
export const clearItemFromCart = (clearItem, cartItems) => {
    const newCartItems = cartItems.filter((item) => !(item.id === clearItem.id));
    return [...newCartItems];
};

// =============
export const removeItemFromCart = (removeItem, cartItems) => {
    if (removeItem.quantity < 2) {
        const newCartItems = clearItemFromCart(removeItem, cartItems);
        return newCartItems;
    } else {
        cartItems.forEach((item) => {
            if (item.id === removeItem.id) {
                removeItem.quantity--;
            }
        });
        return [...cartItems];
    }
};
// ==================
