import React, { useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import heroImage from "../../assets/HeroIMG.jpg";

function HeroSection() {
  const [email, setEmail] = useState("");
  const heroStyles = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "105vh",
  };
  
  return (
    <header
      className="relative w-screen h-full text-white flex z-[]"
      style={heroStyles}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-95 bg-black/50"></div>{" "}
      <div className="relative bg-transparent w-[80vw] h-5/6 min-[425px]:h-full m-auto pb-14 flex ">
        <div className="">
          <div className="w-full mx-auto absolute bottom-0 pb-14">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <div>
                <h1 className="sm:leading-snug xl:text-6xl text-3xl lg:text-5xl font-extrabold mb-1.5 sm:mb-6  md:mb-1">
                  Unlimited movies, TV shows and more
                </h1>
              </div>
              <div>
                <p className="sm:text-xl text-base font-bold mb-2 sm:mb-6 md:mb-4">
                  Starts at ₹149. Cancel anytime.{" "}
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-3/4 lg:w-3/5 xl:w-2/3">
              <form className="w-full">
                <div>
                  <h3 className="text-base sm:text-lg  mb-4 leading-tight">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                </div>
                <div className="sm:flex w-full gap-2">
                  <div className="sm:w-3/5 w-full ">
                    <Input
                      label="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      value={email}
                      className={
                        " pb-0 sm:pb-2 mb-3 bg-neutral-700/40 border border-white "
                      }
                      classNameLabel={"text-lg top-[8px] tracking-tighter"}
                    />
                  </div>
                  <div className="sm:w-2/5 w-1/2 object-contain">
                    <Button
                      id="heroBtn"
                      className=" w-full text-xl px-2 py-3 bg-[rgb(229, 9, 20)]">
                      Get Started
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
