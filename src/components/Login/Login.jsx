import Input from "../Input";
import React, { useCallback, useState } from "react";
import Hero from "../../assets/hero.jpg";
import Button from "../Button";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("Login");

  const toogleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "Login" ? "Register" : "Login"
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
      <div className="bg-black w-full h-full pb-10 md:bg-opacity-50">
        <nav className="relative px-7 ml-24 py-2 w-full">
          <img src="src/assets/Logo.png" alt="Logo" className="h-32 " />
        </nav>
        <div className="flex justify-center ">
          <div className=" bg-black bg-opacity-75 px-20 py-12 self-center mt-2 md:w-3/5 lg:max-w-lg w-full">
            <h2 className="text-white text-4xl mb-8 font-bold">
              {variant === "Login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "Register" && (
                <Input
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}

              <Input
                label="Email or phone number"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />

              <Input
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <Button className=" py-3 text-white w-full rounded-md hover:bg-red-700 mt-4 transition">
              {variant === "Login" ? "Login" : "Sign up"}
            </Button>
            <p className="mt-5 text-white text-xl mx-auto flex justify-center w-full">
              OR
            </p>
            <Button className="bg-gray-400/30 py-3 font-semibold text-white w-full rounded-md hover:bg-red-700 mt-5 transition">
              Use a sign-in code
            </Button>
            <p className="mt-3 text-white text-lg mx-auto flex justify-center w-full">
              Forget password?
            </p>
            <div className="flex text-white mt-5 text-xl">
              <input
                type="checkbox"
                className="h-6 w-6 bg-white text-black"
                name=""
                id=""
              />
              <p className="ml-3">Remember me</p>
            </div>
            <p className="text-zinc-500 mt-6 ml-1 ">
              {variant === "Login"
                ? "New to Netflix?"
                : "Already have an account."}
              <span
                onClick={toogleVariant}
                className="text-white ml-2 hover:underline cursor-pointer">
                {variant === "Login" ? "Create an account." : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
