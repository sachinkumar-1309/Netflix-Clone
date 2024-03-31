import Input from "../Input";
import React, { useCallback, useState, useTransition } from "react";
import Hero from "../../assets/hero.jpg";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "../LanguageSelector";
1;

const Auth = () => {
  const { t } = useTranslation();
  const {
    sign_in,
    Email,
    Password,
    or,
    questions,
    sign_in_code,
    forget,
    remember,
    use_password,
    new_to_netflix,
    sign_up,
    send_sign_in_code,
    message,
  } = t("signin_page");
  const {
    call,
    help_center,
    terms_of_use,
    privacy,
    cookie_preferences,
    corporate_information,
  } = t("footer");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState(sign_in_code);

  const toogleVariant = useCallback(() => {
    setVariant(
      (currentVariant) =>
        currentVariant === sign_in_code ? use_password : sign_in_code,
      console.log()
    );
  }, []);

  const heroStyles = {
    backgroundImage: `url(${Hero})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={heroStyles} className="relative h-full">
      <div className="bg-black w-full h-full pb- md:bg-opacity-50">
        <nav className="relative px-7 ml-24 py-2 w-full">
          <Link to="/"><img src="src/assets/Logo.png" alt="Logo" className="h-32 " /></Link>
        </nav>
        <div className="flex justify-center ">
          <div className=" bg-black bg-opacity-75 px-20 py-12 self-center mt-2 md:w-3/5 lg:max-w-lg w-full">
            <h2 className="text-white text-4xl mb-8 font-bold">
              {/* {variant === login ? sign_in : "Register"} */}
              {sign_in}
            </h2>
            <div className="flex flex-col gap-4">
              {/* {variant === "Register" && (
                <Input
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )} */}
              <Input
                // label="Email or phone number"
                label={Email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />

              {variant === use_password && (
                <h6 className="text-gray-400 text-center">{message}</h6>
              )}

              {variant === sign_in_code && (
                <Input
                  // label="Password"
                  label={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  value={password}
                />
              )}
            </div>
            <Button className=" py-3 text-white w-full rounded-md hover:bg-red-700 mt-4 transition">
              {variant === use_password ? send_sign_in_code : sign_in}
              {/* {sign_in} */}
            </Button>
            <p className="mt-5 text-white text-xl mx-auto flex justify-center w-full">
              {or}
            </p>
            <button
              onClick={toogleVariant}
              className="bg-gray-400/30 py-3 font-semibold text-white w-full rounded-md hover:bg- mt-5 transition">
              {/* Use a sign-in code */}
              {variant}
          </button>

            <Link to="/loginhelp">
              <p className="mt-3 text-white text-lg mx-auto hover:underline hover:text-gray-400 flex justify-center w-full">
                {/* Forget password? */}
                {forget}
              </p>
            </Link>
            <div className="flex text-white mt-5 text-xl">
              <input
                type="checkbox"
                className="h-6 w-6 bg-white text-black"
                name=""
                id=""
              />
              <p className="ml-3">
                {/* Remember me */}
                {remember}
              </p>
            </div>
            <p className="text-zinc-500 mt-6 ml-1 ">
              {/* {variant === "Login"
                ? "New to Netflix?"
                : "Already have an account."} */}
              {new_to_netflix}
              <Link
                to="/"
                // onClick={toogleVariant}
                className="text-white ml-2 hover:underline cursor-pointer">
                {/* {variant === "Login" ? "Create an account." : "Login"} */}
                {sign_up}
              </Link>
            </p>
          </div>
        </div>
        <footer className="bg-black/75 w-screen relative text-[#ffffffb3] flex justify-center items-center px-10 sm:px-24 sm:pb-20 sm:py-16 lg:py-12 mt-10">
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
    </div>
  );
};

export default Auth;
