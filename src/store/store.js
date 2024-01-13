import { configureStore } from "@reduxjs/toolkit";
import sideSlice from "./sideSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    side: sideSlice,
    search: SearchSlice,
  },
});

export default store;
