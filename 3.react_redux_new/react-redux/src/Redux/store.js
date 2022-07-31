import { reducer as TodoReducer } from "./reducer";
import { legacy_createStore } from "redux";

export const store = legacy_createStore(TodoReducer);