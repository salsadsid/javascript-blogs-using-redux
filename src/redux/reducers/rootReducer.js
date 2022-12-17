import { combineReducers } from "redux"
import blogReducer from "./blogReducer"
import filterReducer from "./filterReducer"
// import productReducer from "./productReducer"


const rootReducer = combineReducers({
    filter: filterReducer,
    blog: blogReducer
})

export default rootReducer