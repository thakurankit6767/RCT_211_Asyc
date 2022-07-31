import React from "react";
import { NavLink } from "react-router-dom";

export const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <NavLink to={`/todo/${todo.id}`}>{todo.title}</NavLink>
        </div>
      ))}
    </div>
  );
};