import { loadData, saveData } from "../../utils/accessLocalStorage";
import * as types from "./actionTypes";

const initState = {
  counter: loadData("counter") || 5,
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.INCREMENT_COUNTER:
      // counter increment data saving in localStorage
      let newIncCount = state.counter + payload;
      saveData("counter", newIncCount);
      return {
        ...state,
        counter: newIncCount,
      };
    case types.DECREMENT_COUNTER:
      // counter decrement data saving in localStorage
      let newDecCount = state.counter - payload;
      saveData("counter", newDecCount);
      return {
        ...state,
        counter: newDecCount,
      };

    // GETTING TODOS DATA
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };

    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // ADDING TODOS DATA
    case types.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, payload],
        isLoading: false,
        isError: false,
      };

    case types.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};