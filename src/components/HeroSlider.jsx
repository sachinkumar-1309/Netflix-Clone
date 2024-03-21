// import React, { useRef } from "react";

// import HeroSection from "./HeroSection";
// import HeroSection1 from "./HeroSection1";
// import HeroSection2 from "./HeroSection2";

// function HeroSlider() {
//   const boxRef = useRef(null);

//   const prevHandler = () => {
//     if (boxRef.current) {
//       let width = boxRef.current.clientWidth;
//       console.log("Before prev scroll", boxRef.current.scrollLeft);
//       boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
//       console.log("After prev scroll", boxRef.current.scrollLeft);
//     }
//   };

//   const nextHandler = () => {
//     if (boxRef.current) {
//       let width = boxRef.current.clientWidth;
//       console.log("Before next scroll", boxRef.current.scrollLeft);
//       boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
//       console.log("After next scroll", boxRef.current.scrollLeft);
//     }
//   };

//   return (
//     <div className="relative backGround w-screen h-screen ">
//       <div className="flex justify-center items-center absolute z-10 w-full h-full">
//         <button
//           className="absolute text-white top-1/2 left-12 p-3  cursor-pointer z-20"
//           onClick={prevHandler}>
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             data-mirrorinrtl="true"
//             className="default-ltr-cache-4z3qvp e1svuwfo1"
//             data-name="ChevronLeft"
//             aria-labelledby=":R2iqlql9:"
//             aria-hidden="true">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M8.41409 12L15.707 19.2928L14.2928 20.7071L6.29277 12.7071C6.10523 12.5195 5.99988 12.2652 5.99988 12C5.99988 11.7347 6.10523 11.4804 6.29277 11.2928L14.2928 3.29285L15.707 4.70706L8.41409 12Z"
//               fill="currentColor"></path>
//           </svg>
//         </button>
//         <button
//           className="absolute text-white p-3 top-1/2 right-12 cursor-pointer z-20"
//           onClick={nextHandler}>
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             data-mirrorinrtl="true"
//             className="default-ltr-cache-4z3qvp e1svuwfo1"
//             data-name="ChevronRight"
//             aria-labelledby=":R2kqlql9:"
//             aria-hidden="true">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
//               fill="currentColor"></path>
//           </svg>
//         </button>
//       </div>
//       <div ref={boxRef} className="w-full h-full flex  overflow-x-scroll">
//         <div className="main w-full h-full ">
//           <HeroSection />
//         </div>
//         <div className="main1 w-full h-full">
//           <HeroSection1 />
//         </div>
//         <div className="main2 w-full h-full">
//           <HeroSection2 />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSlider;

import React, { useRef, useEffect } from "react";
import debounce from "lodash/debounce"; // Import debounce function from lodash

import CurveDiv from "./CurveDiv";

import HeroSection from "./HeroSection/HeroSection";
import HeroSection1 from "./HeroSection/HeroSection1";
import HeroSection2 from "./HeroSection/HeroSection2";

function HeroSlider() {
  const boxRef = useRef(null);

  // Debounced scroll event handler
  const handleScroll = debounce(() => {
    console.log("Scrolling");
    // Your scroll logic here
  }, 100); // Adjust debounce delay as needed (e.g., 100 milliseconds)

  // Attach scroll event listener to the container element
  useEffect(() => {
    const container = boxRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const prevHandler = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      console.log("Before prev scroll", boxRef.current.scrollLeft);
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
      console.log("After prev scroll", boxRef.current.scrollLeft);
    }
  };

  const nextHandler = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      console.log("Before next scroll", boxRef.current.scrollLeft);
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
      console.log("After next scroll", boxRef.current.scrollLeft);
    }
  };

  return (
    <div className="relative backGround w-screen h-screen z-[15] ">
      <div className="flex justify-center items-center absolute z-10 w-full h-full">
        <button
          className="absolute text-white top-1/2 left-12 p-3  cursor-pointer z-20"
          onClick={prevHandler}>
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
          className="absolute text-white p-3 top-1/2 right-12 cursor-pointer z-20"
          onClick={nextHandler}>
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
      </div>
      <div
        ref={boxRef}
        className="w-full h-full flex contain overflow-x-hidden">
        <div className="main w-full h-full ">
          <HeroSection />
        </div>
        <div className="main1 w-full h-full">
          <HeroSection1 />
        </div>
        <div className="main2 w-full h-full">
          <HeroSection2 />
        </div>
      </div>
      <div className=" absolute h-[100px] w-full ">
        <CurveDiv />
      </div>
    </div>
  );
}

export default HeroSlider;
