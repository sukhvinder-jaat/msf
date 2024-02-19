import React from "react";
// BlueButton component represents a button with blue styling
const BlueButton = ({ title }) => {
  return (
    <button
      className=" bg-slat py-4 px-[25px] text-white font-Poppins md:text-lg text-base leading-[160%] rounded-full hover:bg-orange transition-all ease-in-out duration-300 text-nowrap"
      aria-label="button"
      // - title: the text displayed on the button
    >
      {title}
    </button>
  );
};

export default BlueButton;
