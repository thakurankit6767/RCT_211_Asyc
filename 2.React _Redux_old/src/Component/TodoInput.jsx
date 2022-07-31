import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Action";
import Todo from "./Todo";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state);

  const handleAddTodo = () => {
    let payload = {
      input,
      status: false,
    };
    dispatch(addTodo(payload));
    setInput("");
  };

  if (isError) return <div style={{ textAign: "center" }}>Error...</div>;
  return (
    <div>
      <h1>Todos App</h1>
      <br />
      <input
        type="text"
        placeholder="enter something..."
        input={input}
        onChange={(e) => setInput(e.target.input)}
      />
      <button onClick={handleAddTodo}>ADD TODO</button>
      <div>
        <Todo />
      </div>
    </div>
  );
};

export default TodoInput;
