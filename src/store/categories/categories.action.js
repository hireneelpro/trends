import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories.types";
export const setCategoriesArray = (categoriesArray) => (createAction(CATEGORIES_TYPES.ACTION_SETCATEGORIES, categoriesArray));
