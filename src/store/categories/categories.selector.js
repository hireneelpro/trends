export const selectCategories = (state) => (
    state.categories
        .categoriesArray
        .reduce((acc, each) => {
        const { title, items } = each
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

)
