import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/Logo.png";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

function LoginHelp() {
  const { t } = useTranslation();
  const {
    sign_in,
    title,
    description,
    email,
    text,
    instructionEmail,
    instructionMessage,
    buttonEmail,
    buttonMessage,
    last,
  } = t("forgetPassword");

  const {
    call,
    questions,
    help_center,
    terms_of_use,
    privacy,
    cookie_preferences,
    corporate_information,
  } = t("footer");

  const heroStyles = {
    backgroundImage:
      "url(https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "145vh", // Set height to full screen height
  };

  const [selectedOption, setSelectedOption] = useState(email);
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className=" text-black w-full  h-screen  " style={heroStyles}>
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img width={220} height={50} src={navLogo} alt="Logo" />
        </Link>
        <div className="p-10">
          <Link
            to="/login"
            className="text-red-600 hover:underline cursor-pointer text-2xl font-semibold">
            {/* Sign In */}
            {sign_in}
          </Link>
        </div>
      </nav>
      <div className="bg-[#f3f3f3] w-full md:w-[50%] lg:w-[45%] xl:w-[33%] m-auto py-16 px-10">
        <div className=" text-gray-800">
          <h4 className="font-semibold text-4xl">
            {/* Forgot Email/Password  */}
            {title}
          </h4>
          <h3 className="text-gray-600 mt-6 text-lg">
            {/* How would you like to reset your password? */}
            {description}
          </h3>
          <div className="py-5 px-8">
            <div className="block text-md w-full items-center">
              <div className="flex p- items-center">
                <input
                  className="w-6 h-6 mr-2"
                  type="radio"
                  value={email}
                  checked={selectedOption === email}
                  onChange={() => handleOptionChange(email)}
                />
                <p className=" py-2">
                  {/* Email
                   */}
                  {email}
                </p>
              </div>
              <div className="flex items-center">
                <input
                  className="w-6 h-6 mr-2"
                  type="radio"
                  value={text}
                  checked={selectedOption === text}
                  onChange={() => handleOptionChange(text)}
                />
                <p className=" py-2">
                  {/* Text message (SMS) */}
                  {text}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>
              {/* We will send you an email with instructions on how to reset your
              password. */}
              {selectedOption === email ? instructionEmail : instructionMessage}
            </p>
            {selectedOption === email && (
              <input
                className="border border-gray-400 w-full py-3 px-3 mt-3"
                placeholder="name@example.com"
                type="text"
                name=""
                id=""
              />
            )}
            {selectedOption === text && (
              <div className="mt-3 border border-red-300 py-2 px-3">
                TOO ADD A PHONE NUMBER FILTER
              </div>
            )}
          </div>
          <button className="w-full bg-blue-500 p-3 mt-7 text-white text-xl">
            {/* Email me */}
            {selectedOption === email ? buttonEmail : buttonMessage}
          </button>
          <p className="text-blue-500 text-md tracking-tight mt-9">
            {/* I can't remember my email address or phone number. */}
            {last}
          </p>
        </div>
      </div>
      <footer className="bg-black/75 w-screen relative text-[#757575] flex justify-center items-center px-10 sm:px-36 sm:pb-20 sm:py-16 lg:py-12 mt-10">
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
          <ul className="flex flex-wrap sm:mt-5 mt-6 w-full h underline font-semibold">
            <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
              <a href="https://help.netflix.com/en/node/412">FAQ</a>
            </li>
            <li className="mt-3 md:w-1/4 sm:w-1/2 w-full ">
              <a href="">{help_center}</a>
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
          </ul>
          <div className="mt-12">
            <LanguageSelector />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoginHelp;
