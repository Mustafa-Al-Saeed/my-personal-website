import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLight: window.matchMedia("(prefers-color-scheme: light)").matches,
};

export const toggleColorMode = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toDarkMode: (state) => {
      state.isLight = false;
    },

    toLightMode: (state) => {
      state.isLight = true;
    },
  },
});

export const { toDarkMode, toLightMode } = toggleColorMode.actions;

export default toggleColorMode.reducer;
