import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleDecrement, handleIncrement } from "../Redux/AppReducer/action";

const Counter = () => {
  const counter = useSelector((store) => store.appReducer.counter);
  const dispatch = useDispatch();
  console.log("counter");

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(handleIncrement())}>Increment</button>
      <button onClick={() => dispatch(handleDecrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
