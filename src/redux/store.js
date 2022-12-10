import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
