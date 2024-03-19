import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import heroImage from "../assets/LoveIsBlind-Banner.webp";
import { HiFire } from "react-icons/hi";

function HeroSection2() {
  const [email, setEmail] = useState("");
  const heroStyles = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",

    height: "100vh", // Set height to full screen height
  };
  return (
    <div className="relative w-screen  h-screen " style={heroStyles}>
      <div className="absolute inset-0 opacity-100 bg-black/70"></div>{" "}
      <div className="flex w-[740px] h-[452px] px-[32px] translate-x-32 translate-y-36  text-gray-200 flex-col-reverse ">
        <div className="w-full">
          <div className="w-1/2"></div>
          <div className="w-5/6">
            <div>
              <button className="bg-black/45 px-4 py-3 font-semibold rounded-full flex justify-center items-center gap-1 mb-4">
                <HiFire className="text-orange-500 text-xl" />
                Trending now
              </button>
            </div>
            <div className="w-[294px]">
              {/* <h1 className="-tracking-tight text-5xl font-extrabold mb-6">
                Unlimited movies, TV shows and more
              </h1> */}
              <img
                className=""
                width="294"
                height="37"
                src="src\assets\LoveIsBlind.webp"
                alt="Cover"
              />
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
              <p className="text-sm mb-6">
                Nick and Vanessa Lachey host this social experiment where single
                men and women look for love and get engaged, all before meeting
                in person..{" "}
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
    </div>
  );
}

export default HeroSection2;

