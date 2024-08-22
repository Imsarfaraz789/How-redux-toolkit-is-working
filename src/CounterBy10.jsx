import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBy10 } from "./redux/AnotherSlice";
import { decrementBy10 } from "./redux/AnotherSlice";

const CounterBy10 = () => {
  const counter = useSelector((state) => state.counterBy10.value);
  const dispatch = useDispatch();
  return (
    <div>
      {counter}
      <button onClick={() => dispatch(incrementBy10())}>Increment</button>
      <button onClick={() => dispatch(decrementBy10())}>Increment</button>
    </div>
  );
};

export default CounterBy10;
