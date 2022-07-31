import { legacy_createStore, applyMiddleware, compose } from "redux";
import { todoReducer } from "../Redux/Reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  todoReducer,
  composeEnhancers(applyMiddleware(thunk))
);