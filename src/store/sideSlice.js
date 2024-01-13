import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
  name: "side",
  initialState: {
    open: true,
  },
  reducers: {
    toggleSide: (state, action) => {
      console.log("i am inside toggle");
      console.log(state.open);
      state.open = !state.open;
      console.log(state.open);
    },
  },
});

export const { toggleSide } = sideSlice.actions;
export default sideSlice.reducer;
