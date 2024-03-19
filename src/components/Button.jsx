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
      className={`bg-red-600 px-4 py-1 hover:bg-red-700 rounded font-bold cursor-pointer ${textColor} ${className} ${bgColor} `}>
      {children}
    </button>
  );
}

export default Button;
