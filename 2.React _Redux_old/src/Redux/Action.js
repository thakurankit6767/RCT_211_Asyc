import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../Redux/ActionType";
import axios from "axios";

export const addTodo = (todo) => (dispatch) => {
  dispatch({ type: ADD_TODOS_REQUEST });
  axios
    .post("http://localhost:8080/todos", todo)
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: ADD_TODOS_SUCCESS, payload: res.data });
      }, 1000);
    })
    .catch(() => {
      dispatch({ type: ADD_TODOS_FAILURE });
    });
};

export const getTodo = () => (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  axios
    .get("http://localhost:8080/todos")
    .then((res) => {
      setTimeout(() => {
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
      }, 2000);
    })
    .catch(() => {
      dispatch({ type: GET_TODOS_FAILURE });
    });
};
