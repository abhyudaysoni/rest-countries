import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  searchInput: "",
};

const inputSlice = createSlice({
  name: "inputSlice",
  initialState: initialSearchState,
  reducers: {
    changeSearch(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const { changeSearch } = inputSlice.actions;

export default inputSlice.reducer;
