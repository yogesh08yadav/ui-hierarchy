import { combineReducers, createStore } from "redux";
import { hierarchyReducer } from "./reducers";

const reducer = combineReducers({
    hierarchReducer: hierarchyReducer
})

export const store = createStore(reducer)