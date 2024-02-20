// Importing necessary modules and components
import Image from "next/image";
import React from "react";
import Heading from "./common/Heading";
import { firmCard } from "./common/Helper"; // Assuming firmCard is an array of objects containing card information

// YourFirm component
const YourFirm = () => {
  return (
    <div className=" bg-white pt-20  pb-[103px] relative">
      {/* Dots image */}
      <span className=" absolute top-[12%] end-0">
        <Image
          src="/assets/images/bracking/dots.webp"
          width={84}
          height={83}
          alt="dots"
          className=" max-w-[54px] max-h-[84px]"
        />
      </span>

      {/* Heading */}
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <Heading heading="Our firm in the news" />
      </div>

      {/* Firm cards */}
      <div className="flex flex-wrap  max-w-[912px] mx-auto mt-10">
        {firmCard.map((value, index) => {
          return (
            <div
              key={index}
              className="lg:w-[20%] sm:w-4/12 w-6/12 px-3 py-3"
              data-aos-offset="-1000"
              data-aos="zoom-out-right"
            >
              {/* Individual card */}
              <div className=" bg-white hover:shadow-[0px_11px_24px_0px_#0000001A] transition-all ease-in-out duration-[0.3s] w-full min-h-[120px] flex items-center justify-center px-3 py-4 h-full max-w-[210px] max-h-[120px]">
                <Image
                  className={`${value.width}`}
                  src={value.path}
                  width={141}
                  height={87}
                  alt="card"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourFirm; // Exporting YourFirm component
