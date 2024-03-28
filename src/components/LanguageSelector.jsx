import i18n from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdTranslate } from "react-icons/md";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "हिन्दी" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    // <div>
    //   <select onChange={changeLanguage}>
    //     {languages.map((lng) => {
    //       return (
    //         <option key={lng.code} value={lng.code}>
    //           {lng.lang}
    //         </option>
    //       );
    //     })}
    //   </select>
    // </div>
    <div className="relative ">
      <i className="text-white text-md absolute bottom-2 left-2">
        <MdTranslate />
      </i>
      <select
        className="bg-black/30 px-6 sm:pr-1 py-1 rounded border w-[0vw] sm:w-[120px] border-white text-white font-bold "
        onChange={changeLanguage}
        id="languageSelect"
        value={languages.lang}>
        {languages.map((lng) => {
          return (
            <option
              className="text-black bg-white"
              key={lng.code}
              value={lng.code}>
              {lng.lang}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default LanguageSelector;
