import { ADD_TO_CART, ALREADY_READED, LOAD_BLOGS } from "../actionTypes/actionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOGS,
        payload: data
    }
}
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
export const alreadyReaded = (data) => {
    return {
        type: ALREADY_READED,
        payload: data
    }
}