
import { TOGGLE_FIRST_UPLOAD, TOGGLE_LAST_UPLOAD, } from "../actionTypes/actionTypes"


export const toggleFirstUpload = () => {
    return {
        type: TOGGLE_FIRST_UPLOAD,
    }
}
export const toggleLastUpload = () => {
    return {
        type: TOGGLE_LAST_UPLOAD,
    }
}
