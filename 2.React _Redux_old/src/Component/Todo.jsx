import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodo } from "../Redux/Action";
import TodoList from "../Component/TodoList";

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);
  return (
    <div>
      <TodoList/>
    </div>
  );
};

export default Todo;
