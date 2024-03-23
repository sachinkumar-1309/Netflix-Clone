import React, { useState } from "react";

function FaqList({ data }) {
  const [isReadAble, setIsReadAble] = useState(false);

  const toggle = () => {
    setIsReadAble((prev) => !prev);
  };
  return (
    <div className="lg:w-5/6 w-full  text-white">
      <div>
        <div className="relative bg-[#2d2d2d] p-6 hover:bg-[#4d4d4d]">
          <span className="flex justify-between text-2xl  text-gray-200 font-semibold">
            <h2>{data.question}</h2>
            <button
              onClick={toggle}
              className="absolute w-full h-full top-0 right-0 flex justify-end items-center pr-6">
              {isReadAble ? (
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1 rotate-45"
                  data-name="Plus"
                  aria-labelledby=":Rjal6hlaladat9:"
                  alt="">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                    fill="currentColor"></path>
                </svg>
              ) : (
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="elj7tfr3 e164gv2o4 default-ltr-cache-1javmrk e1svuwfo1 "
                  data-name="Plus"
                  aria-labelledby=":r2h:"
                  alt="">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                    fill="currentColor"></path>
                </svg>
              )}
            </button>
          </span>
        </div>
        {isReadAble ? <hr /> : null}
        <div
          className={`bg-[#2d2d2d] p-6 font-semibold text-2xl transition duration-200 ${
            isReadAble ? "block" : "hidden"
          }`}>
          <p>{data.paragraph1}</p>
          <br />
          <br />
          <p>{data.paragraph2}</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default FaqList;
