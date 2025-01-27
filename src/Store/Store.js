import { configureStore } from "@reduxjs/toolkit";
import colorMode from "./Slices/colorMode";

export const store = configureStore({
  reducer: {
    colorMode,
  },
});
