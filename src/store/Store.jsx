
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../store/LangSlice";

export const Store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
