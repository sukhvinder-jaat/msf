import React from "react";
import { HalfArrowWhite, RotateArrow } from "./common/Icon";
import Image from "next/image";
import { brackingCard } from "./common/Helper";
import BlueButton from "./common/BlueButton";

const BrackingClass = () => {
  return (
    <div className=" bg-black pt-12 pb-24">
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className=" flex items-center justify-center mb-3">
          <HalfArrowWhite />
          <p className="ms-2 text-white font-Poppins font-medium leading-[168%] uppercase text-lg">
            BRACKING CASES
          </p>
        </div>
        <p className=" font-Bahnschrift text-white font-light text-5xl text-center mb-12">
          Were You <span className=" text-orange font-bold">a Victim</span> of
        </p>
        <div className=" flex flex-wrap">
          {brackingCard.map((value, index) => {
            return (
              <div className=" w-6/12 px-3 relative" key={index}>
                <Image
                  src={value.path}
                  alt="hand"
                  className="w-full"
                  width={558}
                  height={475}
                />
                <div className=" flex items-center justify-between ps-5 pe-10 absolute bottom-5 w-full">
                  <p
                    className={`font-Bahnschrift font-semibold text-xxl text-white ${
                      index === 0 ? "max-w-[323px]" : "max-w-[200px]"
                    }`}
                  >
                    {value.title}
                  </p>

                  {index === 0 ? (
                    <button className=" bg-slat p-3 rounded-full hover:bg-orange transition-all ease-linear duration-300">
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
