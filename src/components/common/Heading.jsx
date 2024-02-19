import React from "react";
import { HalfArrow } from "./Icon"; // Importing the HalfArrow component from the Icon file

// Heading component represents a heading with an arrow icon
// Props:
// - heading: the text content of the heading
const Heading = ({ heading }) => {
  return (
    <div className="flex items-center justify-center">
      {/* Render the HalfArrow component */}
      <HalfArrow />
      {/* Render the heading text */}
      <p className="ms-2 text-slat font-Poppins font-medium leading-[168%] uppercase text-lg">
        {heading}
      </p>
    </div>
  );
};

export default Heading;
