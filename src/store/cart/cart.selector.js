import { createSelector } from "reselect";

export const selectCartToggle = (state) => state.cart.cartToggle

const selectCartReducer = state => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

// ===
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((total, item) => {
            total = total + item.quantity * item.price;
            return total;
        }, 0)

)




export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce((count, item) => {
            count = count + item.quantity;
            return count;
        }, 0)
)
