import React from "react";
import Download from "./Icons/Download";
import Monitor from "./Icons/Monitor";
import Smiley from "./Icons/Smiley";
import "./MiddleSection.css";
import Telescope from "./Icons/Telescope";
import Faqs from "../FAQ/Faqs";
import EmailForm from "../EmailForm/EmailForm";
import Footer from "../Footer/Footer";

function MiddleSection() {
  return (
    <div className=" relative middle-section h-auto bg-transparent">
      <section className=" w-screen p-24 pb-4 bg-black flex justify-center  items-center">
        <div className="w-5/6">
          <div className="text-white block mb-3 text-3xl tracking-tighter font-semiboldbold">
            <h3>More reasons to watch</h3>
          </div>
          <div className="w-full flex gap-3">
            <div className="card h-62  rounded-2xl w-1/4 text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>Enjoy on your TV</h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 p-2">
                <Monitor />
              </div>
            </div>
            <div className="card h-72  rounded-2xl w-1/4 text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>Download your shows to watch offline</h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  Save your favourites easily and always have something to
                  watch.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 p-2">
                <Download />
              </div>
            </div>
            <div className="card h-72  rounded-2xl w-1/4 text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>Watch everywhere</h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop and TV.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 p-2">
                <Telescope />
              </div>
            </div>
            <div className="card h-72  rounded-2xl w-1/4 text-white p-4 relative">
              <div className="w-full my-5 mt text-2xl font-bold">
                <h3>Create profiles for kids</h3>
              </div>
              <div className="text-sm font-semibold">
                <p>
                  Send kids on adventures with their favourite characters in a
                  space made just for them — free with your membership.
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
            <EmailForm id={Date.now()}/>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default MiddleSection;
