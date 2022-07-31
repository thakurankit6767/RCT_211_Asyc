import * as types from "./actionTypes";

export const getRequest = () => {
  return {
    type: types.GET_REQUEST,
  };
};

export const getSuccess = (payload) => {
  return {
    type: types.GET_SUCCESS,
    payload,
  };
};

export const getFailure = () => {
  return {
    type: types.GET_FAILURE,
  };
};

export const addRequest = () => {
  return {
    type: types.ADD_REQUEST,
  };
};

export const addSuccess = (payload) => {
  return {
    type: types.ADD_SUCCESS,
    payload,
  };
};

export const addFailure = () => {
  return {
    type: types.ADD_FAILURE,
  };
};

export const toggleRequest = () => {
  return {
    type: types.TOGGLE_REQUEST,
  };
};

export const toggleSuccess = (payload) => {
  return {
    type: types.TOGGLE_SUCCESS,
    payload,
  };
};

export const toggleFailure = () => {
  return {
    type: types.TOGGLE_FAILURE,
  };
};

export const removeRequest = () => {
  return {
    type: types.REMOVE_REQUEST,
  };
};

export const removeSuccess = (payload) => {
  return {
    type: types.REMOVE_SUCCESS,
    payload,
  };
};

export const removeFailure = () => {
  return {
    type: types.REMOVE_FAILURE,
  };
};

export const updateRequest = () => {
  return {
    type: types.UPDATE_REQUEST,
  };
};

export const updateSuccess = (payload) => {
  return {
    type: types.UPDATE_SUCCESS,
    payload,
  };
};

export const updateFailure = () => {
  return {
    type: types.UPDATE_FAILURE,
  };
};
