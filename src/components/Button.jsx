import React from "react";

function Button({
  type = "submit",
  bgColor = "bg-[#e50914]",
  textColor = "text-white",
  children,
  className = "",
  id = "",
  ...props
}) {
  return (
    <div className="relative">
      <button
        id={id}
        type={type}
        {...props}
        className={`bg-[rgb(229, 9, 20)] px-2 py-1 hover:bg-red-700 rounded font-bold cursor-pointer ${textColor} ${className} ${bgColor} `}>
        {children}
      </button>
    </div>
  );
}

export default Button;
