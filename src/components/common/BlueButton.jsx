import React from "react";
// BlueButton component represents a button with blue styling
const BlueButton = ({ title }) => {
  return (
    <button
      className=" bg-slat py-4 md:px-[25px] px-5 text-white font-Poppins md:text-lg text-base leading-[160%] rounded-full hover:bg-orange transition-all ease-in-out duration-[0.3s] text-nowrap"
      aria-label="button"
      // - title: the text displayed on the button
    >
      {title}
    </button>
  );
};

export default BlueButton;
