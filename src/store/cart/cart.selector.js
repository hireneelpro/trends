import { createSelector } from "reselect";

export const selectCartToggle = (state) => state.cart.cartToggle
export const selectCartCount = (state) => state.cart.cartCount
export const selectCartTotal = (state) => state.cart.cartTotal
export const selectCartItems = (state) => state.cart.cartItems





// ===
// const newCartTotal = newCartItems.reduce((total, item) => {
//     total = total + item.quantity * item.price;
//     return total;
// }, 0);
// // ===
// const newCartCount = newCartItems.reduce((count, item) => {
//     count = count + item.quantity;
//     return count;
// }, 0);
// // ===