import {
    TOGGLE_FIRST_UPLOAD, TOGGLE_LAST_UPLOAD
} from "../actionTypes/actionTypes";

const initialState = {
    filter: {
        first_upload: false,
        last_upload: false,
    },
    keyword: ""
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FIRST_UPLOAD:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    first_upload: !state.filter.first_upload
                }
            }
        case TOGGLE_LAST_UPLOAD:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    last_upload: !state.filter.last_upload
                }
            }

        default:
            return state
    }
}

export default filterReducer;