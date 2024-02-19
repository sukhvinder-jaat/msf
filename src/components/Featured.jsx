import React from "react";
import Heading from "./common/Heading"; // Importing Heading component
import Image from "next/image"; // Importing Image component from Next.js
import { featuredCard } from "./common/Helper"; // Importing helper data for featured cards
import { HalfCircle } from "./common/Icon"; // Importing HalfCircle icon

const Featured = () => {
  return (
    <div className="bg-white pt-20 pb-[136px] relative" id="featured">
      {/* Line */}
      <Image
        src="/assets/images/hero/white_dot.webp"
        width={30}
        height={84}
        alt="line"
        sizes="100vw"
        loading="lazy"
        className="w-full xl:max-w-[30px] max-w-[31px] absolute xl:top-[30%] top-[40%] start-0 max-h-[84px] pointer-events-none sm:block hidden"
      />
      {/* Half circle */}
      <span className="end-0 absolute md:top-[40%] top-[15%]">
        <HalfCircle />
      </span>
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        {/* Heading */}
        <Heading heading="FEATURED ON" />
      </div>
      {/* Featured cards */}
      <div className="flex flex-wrap max-w-[912px] mx-auto mt-10">
        {featuredCard.map((value, index) => {
          return (
            <div key={index} className="lg:w-3/12 sm:w-4/12 w-6/12 px-3 py-3">
              <div className="bg-white hover:shadow-[0px_11px_24px_0px_#0000001A] transition-all ease-in-out duration-300 w-full min-h-[120px] flex items-center justify-center px-3 py-4 h-full max-w-[210px] max-h-[120px]">
                {/* Logo image */}
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

export default Featured;
