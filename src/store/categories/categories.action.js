import { createAction } from "../../utils/reducer/reducer.utils";
import { TYPES_OF_CART } from "../cart/cart.types";
import { CATEGORIES_TYPES } from "./categories.types";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firbase.utils";
// export const setCategoriesArray = (categoriesArray) => (createAction(CATEGORIES_TYPES.ACTION_SETCATEGORIES, categoriesArray));
export const fetchCategoriesStart = () => createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START)
export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error)

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart())

    try {
        const categoriesArray = await getCategoriesAndDocuments('categories')
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}

