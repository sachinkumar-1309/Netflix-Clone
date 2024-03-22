import React from "react";

const Input = ({
  id,
  onChange,
  value,
  label,
  type,
  className,
  classNameLabel,
}) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className={`block rounded px-6 pt-5 pb-3 w-full bg-none text-md text-white bg-neutral-700 focus:appearance-none focus:outline-none focus:ring-0 peer ${className}`}
        placeholder="   "
        autoComplete="on"
      />
      <label
        className={`absolute text-md duration-150 text-zinc-400 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${classNameLabel}`}
        htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
