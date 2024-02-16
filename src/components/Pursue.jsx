import Image from "next/image";
import React from "react";
import { OrangeTick } from "./common/Icon";
import { pursueFeature } from "./common/Helper";

const Pursue = () => {
  return (
    <div className=" bg-white pt-28 pb-[116px]">
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex flex-wrap justify-center lg:justify-between lg:items-start items-center lg:flex-row flex-col-reverse">
          <div className="lg:w-6/12 w-full relative lg:mt-0 mt-10">
            <p className=" text-black font-Bahnschrift font-light md:text-4xl text-3xl leading-[normal]">
              We Pursue{" "}
              <span className=" text-orange font-bold">All Liable</span> Parties
            </p>
            <p className=" mt-2 text-lightBlack font-Poppins font-normal md:text-base text-sm">
              At Manly, Stewart & Finaldi, we understand that in cases of sexual
              abuse, there are often other parties that may share liability for
              the abuser’s despicable actions. Therefore, we strive to hold all
              responsible parties accountable for their part in your case. This
              includes:
            </p>
            <ul className=" pt-[24px] flex flex-col gap-3">
              {pursueFeature.map((value, index) => {
                return (
                  <li
                    className=" flex items-center gap-3 font-Poppins font-normal text-base md:text-lg"
                    key={index}
                  >
                    <OrangeTick />
                    {value}
                  </li>
                );
              })}
            </ul>
            <p className=" mt-6 text-lightBlack font-Poppins font-normal md:text-base text-sm">
              Any and all parties who had some direct or indirect part in your
              case deserve to be held accountable to the fullest extent.
            </p>
          </div>
          <div className="lg:w-[45%] md:w-8/12 w-full relative">
            <Image
              src="/assets/images/pursue/law.png"
              alt="justic"
              className="w-full h-full"
              width={537}
              height={537}
              loading="lazy"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pursue;
