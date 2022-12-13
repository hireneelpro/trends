import { CATEGORIES_TYPES } from "./categories.types";

const INITIAL_STATE = {
    categoriesArray: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_TYPES.ACTION_SETCATEGORIES: {
            return {
                ...state,
                categoriesArray: payload,
            };
        }
        default: {
            return state;
        }
    }
};
