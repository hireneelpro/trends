import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.Reducer";
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
});
