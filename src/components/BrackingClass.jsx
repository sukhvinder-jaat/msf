import React from "react";
import { HalfArrowWhite, HalfCircle, RotateArrow } from "./common/Icon"; // Importing icons
import Image from "next/image"; // Importing Image component from Next.js
import { brackingCard } from "./common/Helper"; // Importing helper data for breaking cases
import BlueButton from "./common/BlueButton"; // Importing BlueButton component

const BrackingClass = () => {
  return (
    <div
      className="bg-black pt-12 pb-24 overflow-hidden relative"
      id="bracking"
    >
      {/* Half circle icon */}
      <span className="absolute top-[52%]">
        <HalfCircle />
      </span>
      {/* Dots image */}
      <span className="absolute bottom-[12%] end-0">
        <Image
          decoding="async"
          src="/assets/images/bracking/dots.webp"
          width={84}
          height={83}
          alt="dots"
          className="max-w-[54px] max-h-[84px]"
        />
      </span>
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex items-center justify-center mb-3">
          {/* Half arrow icon */}
          <HalfArrowWhite />
          <p className="ms-2 text-white font-Poppins font-medium leading-[168%] uppercase text-lg">
            BRACKING CASES
          </p>
        </div>
        <p className="font-Bahnschrift text-white font-light md:text-5xl text-3xl text-center mb-12">
          Were You <span className="text-orange font-bold">a Victim</span> of
        </p>
        <div className="flex flex-wrap md:space-y-0 space-y-3">
          {/* Mapping over breaking cases */}
          {brackingCard.map((value, index) => {
            return (
              <div
                className="md:w-6/12 w-full px-3 relative"
                data-aos-offset="-1000"
                data-aos="zoom-out-right"
                key={index}
              >
                {/* Image */}
                <Image
                  decoding="async"
                  src={value.path}
                  alt="hand"
                  className="w-full"
                  width={558}
                  height={475}
                  loading="lazy"
                  sizes="100vw"
                />
                <div className="flex lg:items-center items-start justify-between lg:flex-row flex-col ps-5 pe-10 absolute bottom-5 w-full">
                  {/* Title */}
                  <p
                    className={`font-Bahnschrift font-semibold md:text-xxl text-lg text-white ${
                      index === 0 ? "max-w-[323px]" : "max-w-[200px]"
                    }`}
                  >
                    {value.title}
                  </p>
                  {/* Conditional rendering of button based on index */}
                  {index === 0 ? (
                    <button
                      className="bg-slat p-3 rounded-full hover:bg-orange transition-all ease-linear duration-[0.3s]"
                      aria-label="button"
                    >
                      <RotateArrow />
                    </button>
                  ) : (
                    <BlueButton title="Take Action Now" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrackingClass;
