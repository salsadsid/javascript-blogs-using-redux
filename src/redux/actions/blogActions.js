import { LOAD_BLOGS } from "../actionTypes/actionTypes"

export const loadBlogs = (data) => {
    return {
        type: LOAD_BLOGS,
        payload: data
    }
}