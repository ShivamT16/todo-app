import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { todosReducer } from "./reducers";

export const store = createStore(todosReducer,applyMiddleware(thunk))