import { useTranslation } from "react-i18next";
import React from "react";
import { MdTranslate } from "react-icons/md";
import LanguageSelector from "../LanguageSelector";
import LanguageSelectorContainer from "../LanguageSelectorContainer";

function Footer() {
  const { t } = useTranslation();
  const {
    questions,
    call,
    help_center,
    account,
    media_center,
    investor_return,
    jobs,
    ways_to_watch,
    terms_of_use,
    privacy,
    cookie_preferences,
    corporate_information,
    contact_us,
    speed_test,
    legal_notice,
    only_on_netflix,
    netflix_india,
  } = t("footer");
  return (
    <footer className="bg-black w-screen relative text-[#ffffffb3] flex justify-center items-center px-3 sm:px-10 sm:pb-20 pb-16 ">
      <div className="sm:w-11/12 w-full p-5 pl-9 pt-3 sm:pt-0 ">
        <div>
          <span>
            {/* Questions? Call{" "}
             */}
            {questions} {call}{" "}
            <a className="underline" href="">
              XXX-XXX-XXXX
            </a>
          </span>
        </div>
        <ul className="flex flex-wrap sm:mt-10 mt-6 w-full h underline font-semibold">
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="https://help.netflix.com/en/node/412">FAQ</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{help_center}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{account}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{media_center}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{investor_return}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{jobs}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{ways_to_watch}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{terms_of_use}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{privacy}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{cookie_preferences}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{corporate_information}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{contact_us}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{speed_test}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{legal_notice}</a>
          </li>
          <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
            <a href="">{only_on_netflix}</a>
          </li>
        </ul>
        <div className="mt-12">
          <LanguageSelector />
        </div>
        <p className="mt-12">{netflix_india}</p>
      </div>
    </footer>
  );
}

export default Footer;
