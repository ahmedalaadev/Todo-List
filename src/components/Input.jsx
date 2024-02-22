import React from "react";

const Input = ({ inputRef }) => {
  return (
    <input
      ref={inputRef}
      type="text"
      name="text"
      placeholder="Please Enter Your Item"
      className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    />
  );
};

export default Input;
