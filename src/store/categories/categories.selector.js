import { createSelector } from "reselect";
const selectCategoriesReducer = (state) => state.categories


// ========== for optimization using createSelector/// called memoization
export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.categoriesArray
        .reduce((acc, each) => {
            const { title, items } = each
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
)

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

export const categoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categories) => categories.isLoading
)
