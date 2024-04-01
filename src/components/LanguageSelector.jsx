// // import i18n from "i18next";
// // import React, { useState } from "react";
// // import { useTranslation } from "react-i18next";
// // import { MdTranslate } from "react-icons/md";
// // import { useSelector } from "react-redux";

// // const languages = [
// //   { code: "en", lang: "English" },
// //   { code: "hi", lang: "हिन्दी" },
// // ];

// // function LanguageSelector() {
// //   const { i18n } = useTranslation();

// //   const changeLanguage = (e) => {
// //     i18n.changeLanguage(e.target.value);
// //   };

// //   return (
// //     <div className="relative ">
// //       <i className="text-white text-md absolute bottom-2 left-2">
// //         <MdTranslate />
// //       </i>
// //       <select
// //         className="bg-black/30 px-6 sm:pr-1 py-1 rounded border w-[0vw] sm:w-[120px] border-white text-white font-bold "
// //         onChange={changeLanguage}
// //         id="languageSelect"
// //         value={languages.lang}>
// //         {languages.map((lng) => {
// //           return (
// //             <option
// //               className="text-black bg-white"
// //               key={lng.code}
// //               value={lng.code}>
// //               {lng.lang}
// //             </option>
// //           );
// //         })}
// //       </select>
// //     </div>
// //   );
// // }

// // export default LanguageSelector;

// // LanguageSelector.js

// import React from "react";
// import { MdTranslate } from "react-icons/md";

// const languages = [
//   { code: "en", lang: "English" },
//   { code: "hi", lang: "हिन्दी" },
// ];

// function LanguageSelector({ selectedLanguage, onLanguageChange }) {
//   const changeLanguage = (e) => {
//     onLanguageChange(e.target.value);
//   };

//   console.log("Received Props - selectedLanguage:", selectedLanguage); // Add this line to log the received props

//   return (
//     <div className="relative">
//       <i className="text-white text-md absolute bottom-2 left-2">
//         <MdTranslate />
//       </i>
//       <select
//         className="bg-black/30 px-6 sm:pr-1 py-1 rounded border w-[0vw] sm:w-[120px] border-white text-white font-bold"
//         onChange={changeLanguage}
//         value={selectedLanguage}>
//         {languages.map((lng) => (
//           <option
//             className="text-black bg-white"
//             key={lng.code}
//             value={lng.code}>
//             {lng.lang}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default LanguageSelector;
// LanguageSelector.jsx
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLanguage, selectLanguage } from '../store/LangSlice';

// const LanguageSelector = () => {
//   const dispatch = useDispatch();
//   const selectedLanguage = useSelector(selectLanguage);

//   const changeLanguage = (e) => {
//     dispatch(setLanguage(e.target.value));
//   };

//   return (
//     <select value={selectedLanguage} onChange={changeLanguage}>
//       <option value="en">English</option>
//       <option value="hi">Hindi</option>
//     </select>
//   );
// };

// export default LanguageSelector;

import React from "react";
import { useTranslation } from "react-i18next";
import { MdTranslate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, selectLanguage } from "../store/LangSlice";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "हिन्दी" },
];

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(selectLanguage);
  const {i18n} = useTranslation();

  const changeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="relative">
      <i className="text-white text-md absolute bottom-2 left-2">
        <MdTranslate />
      </i>
      <select
        className="bg-black/30 px-6 sm:pr-1 py-1 rounded border w-[0vw] sm:w-[120px] border-white text-white font-bold"
        value={selectedLanguage}
        onChange={changeLanguage}>
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
