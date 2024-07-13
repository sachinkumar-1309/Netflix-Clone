// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     code:'en',
//     lang: "English",
// };
// const LangSlice = createSlice({
//   name: "selector",
//   initialState,
//   reducers: {
//     en: (state) => {
//         state.code="en",
//         state.lang = "English";
//     },
//     hi: (state) => {
//         state.code= 'hi';
//         state.lang = "Hindi";
//     },
//   },
// });

// const { en, hi } = LangSlice.actions;

// export default LangSlice.reducer;
// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'language',
  initialState: {
    selectedLanguage: parseInt(localStorage.getItem('lang'))|| '',
     // Default language
  },  
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
      localStorage.setItem('lang',state.selectedLanguage.toString())
    },
  },
});

export const { setLanguage } = langSlice.actions;

export const selectLanguage = (state) => state.language.selectedLanguage;

export default langSlice.reducer;
