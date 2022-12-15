import { combineReducers } from "redux";
import { persistStore,persistReducer } from "redux-persist";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.Reducer";
import { cartReducer } from "./cart/cart.reducer";



export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});
