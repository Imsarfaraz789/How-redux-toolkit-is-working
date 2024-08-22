import { createSlice } from "@reduxjs/toolkit";

export const AnotherSlice = createSlice({
  name: "AnotherSlice",
  initialState: {
    value: 10,
  },

  reducers: {
    incrementBy10: (state) => {
      state.value += 10;
    },

    decrementBy10: (state) => {
      state.value -= 10;
    },
  },
});

export const { incrementBy10, decrementBy10 } = AnotherSlice.actions;

export default AnotherSlice.reducer;
