import React from "react";
import Heading from "./common/Heading"; // Importing Heading component
import Image from "next/image"; // Importing Image component from Next.js
import { chooseCard } from "./common/Helper"; // Importing helper data for choose cards
import { HalfCircle } from "./common/Icon"; // Importing HalfCircle icon

const ChooseUs = () => {
  return (
    <>
      <div className="relative md:mb-32 mb-20">
        {/* Choose Us image */}
        <Image
          src="/assets/images/choose_us/choose_us.webp"
          width={628}
          height={163}
          className="max-w-[520px] max-h-[123px] absolute end-0 top-[-10%] pointer-events-none"
          alt="choose us"
          loading="lazy"
          sizes="100vw"
        />
        {/* Half circle icon */}
        <span className="start-[-5px] absolute md:top-[30%] top-[15%]">
          <HalfCircle />
        </span>
        {/* Content */}
        <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
          {/* Heading */}
          <Heading heading="WHY CHOOSE US" />
          <p className="mt-3 font-Bahnschrift md:text-5xl text-3xl text-black text-center md:mb-[60px] mb-10">
            What <span className="font-bold text-orange">Sets Us</span> Apart
          </p>
          {/* Choose cards */}
          <div className="flex flex-wrap items-center">
            {chooseCard.map((value, index) => {
              return (
                <div
                  className="xl:w-4/12 md:w-6/12 w-full p-3 relative"
                  key={index}
                >
                  <div
                    className={`w-full h-full rounded border border-darkWhite py-10 flex flex-col justify-center items-center hover:shadow-[-7px_3px_23px_-10px_darkBlue] px-3 group hover:border-slat hover:translate-y-[-20px] transition-all ease-linear duration-300 ${
                      index === 2 ? "sm:px-5" : "sm:px-8"
                    }`}
                  >
                    {/* Card icon */}
                    {value.icon}
                    <p className="mt-6 font-Bahnschrift font-semibold md:text-2xl text-xl leading-[175%] text-black md:mb-3">
                      {value.title}
                    </p>
                    <p className="text-lightBlack text-center md:text-base text-sm">
                      {value.description}
                    </p>
                    {/* Animated bar */}
                    <div className="absolute bottom-0 w-[229px] h-[10px] group-hover:bg-slat start-[50%] bg-transparent translate-x-[-50%]  transition-all ease-linear duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
