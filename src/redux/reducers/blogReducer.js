import { ADD_BLOG, ADD_TO_CART, ALREADY_READED, FIND_A_BLOG, LOAD_BLOGS, REMOVE_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    blogs: [],
    find: []
};

const blogReducer = (state = initialState, action) => {
    const selectedBlog = state.cart.find(
        (blog) => blog._id === action.payload._id
    );
    switch (action.type) {
        case LOAD_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        case ADD_TO_CART:
            if (selectedBlog) {
                const newCart = state.cart.filter(
                    (blog) => blog._id !== selectedBlog._id
                );


                return {
                    ...state,
                    cart: [...newCart, selectedBlog],
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload }],
            };
        case ALREADY_READED:
            if (selectedBlog) {
                const newCart = state.cart.filter(
                    (blog) => blog._id !== selectedBlog._id
                );
                return {
                    ...state,
                    cart: [...newCart, { ...selectedBlog, cartPosition: -1 }],
                };
            }
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
            };
        case REMOVE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog._id !== action.payload
                ),
            };
        case FIND_A_BLOG:
            return {
                ...state,
                find: state.blogs.filter(
                    (blog) => blog._id === action.payload
                ),
            };
        default:
            return state;
    }
}

export default blogReducer