import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateFailure,
  updateRequest,
  updateSuccess,
} from "../Redux/action";

export const EditTodo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentTodo, setCurrentTodo] = useState({});
  const navigate = useNavigate();

  const handleTodoUpdate = (id) => {
    if (text === "") return;
    dispatch(updateRequest());
    axios
      .patch(`http://localhost:8080/todos/${id}`, {
        title: text,
      })
      .then(({ data }) => {
        dispatch(updateSuccess(data));
        return navigate("/");
      })
      .catch(() => {
        dispatch(updateFailure());
      });
  };

  useEffect(() => {
    let currTodo = todos.find((todo) => todo.id == id);
    currTodo && setCurrentTodo(currTodo);
  }, [todos, id]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={() => handleTodoUpdate(currentTodo.id)}>Update</button>
    </div>
  );
};