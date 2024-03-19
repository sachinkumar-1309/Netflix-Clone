import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import heroImage from "../assets/HeroIMG.jpg";

function HeroSection() {
  const [email, setEmail] = useState("");
  const heroStyles = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    widht: "100%",
  };
  return (
    <header className="relative w-screen h-screen  " style={heroStyles}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-95 bg-black/50"></div>{" "}
      <div className="flex w-[740px]  px-[32px] translate-x-32 translate-y-36  text-gray-200 flex-col-reverse ">
        <div className="w-full">
          <div className="">
            <div>
              <h1 className="-tracking-tight text-5xl font-extrabold mb-6">
                Unlimited movies, TV shows and more
              </h1>
            </div>
            <div>
              <p className="text-xl font-bold mb-6">
                Starts at ₹149. Cancel anytime.{" "}
              </p>
            </div>
          </div>
          <div className="flex ">
            <form>
              <div>
                <h3 className="text-lg mb-4 ">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
              </div>
              <div className="flex w-full gap-2">
                <div className="w-3/5">
                  <Input
                    label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    value={email}
                    className={" pb-2 bg-neutral-700/40 border border-white "}
                    classNameLabel={"text-lg top-[8px] tracking-tighter"}
                  />
                </div>
                <div className="w-2/5 object-contain ">
                  <Button className=" h-full w-full text-xl  bg-[rgb(229, 9, 20)]">
                    Get Started
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
