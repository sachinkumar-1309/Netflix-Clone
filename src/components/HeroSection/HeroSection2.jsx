import React, { useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import heroImage from "../../assets/LoveIsBlindBanner.webp";
import { HiFire } from "react-icons/hi";

import HeroPNG from "../../assets/Hero3.png";

function HeroSection2() {
  const [email, setEmail] = useState("");
  const heroStyles = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    height: "105vh", // Set height to full screen height
  };
  return (
    <div className="relative w-screen h-full text-white flex" style={heroStyles}>
      <div className="absolute inset-0 opacity-100 bg-black/70"></div>{" "}
      <div className="relative bg-transparent w-[80vw] h-5/6 min-[425px]:h-full m-auto">
        <div className="my-auto">
          <div className="w-full mx-auto absolute bottom-0 pb-14">
            <div className="lg:w-2/3 xl:w-1/2">
              <div className="sm:w-1/3">
                <button className="bg-black/45 px-4 py-3 font-semibold rounded-full flex justify-center items-center gap-1 mb-4">
                  <HiFire className="text-orange-500 text-xl" />
                  Trending now
                </button>
              </div>
              <div className="w-1/2 sm:w-1/3 lg:w-2/3 xl:">
                <img src={HeroPNG} alt="Cover" />
              </div>
              <div className="flex gap-2 mt-4 mb-4">
                <div className="bg-gray-600 px-1.5 py-2 pb rounded w- inline-block ">
                  <span className="h-4 text-sm font-bold flex justify-between items-center">
                    {" "}
                    2024
                  </span>
                </div>
                <div className="bg-gray-600 px-1.5 py-2 rounded w- inline-block ">
                  <span className="h-4 text-sm font-bold flex justify-between items-center">
                    {" "}
                    A
                  </span>
                </div>
                <div className="bg-gray-600 px-1.5 py-2 rounded w- inline-block ">
                  <span className="h-4 text-sm font-bold flex justify-between items-center">
                    {" "}
                    Show
                  </span>
                </div>
                <div className="bg-gray-600 px-1.5 py-2 rounded w- inline-block ">
                  <span className="h-4 text-sm font-bold flex justify-between items-center">
                    {" "}
                    Reality programming
                  </span>
                </div>
              </div>
              <div className="w-full">
                <p className="text-lg mb-6 lg:block hidden">
                  Nick and Vanessa Lachey host this social experiment where
                  single men and women look for love and get engaged, all before
                  meeting in person..{" "}
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
                      className="w-full text-xl px-2 py-3 bg-[rgb(229, 9, 20)]">
                      Get Started
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
