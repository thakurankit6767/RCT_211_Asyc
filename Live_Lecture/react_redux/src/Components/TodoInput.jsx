import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
} from "../Redux/AppReducer/action";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodoData = (params) => {
    dispatch(addTodosRequest());

    return axios
      .post("http://localhost:8080/todos", { ...params })
      .then(({ data }) => {
        dispatch(addTodosSuccess(data));
        console.log(data);
      })
      .catch(() => {
        dispatch(addTodosFailure());
      });
  };

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      const params = {
        id: Math.round(Date.now() * Math.random() * 300),
        title: text,
        status: false,
      };

      addTodoData(params);
      setText("");
    } else {
      alert("Please add a title");
    }
  };

  return (
    <div>
      <input
        placeholder="add todo"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;