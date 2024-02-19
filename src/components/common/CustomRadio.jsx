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
          className="font-Poppins md:text-lg sm:text-base text-sm font-semibold flex gap-3 w-6/12 items-start"
        >
          <input
            type="radio"
            className="assent_orange mt-[2px]"
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
          This field is required
        </p>
      )}
    </div>
  );
};

export default CustomRadio;
