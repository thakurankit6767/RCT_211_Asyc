import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({ appReducer, authReducer });

const store = legacy_createStore(rootReducer);

export default store;