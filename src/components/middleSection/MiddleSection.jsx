import React from "react";
import Download from "./Icons/Download";
import Monitor from "./Icons/Monitor";
import Smiley from "./Icons/Smiley";
import "./MiddleSection.css";
import Telescope from "./Icons/Telescope";
import Faqs from "../FAQ/Faqs";
import EmailForm from "../EmailForm/EmailForm";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

function MiddleSection() {
  const { t } = useTranslation();
  const { moreReasons } = t("middleSection");
  const { title, description } = t("middleSection.enjoyOnTV");
  const { title2, description2 } = t("middleSection.downloadShows");
  const { title3, description3 } = t("middleSection.watchEverywhere");
  const { title4, description4 } = t("middleSection.createProfiles");
  return (
    <div className=" relative middle-section h-auto bg-transparent pt-4 sm:pt-0">
      <section className=" w-screen lg:p-20 lg:pb-20 md:pb-16 sm:pb-12 p-3 pb-4 bg-black flex justify-center items-center">
        <div className="xl:w-fit top-2 z-40">
          <div className="text-white block mb-3 text-3xl tracking-tighter font-semiboldbold">
            <h3>
              {/* More reasons to watch */}
              {moreReasons}
            </h3>
          </div>
          <div className="w-full flex flex-wrap gap-3">
            <div className="card md:h-64 h-60  rounded-2xl w-full lg:w-[calc(50%-12px)] xl:w-[calc(25%-12px)] text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>
                  {/* Enjoy on your TV */}
                  {title}
                </h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  {/* Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more. */}
                  {description}
                </p>
              </div>
              <div className="absolute right-0 bottom-0 p-2">
                <Monitor />
              </div>
            </div>
            <div className="card md:h-64 h-60  rounded-2xl w-full lg:w-[calc(50%-12px)] xl:w-[calc(25%-12px)] text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>
                  {/* Download your shows to watch offline */}
                  {title2}
                </h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  {/* Save your favourites easily and always have something to */}
                  {/* watch. */}
                  {description2}
                </p>
              </div>
              <div className="absolute right-0 bottom-0 p-2">
                <Download />
              </div>
            </div>
            <div className="card md:h-64 h-60  rounded-2xl w-full lg:w-[calc(50%-12px)] xl:w-[calc(25%-12px)] text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>
                  {/* Watch everywhere */}
                  {title3}
                </h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  {/* Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV. */}
                  {description3}
                </p>
              </div>
              <div className="absolute right-0 bottom-0 p-2">
                <Telescope />
              </div>
            </div>
            <div className="card md:h-64 h-60  rounded-2xl w-full lg:w-[calc(50%-12px)] xl:w-[calc(25%-12px)] text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>
                  {/* Create profiles for kids */}
                  {title4}
                </h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  {/* Send kids on adventures with their favourite characters in a
                  space made just for them — free with your membership. */}
                  {description4}
                </p>
              </div>
              <div className="absolute right-0 bottom-0 p-2">
                <Smiley />
              </div>
            </div>
          </div>
          <div className="my-12">
            <Faqs />
          </div>
          <div className="">
            <EmailForm id={Date.now()} />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default MiddleSection;
