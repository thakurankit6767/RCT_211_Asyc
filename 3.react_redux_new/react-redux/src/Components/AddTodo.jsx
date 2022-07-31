import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  addFailure,
  addRequest,
  addSuccess,
} from "../Redux/action";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodo = (payload) => {
    dispatch(addRequest());
    axios
      .post("http://localhost:8080/todos", payload)
      .then(({ data }) => {
        dispatch(addSuccess(data));
      })
      .catch(() => {
        dispatch(addFailure());
      });
  };

  const handleAdd = () => {
    if (text !== "") {
      const payload = {
        id: uuid(),
        title: text,
        status: false,
      };
      addTodo(payload);
      setText("");
    }
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Todo here..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};