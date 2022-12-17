import { ADD_TO_CART, ALREADY_READED, LOAD_BLOGS } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    blogs: [],
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
        default:
            return state;
    }
}

export default blogReducer