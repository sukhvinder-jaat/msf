import React from "react";

// CommonTextArea component represents a common textarea input field
const CommonTextArea = ({
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
      {/* Label for the textarea field */}
      <label
        htmlFor={id}
        className="block mb-2 font-Poppins font-normal md:text-lg text-base text-lightBlack33"
      >
        {label}
      </label>
      <div className=" relative">
        {/* Textarea field */}
        <textarea
          className="outline-none text-whiteDustAD placeholder:text-whiteDustAD border border-whiteDustAD px-4 py-3 rounded focus:outline-none focus:shadow-outline w-full min-h-[135px]"
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

// Export the CommonTextArea component
export default CommonTextArea;
