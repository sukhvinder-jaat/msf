import Image from "next/image";
import React from "react";
import { OrangeTick } from "./common/Icon";

const Representation = () => {
  return (
    <div className=" bg-white pt-28 pb-[108px]">
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-6/12 md:w-8/12 w-full md:pe-5 relative">
            <Image
              src="/assets/images/represention/justice.webp"
              alt="justic"
              className="w-full h-full"
              width={537}
              height={537}
              loading="lazy"
              sizes="100vw"
            />
            <div className=" shadow-[5px_5px_20px_0px_#0000001A] py-7 px-8 max-w-[306px] sm:absolute end-5 bottom-5 z-10 sm:translate-y-0 translate-y-[-10%] sm:mb-0 mb-5 bg-white rounded">
              <p className=" text-slat font-Poppins font-medium md:text-base text-sm leading-[150%] text-center">
                We are passionate about seeking justice for any and all
                survivors of sexual assault and abuse.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 w-full md:ps-5 relative lg:mt-0 mt-32">
            <p className=" text-black font-Bahnschrift font-light md:text-4xl text-3xl leading-[normal]">
              Representation for{" "}
              <span className=" text-orange font-bold">
                Sexual Abuse Victims
              </span>{" "}
              Across California
            </p>
            <p className=" mt-2 text-lightBlack font-Poppins font-normal md:text-base text-sm">
              Our California sexual abuse lawyers have over 20 years of
              experience litigating various cases of sexual violence. This
              includes instances of:
            </p>
            <ul className=" pt-[24px]">
              <li className=" flex items-center gap-3 font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                Clergy abuse
              </li>
              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                School abuse
              </li>

              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg text-orange underline">
                <OrangeTick />
                Abuse occurring in sports organizations
              </li>
              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                Abuse at youth group and summer camps
              </li>

              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                Abuse at youth group and summer camps
              </li>
              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                <span>
                  Cases of{" "}
                  <span className="text-orange underline">online sexual</span>{" "}
                  harassment
                </span>
              </li>
              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />

                <span>
                  <span className="text-orange underline">
                    Elder sexual abuse
                  </span>{" "}
                  in nursing homes
                </span>
              </li>
              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                Uber/Lyft sexual abuse
              </li>
              <li className=" flex items-center gap-3 mt-[18px] font-Poppins font-normal text-base md:text-lg">
                <OrangeTick />
                Sexual abuse by doctors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Representation;
