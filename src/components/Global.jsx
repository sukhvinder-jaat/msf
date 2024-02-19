"use client";

import React from "react";
import { globalCard } from "./common/Helper";
import Slider from "react-slick";
import Image from "next/image";
import { HalfCircle } from "./common/Icon";

const Global = () => {
  // Slider settings
  const globalSlider = {
    dots: false,
    arrow: false,
    loop: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-black overflow-hidden relative pb-[107px]" id="global">
      {/* Half circle icon */}
      <span className="start-[-5px] absolute md:top-[35%] top-[15%] lg:block hidden">
        <HalfCircle />
      </span>

      {/* Image */}
      <Image
        src="/assets/images/global/white_dot.png"
        width={80}
        height={84}
        alt="line"
        sizes="100vw"
        loading="lazy"
        className="w-full xl:max-w-[60px] max-w-[50px] absolute xl:bottom-[10%] bottom-[10%] end-0 max-h-[84px] pointer-events-none sm:block hidden"
      />

      {/* Main content */}
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex flex-wrap py-10 lg:justify-between justify-center">
          {/* Left side */}
          <div className="lg:w-6/12 px-3 relative">
            {/* Images */}
            <Image
              src="/assets/images/global/liner.png"
              width={612}
              height={143}
              className="w-full absolute top-0 z-10 h-[173px] translate-y-[-30%]"
              alt="liner"
              loading="lazy"
              sizes="100vw"
            />
            <Image
              src="/assets/images/global/liner.png"
              width={612}
              height={143}
              className="w-full absolute bottom-[12%] z-10 h-[273px] translate-y-[30%] rotate-180"
              alt="liner"
              loading="lazy"
              sizes="100vw"
            />

            {/* Slider */}
            <Slider
              {...globalSlider}
              className="w-full lg:overflow-[unset] overflow-hidden global"
            >
              {/* Mapping through global cards */}
              {globalCard.map((value, index) => (
                <div
                  className="w-full md:py-9 py-5 md:px-7 px-4 border border-lightGray rounded my-6 relative group transition-all ease-linear duration-300"
                  key={index}
                >
                  <div className="flex sm:items-center sm:flex-row flex-col gap-2 sm:mb-0 mb-2">
                    {/* Number */}
                    <p className="font-Bahnschrift font-semibold md:text-6xl text-4xl text-white me-6 leading-[100%]">
                      {value.number}
                    </p>
                    {/* Title */}
                    <p className="font-Poppins font-normal md:text-base text-sm leading-[150%] text-baba lg:max-w-[270px]">
                      {value.title}
                    </p>
                  </div>
                  {/* Description */}
                  <p className="text-baba font-Bahnschrift font-normal md:text-base text-sm leading-[150%]">
                    {value.description}
                  </p>
                  {/* Divider */}
                  <div className="absolute top-[50%] w-[10px] h-[120px] start-0 bg-transparent translate-y-[-50%] transition-all ease-linear duration-300"></div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right side */}
          <div className="lg:w-5/12 sm:w-8/12 lg:mt-0 mt-12 relative z-20">
            {/* Image */}
            <Image
              src="/assets/images/global/o_women.png"
              width={477}
              height={460}
              className="w-full animate-pulse lg:max-w-[477px] max-w-[400px]"
              alt="women"
              loading="lazy"
              sizes="100vw"
            />
            {/* Title */}
            <p className="font-Bahnschrift font-normal text-3xl text-white text-center mt-8">
              Global Settlement’s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
