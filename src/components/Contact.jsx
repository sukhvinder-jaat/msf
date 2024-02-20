import React from "react";
import { contactCard } from "./common/Helper"; // Importing helper data for contact cards
import { HalfCircle } from "./common/Icon"; // Importing HalfCircle icon
import Image from "next/image"; // Importing Image component from Next.js

const Contact = () => {
  return (
    <div className="bg-contact bg-cover bg-no-repeat pt-14 pb-[74px] relative">
      {/* Dots */}
      <span className="absolute bottom-[12%] start-0">
        <Image
          src="/assets/images/bracking/dots.webp"
          width={84}
          height={83}
          alt="dots"
          className="max-w-[44px] max-h-[74px]"
        />
      </span>
      <span className="absolute bottom-[10%] end-0">
        <Image
          src="/assets/images/bracking/dots.webp"
          width={84}
          height={83}
          alt="dots"
          className="max-w-[44px] max-h-[74px]"
        />
      </span>
      {/* Half circle */}
      <span className="absolute end-[-0.2%] top-[25%]">
        <HalfCircle />
      </span>
      {/* Content */}
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        {/* Main heading */}
        <p
          className="font-Bahnschrift font-light md:text-5xl sm:text-4xl text-3xl text-white text-center mt-3 leading-[normal] max-w-[780px] mx-auto  md:mb-0 mb-5"
          data-aos-offset="-1000"
          data-aos="zoom-out-down"
        >
          Contact Our{" "}
          <span className="text-orange font-bold">California Sexual Abuse</span>{" "}
          Attorneys Today!
        </p>
        {/* Contact cards */}
        <div className="flex flex-wrap justify-center items-end md:space-y-12 space-y-4">
          {contactCard.map((value, index) => (
            <div
              className="lg:w-4/12 md:w-6/12 w-full px-3"
              data-aos-offset="-1000"
              data-aos="zoom-out-down"
              key={index}
            >
              {/* Individual contact card */}
              <div className="w-full border border-borderBlack bg-grayBlack rounded hover:border-slat hover:shadow-[0px_4px_26px_2px_#2B587F80] py-9 px-5 transition-all ease-linear duration-[0.3s] relative group flex flex-col justify-center items-center">
                {/* Title */}
                <p className="text-slat font-Poppins font-semibold text-xl text-center mb-2 lg:text-nowrap">
                  {value.title}
                </p>
                {/* Description */}
                <p
                  className={`font-normal font-Poppins text-base text-center text-baba mb-5 ${
                    index === 1 || (index === 2 && "max-w-[290px]") // Adjusting max-width for specific cards
                  } ${
                    index === 3 && "max-w-[175px]" // Adjusting max-width for specific cards
                  } ${
                    index === 4 && "max-w-[235px]" // Adjusting max-width for specific cards
                  }`}
                >
                  {value.description}
                </p>
                {/* Phone numbers */}
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-0">
                    <p className="font-Poppins font-normal text-lg text-white">
                      <span className="font-semibold text-orange me-2">P</span>
                      {value.phone}
                    </p>
                    <p
                      className={`font-Poppins font-normal text-lg text-white mt-2 ${
                        index === 0 || index === 1
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none" // Hiding non-TF numbers for specific cards
                      }`}
                    >
                      <span className="font-semibold text-orange me-2">TF</span>
                      {value.telephone}
                    </p>
                  </div>
                  {/* Map button */}
                  <button
                    className="mt-6 bg-white hover:bg-slat py-2 px-6 font-Poppins font-medium text-lg text-slat hover:text-white rounded-full transition-all ease-linear duration-[0.3s] mx-auto"
                    aria-label="map"
                  >
                    MAP
                  </button>
                </div>
                {/* Animated bar */}
                <div className="absolute bottom-0 w-[229px] h-[10px] start-[50%] translate-x-[-50%] transition-all ease-linear duration-[0.3s] bg-slat group-hover:opacity-100 opacity-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
