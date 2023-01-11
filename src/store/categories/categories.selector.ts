import { createSelector } from "reselect";
import { CategoriesInitialState } from "./categories.Reducer";
import { CategoryMap } from "./categories.types";

const selectCategoriesReducer = (state): CategoriesInitialState =>
  state.categories;

// ========== for optimization using createSelector/// called memoization
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice):CategoryMap =>
    categoriesSlice.categoriesArray.reduce((acc, each) => {
      const { title, items } = each;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const categoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
// ====  using simple function===========//

// export const selectCategories = (state) => (
//     state.categories
//         .categoriesArray
//         .reduce((acc, each) => {
//             const { title, items } = each
//             acc[title.toLowerCase()] = items;
//             return acc;
//         }, {})

// )

