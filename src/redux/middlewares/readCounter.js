import { ADD_TO_CART } from "../actionTypes/actionTypes";

const readCounter = (store) => (next) => (action) => {
    const state = store.getState();
    console.log(state)
    const cart = state.blog.cart;
    if (action.type === ADD_TO_CART) {
        const newAction = {
            ...action,
            payload: { ...action.payload, cartPosition: cart.length }
        }
        return next(newAction)
    }
    return next(action)
}

export default readCounter;