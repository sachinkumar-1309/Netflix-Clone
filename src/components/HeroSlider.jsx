import React, { useEffect } from "react";
import debounce from "lodash/debounce"; // Import debounce function from lodash

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CurveDiv from "./CurveDiv";

import HeroSection from "./HeroSection/HeroSection";
import HeroSection1 from "./HeroSection/HeroSection1";
import HeroSection2 from "./HeroSection/HeroSection2";
import Slider from "react-slick";

function HeroSlider() {
  const slider = React.useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative backGround w-screen h-full z-10 pb-">
      <button
        className=" text-white absolute bg-black/40 py-12 px-[1px] left-2 lg:left-14 md:left-8 top-[calc(50%-100px)] rounded-lg cursor-pointer z-20"
        onClick={() => slider?.current?.slickPrev()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-mirrorinrtl="true"
          className="default-ltr-cache-4z3qvp e1svuwfo1"
          data-name="ChevronLeft"
          aria-labelledby=":R2iqlql9:"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z"
            fill="currentColor"></path>
        </svg>
      </button>
      <button
        className="text-white absolute bg-black/40 px-[1px] right-2 lg:right-14 md:right-8 top-[calc(50%-100px)] rounded-lg py-12 cursor-pointer z-20"
        onClick={() => slider?.current?.slickNext()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-mirrorinrtl="true"
          className="default-ltr-cache-4z3qvp e1svuwfo1"
          data-name="ChevronRight"
          aria-labelledby=":R2kqlql9:"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
            fill="currentColor"></path>
        </svg>
      </button>
      {/* <div ref={boxRef} className="w-full flex "> */}
      <Slider ref={slider} {...settings}>
        <div className="main w-full ">
          <HeroSection />
        </div>
        <div className="main1 w-full ">
          <HeroSection1 />
        </div>
        <div className="main2 w-full">
          <HeroSection2 />
        </div>
      </Slider>

      <div className="absolute z-10 w-full h-[100px] -bottom-[calc(108vh-100vh)]">
        f
        <CurveDiv />
      </div>
    </div>
    // </div>
  );
}

export default HeroSlider;
