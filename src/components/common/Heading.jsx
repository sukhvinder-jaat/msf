import React from "react";
import { HalfArrow } from "./Icon";

const Heading = ({ heading }) => {
  return (
    <div className=" flex items-center justify-center">
      <HalfArrow />
      <p className="ms-2 text-slat font-Poppins font-medium leading-[168%] uppercase text-lg">
        {heading}
      </p>
    </div>
  );
};

export default Heading;
