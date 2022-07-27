import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const mode = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = mode.actions;
export default mode.reducer;
