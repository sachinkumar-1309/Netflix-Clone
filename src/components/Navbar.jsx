import React from "react";
import Button from "./Button";
import { MdTranslate } from "react-icons/md";

function Navbar() {
  return (
    <div className="w-full fixed z-10 flex justify-between px-32 bg-transparent">
      <div className="">
        <img className="w-40" src="src\assets\Logo.png" alt="Logo" />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <i className="text-white text-md absolute bottom-2 left-2">
            <MdTranslate />
          </i>
          <select
            className="bg-black/30 px-7 py-1 rounded border  text-end border-white text-white font-bold items-center"
            id="languageSelect">
            <option value="english">English</option>
            <option value="हिन्दी">हिन्दी</option>
          </select>
        </div>
        <div>
          <Button children={"Sign in"} className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

