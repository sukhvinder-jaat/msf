// Importing necessary modules and components
import Image from "next/image";
import React from "react";
import { OrangeTick } from "./common/Icon";

// Representation component
const Representation = () => {
  return (
    <div className="bg-white pt-28 pb-[108px]">
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex flex-wrap justify-center">
          {/* Left column */}
          <div className="lg:w-6/12 md:w-8/12 w-full md:pe-5 relative">
            {/* Image */}
            <Image
              src="/assets/images/represention/justice.png"
              alt="justice"
              className="w-full h-full"
              width={537}
              height={537}
              loading="lazy"
              sizes="100vw"
            />
            {/* Text overlay */}
            <div className="shadow-[5px_5px_20px_0px_#0000001A] py-7 px-8 max-w-[306px] md:absolute end-5 animate-bounce bottom-5 z-10 bg-white rounded">
              <p className="text-slat font-Poppins font-medium md:text-base text-sm leading-[150%] text-center">
                We are passionate about seeking justice for any and all
                survivors of sexual assault and abuse.
              </p>
            </div>
          </div>
          {/* Right column */}
          <div className="lg:w-6/12 w-full md:ps-5 relative lg:mt-0 mt-28">
            {/* Main title */}
            <p className="text-black font-Bahnschrift font-light md:text-4xl text-3xl leading-[normal]">
              Representation for{" "}
              <span className="text-orange font-bold">
                Sexual Abuse Victims
              </span>{" "}
              Across California
            </p>
            {/* Description */}
            <p className="mt-2 text-lightBlack font-Poppins font-normal md:text-base text-sm">
              Our California sexual abuse lawyers have over 20 years of
              experience litigating various cases of sexual violence. This
              includes instances of:
            </p>
            {/* List of features */}
            <ul className="pt-[24px]">
              <li className="flex items-center gap-3 font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                Clergy abuse
              </li>
              <li className="flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                School abuse
              </li>
              <li className="flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg text-orange underline">
                <OrangeTick />
                Abuse occurring in sports organizations
              </li>
              {/* Other list items */}
              {/* ... */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representation; // Exporting Representation component
