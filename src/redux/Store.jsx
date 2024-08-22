import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/CounterSlice";
import CounterBy10 from "../redux/AnotherSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterBy10: CounterBy10,
  },
});

export default store;
  