
import { TYPES_OF_CART } from "./cart.types"


const INITIAL_STATE = {
    cartItems: [],
    cartToggle: false,
    cartTotal: 0,
    cartCount: 0,
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case TYPES_OF_CART.CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        case TYPES_OF_CART.CART_TOGGLE:
            return {
                ...state,
                cartToggle: payload
            }



        default: {
            return state
        }


    }

}
