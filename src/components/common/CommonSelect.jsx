import React from "react";

// CommonSelect component represents a common select input field
const CommonSelect = ({
  value,
  onChange,
  id,
  name,
  map,
  registration,
  error,
}) => {
  return (
    <>
      {/* Label for the select field */}
      <label
        for={id}
        className="block mb-2 font-Poppins font-normal text-lg text-lightBlack33"
      >
        City
      </label>
      {/* Select field */}
      <select
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        className="block outline-none text-whiteDustC placeholder:text-whiteDustC border border-whiteDustC px-4 py-3 rounded focus:outline-none focus:shadow-outline w-full focus:shadow-outline"
      >
        {/* Mapping over options and creating select options */}
        {map.map((option, index) => (
          <option className=" w-full" key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Display error message if error is true and value is empty */}
      {error && value === "" ? (
        <p className="text-red-900 text-[12px] font-Bahnschrift font-normal flex items-start mt-1 absolute">
          This field is required
        </p>
      ) : (
        // Display registration information if available
        registration !== ""
      )}
    </>
  );
};

// Export the CommonSelect component
export default CommonSelect;
