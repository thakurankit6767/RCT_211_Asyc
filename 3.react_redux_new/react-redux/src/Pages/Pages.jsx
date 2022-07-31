import React from "react";
import { Route, Routes } from "react-router-dom";
import { EditTodo } from "./EditTodo";
import { Homepage } from "./Homepage";
import { SingleTodo } from "./SingleTodo";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/todo/:id" element={<SingleTodo />} />
      <Route path="/todo/:id/edit" element={<EditTodo />} />
    </Routes>
  );
};