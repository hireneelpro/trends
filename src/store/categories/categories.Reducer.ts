import { CATEGORIES_TYPES, Category } from "./categories.types";
import { CategoryAction } from "./categories.action";

export type CategoriesInitialState = {
  readonly categoriesArray: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE: CategoriesInitialState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action = {} as CategoryAction
) => {
  // const { type, payload } = action; <== it will give error because of discriminatory union.
  switch (action.type) {
    case CATEGORIES_TYPES.FETCH_CATEGORIES_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categoriesArray: action.payload,
      };
    }
    case CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
