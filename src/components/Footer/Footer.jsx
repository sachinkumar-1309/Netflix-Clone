import React from "react";
import { MdTranslate } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black w-screen relative text-[#ffffffb3] flex justify-center items-center px-3 sm:px-10 sm:pb-20 pb-16 ">
      <div className="sm:w-11/12 w-full p-5 pl-9 pt-3 sm:pt-0 ">
        <div>
          <span>
            Questions? Call{" "}
            <a className="underline" href="">
              XXX-XXX-XXXX
            </a>
          </span>
        </div>
        <ul className="flex flex-wrap sm:mt-10 mt-6 w-full h underline font-semibold">
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">FAQ</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Help Centre</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Account</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Media Centre</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Investor Return</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Jobs</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Ways to Watch</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Terms of Use</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Privacy</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Cookie Preferences</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Coporate Information</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Contact Us</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Speed Test</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Legal Notice</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">Only on Netflix</a>
          </li>
        </ul>
        <div>
          <div className="relative mt-14">
            <i className="text-white text-md absolute bottom-2 left-2">
              <MdTranslate />
            </i>
            <select
              className="bg-black/30 px-7 py-1 rounded border text-end border-[#ffffffb3] text-white font-bold items-center"
              id="languageSelect">
              <option className="bg-white text-black " value="english">
                English
              </option>
              <option className="bg-white text-black " value="हिन्दी">
                हिन्दी
              </option>
            </select>
          </div>
        </div>
        <p className="mt-12">Netflix India</p>
      </div>
    </footer>
  );
}

export default Footer;
