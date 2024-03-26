import React from "react";

function Button({
  type = "submit",
  bgColor = "bg-red-600",
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
        className={`bg-red-600 px-2 py-1 hover:bg-red-700 rounded font-bold cursor-pointer ${textColor} ${className} ${bgColor} `}>
        {children}
      </button>
    </div>
  );
}

export default Button;
