import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    count:counterReducer
})

export const store = createStore(rootReducer, composeWithDevTools());