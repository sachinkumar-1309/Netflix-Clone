import React from "react";

function Button({
  type = "submit",
  bgColor = "bg-red-600",
  textColor = "text-white",
  children,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      {...props}
      className={`bg-red-600 px-2 py-1 hover:bg-red-700 rounded text-2xl font-bold cursor-pointer ${textColor} ${className} ${bgColor} `}>
      {children}
    </button>
  );
}

export default Button;
