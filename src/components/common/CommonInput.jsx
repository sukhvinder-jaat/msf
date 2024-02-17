import React from "react";

const CommonInput = ({
  label,
  onChange,
  value,
  placeholder,
  id,
  name,
  error,
  type,
}) => {
  return (
    <div className="">
      <label className="block mb-2 font-Poppins font-normal md:text-lg text-base text-lightBlack33">
        {label}
      </label>
      <div className=" relative">
        <input
          className="outline-none text-[#CCCCCC] placeholder:text-[#CCCCCC] border border-[#CCCCCC] px-4 py-3 rounded focus:outline-none focus:shadow-outline w-full"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
        />
        {error && value === "" && (
          <p className="text-red-900 text-[12px] font-Bahnschrift font-normal flex items-start mt-1 absolute">
            This field is required
          </p>
        )}
      </div>
    </div>
  );
};

export default CommonInput;
