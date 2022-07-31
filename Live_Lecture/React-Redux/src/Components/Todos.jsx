import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
} from "../Redux/AppReducer/action";
import axios from "axios";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => {
    return { todos: store.appReducer.todos };
  }, shallowEqual);

  console.log("Listening from todo");

  const getData = () => {
    dispatch(getTodosRequest());

    return axios
      .get("http://localhost:8080/todos")
      .then(({ data }) => {
        dispatch(getTodosSuccess(data));
      })
      .catch(() => {
        dispatch(getTodosFailure());
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput />
      {todos.length > 0 &&
        todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>)}
    </div>
  );
};

export default Todos;
