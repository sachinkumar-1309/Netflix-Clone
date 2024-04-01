// import { configureStore } from "@reduxjs/toolkit";
// import LangSlice from "./LangSlice";

// const Store = configureStore({
//   reducer: {
//     selector: LangSlice,
//   },
// });
// export default Store;
// store.js
import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../store/LangSlice";

export const Store = configureStore({
  reducer: {
    language: languageReducer,
    // other reducers...
  },
});
