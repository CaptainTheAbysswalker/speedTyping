import { combineReducers } from "redux";
import { textReducer } from "./textReducer";
import { stateReducer } from "./stateReducer";

export const rootReducer = combineReducers({ textReducer, stateReducer });
