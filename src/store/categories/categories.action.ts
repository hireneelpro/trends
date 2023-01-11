// import {
//   fetchCategoriesAsync,
//   fetchCategoriesFailed,
//   FetchCategoriesFailed,
// } from "./categories.action";
import {
  createAction,
  Action,
  ActionWithPayLoad,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPES, CategoryItem, Category } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firbase.utils";

// === type declaration ===//
export type FetchCategoriesStart =
  Action<CATEGORIES_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayLoad<
  CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayLoad<
  CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;
export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

// ===functions==== //
export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccess =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);

// ======//     REDUX THUNK     //=====//
// === in normal flow of program  useDispatch can be used only inside react component only but here using this method style we can use dispatch outside of component ... the purpose of  this is to make reusable component and having clean code.
//  if we use all the code inside this function inside component when you need it
export const fetchCategoriesAsync = () => async (dispatch: any) => {
  //==== this inside code can be written inside component where we need will work same =====//
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error: any) {
    dispatch(fetchCategoriesFailed(error));
  }
  //====================== this inside code ==================//
};
