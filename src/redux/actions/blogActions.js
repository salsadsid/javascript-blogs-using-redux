import { ADD_BLOG, ADD_TO_CART, ALREADY_READED, FIND_A_BLOG, LOAD_BLOGS, REMOVE_BLOG, UPDATE_BLOG } from "../actionTypes/actionTypes"

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
export const addBlog = (data) => {
    return {
        type: ADD_BLOG,
        payload: data
    }
}
export const removeBlog = (id) => {
    return {
        type: REMOVE_BLOG,
        payload: id,
    };
};
export const updateBlog = (id) => {
    return {
        type: UPDATE_BLOG,
        payload: id,
    };
};
export const findABlog = (id) => {
    return {
        type: FIND_A_BLOG,
        payload: id,
    };
};