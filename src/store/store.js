import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./search-slice";

export const store = configureStore({
  reducer: {
    search: inputReducer,
  },
});
