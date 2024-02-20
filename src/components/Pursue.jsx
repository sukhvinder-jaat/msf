// Importing necessary modules and components
import Image from "next/image";
import React from "react";
import { OrangeTick } from "./common/Icon";
import { pursueFeature } from "./common/Helper";

// Pursue component
const Pursue = () => {
  return (
    <div className="bg-white md:pt-28 pt-14 md:pb-[116px] pb-20">
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex flex-wrap justify-center lg:justify-between lg:items-start items-center lg:flex-row flex-col-reverse">
          {/* Text content */}
          <div
            className="lg:w-6/12 w-full relative lg:mt-0 mt-10"
            data-aos-offset="-1000"
            data-aos="zoom-out-right"
          >
            {/* Main title */}
            <p className="text-black font-Bahnschrift font-light md:text-4xl text-3xl leading-[normal]">
              We Pursue{" "}
              <span className="text-orange font-bold">All Liable</span> Parties
            </p>
            {/* Description */}
            <p className="mt-2 text-lightBlack font-Poppins font-normal md:text-base text-sm">
              At Manly, Stewart & Finaldi, we understand that in cases of sexual
              abuse, there are often other parties that may share liability for
              the abuser’s despicable actions. Therefore, we strive to hold all
              responsible parties accountable for their part in your case. This
              includes:
            </p>
            {/* List of features */}
            <ul className="pt-[24px] flex flex-col gap-3">
              {pursueFeature.map((value, index) => {
                return (
                  <li
                    className="flex items-center gap-3 font-Poppins font-normal text-base md:text-lg"
                    key={index}
                  >
                    <OrangeTick /> {/* Icon */}
                    {value}
                  </li>
                );
              })}
            </ul>
            {/* Additional description */}
            <p className="mt-6 text-lightBlack font-Poppins font-normal md:text-base text-sm">
              Any and all parties who had some direct or indirect part in your
              case deserve to be held accountable to the fullest extent.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-[45%] md:w-8/12 w-full relative">
            <Image
              src="/assets/images/pursue/law.webp"
              alt="justice"
              className="w-full h-full"
              width={537}
              height={537}
              loading="lazy"
              sizes="100vw"
              data-aos-offset="-1000"
              data-aos="zoom-out-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pursue; // Exporting Pursue component
