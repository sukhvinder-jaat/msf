// Import React library
import React from "react";

// CommonInput component represents a common input field
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
    <div className="mb-0">
      {/* Label for the input field */}
      <label className="block mb-2 font-Poppins font-normal md:text-lg text-base text-lightBlack33">
        {label}
      </label>
      <div className=" relative">
        {/* Input field */}
        <input
          className="outline-none text-whiteDustC placeholder:text-whiteDustC border border-whiteDustC px-4 py-3 rounded focus:outline-none focus:shadow-outline w-full"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
        />
        {/* Display error message if error is true and value is empty */}
        {error && value === "" && (
          <p className="text-red-900 text-[12px] font-Bahnschrift font-normal flex items-start mt-1 absolute">
            {label} is required
          </p>
        )}
      </div>
    </div>
  );
};

// Export the CommonInput component
export default CommonInput;
