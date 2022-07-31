import * as types from "./actionTypes";

export const handleIncrement = () => {
  return {
    type: types.INCREMENT_COUNTER,
    payload: 1,
  };
};

export const handleDecrement = () => {
  return {
    type: types.DECREMENT_COUNTER,
    payload: 1,
  };
};

export const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};

export const getTodosSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload,
  };
};

export const getTodosFailure = () => {
  return {
    type: types.GET_TODOS_FAILURE,
  };
};

export const addTodosRequest = () => {
  return {
    type: types.ADD_TODOS_REQUEST,
  };
};

export const addTodosSuccess = (payload) => {
  return {
    type: types.ADD_TODOS_SUCCESS,
    payload,
  };
};

export const addTodosFailure = () => {
  return {
    type: types.ADD_TODOS_FAILURE,
  };
};