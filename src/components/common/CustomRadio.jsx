import React from "react";

// CustomRadio component represents a group of custom radio buttons
// Props:
const CustomRadio = ({ options, selectedValue, onChange, name, error }) => {
  return (
    <div className="relative flex flex-wrap">
      {/* Mapping over options and creating radio buttons */}
      {options.map((option, index) => (
        <label
          key={index}
          htmlFor={name}
          className="font-Poppins lg:my-0 my-1 md:text-lg sm:text-base text-sm font-semibold flex gap-3 sm:w-6/12 w-full items-center"
        >
          <input
            type="radio"
            className="assent_orange"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
      {/* Display error message if error is true and no radio button is selected */}
      {error && selectedValue === "" && (
        <p className="text-red-900 text-[12px] font-Bahnschrift font-normal flex items-start mt-1 absolute bottom-[-15px]">
          Involve is required
        </p>
      )}
    </div>
  );
};

export default CustomRadio;
