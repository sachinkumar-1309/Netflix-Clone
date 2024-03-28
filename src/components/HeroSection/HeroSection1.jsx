import React, { useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import heroImage from "../../assets/AnimalCover.webp";
import HeroPNG from "../../assets/Hero2PNG.png";
import HeroPNG2 from "../../assets/Hero2Hindi.webp";
import { useTranslation } from "react-i18next";

import { HiFire } from "react-icons/hi";

function HeroSection1() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const {
    trendingNow,
    year,
    genre,
    description,
    readyToWatch,
    movie,
    A,
    emailLabel,
    buttonText,
  } = t("heroSection1");

  const [email, setEmail] = useState("");
  const heroStyles = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "105vh", // Set height to full screen height
  };
  return (
    <div
      className="relative w-screen h-full text-white flex"
      style={heroStyles}>
      <div className="absolute inset-0 bg-black/30 "></div>{" "}
      <div className="relative bg-transparent w-[80vw] h-5/6 min-[425px]:h-full m-auto ">
        <div className="">
          <div className="w-full mx-auto absolute bottom-0 pb-14 lg:pb-0 lg:-bottom-2 xl:pb-14 xl:">
            <div className="lg:w-1/2">
              <div className="sm:w-1/3">
                <button className="bg-black/45 px-4 py-3 font-semibold  rounded-full flex justify-center items-center gap-1 mb-4">
                  <HiFire className="text-orange-500 text-xl" />
                  {/* Trending now */}
                  {trendingNow}
                </button>
              </div>
              <div className="w-1/2 sm:w-1/3 lg:w-3/5">
                {i18n.language === "en" ? (
                  <img className="text-xl" src={HeroPNG} alt="Cover" />
                ) : (
                  <img className="text-xl" src={HeroPNG2} alt="Cover" />
                )}
              </div>
              <div className="flex gap-2 mt-4 mb-4">
                <div className="bg-gray-600 px-1.5 py-2 pb rounded w- inline-block ">
                  <span className="h-4 text-sm font-bold flex justify-between items-center">
                    {" "}
                    {/* 2023 */}
                    {year}
                  </span>
                </div>
                <div className="bg-gray-600 px-1.5 py-2 rounded w- inline-block ">
                  <span className="h-4 text-sm font-bold flex justify-between items-center">
                    {" "}
                    {/* A */}
                    {A}
                  </span>
                </div>
                <div className="bg-gray-600 px-1.5 py-2 rounded w- inline-block ">
                  <span className="h-4 text-sm font-bold flex justify-between items-center">
                    {" "}
                    {/* Movie */}
                    {movie}
                  </span>
                </div>
                <div className="bg-gray-600 px-1.5 py-2 rounded w- inline-block ">
                  <span className="h-3 text-sm font-bold flex justify-between items-center">
                    {" "}
                    {/* Action */}
                    {genre}
                  </span>
                </div>
              </div>
              <div className="">
                <p className="text-lg mb-6 lg:block hidden">
                  {/* The hardened son of a powerful industrialist returns home
                  after years abroad and vows to take bloody revenge on those
                  threatening his father's life..{" "} */}
                  {description}
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-3/4 lg:w-3/5 xl:w-1/2">
              <form className="w-full">
                <div>
                  <h3 className="text-base sm:text-lg  mb-4 leading-tight">
                    {/* Ready to watch? Enter your email to create or restart your
                    membership. */}
                    {readyToWatch}
                  </h3>
                </div>
                <div className="sm:flex w-full gap-2">
                  <div className="sm:w-3/5  w-full ">
                    <Input
                      // label="Email address"
                      label={emailLabel}
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
                      {/* Get Started */}
                      {buttonText}
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

export default HeroSection1;
