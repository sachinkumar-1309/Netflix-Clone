import React from "react";
import Button from "./Button";
import { MdTranslate } from "react-icons/md";

function Navbar() {
  return (
    <div className="w-full absolute z-20 flex justify-between px-3 sm:px-10 md:px-20 bg-transparent">
      <div className="w-28">
        <img className="w-" src="src\assets\Logo.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-3 ">
        <div className="relative">
          <i className="text-white text-md absolute bottom-2 left-2">
            <MdTranslate />
          </i>
          <select
            className="bg-black/30 px-7 py-1 rounded border w-[30vw] sm:w-full text-end border-white text-white font-bold items-center"
            id="languageSelect">
            <option className="bg-white text-black z-10" value="english">
              English
            </option>
            <option className="bg-white text-black " value="हिन्दी">
              हिन्दी
            </option>
          </select>
        </div>
        <div>
          <Button children={"Sign in"} className="text-md " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
