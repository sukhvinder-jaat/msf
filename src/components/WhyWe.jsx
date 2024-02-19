"use client";
// Importing necessary modules and components
import React from "react";
import Heading from "./common/Heading";
import Image from "next/image";
import Slider from "react-slick";
import { WhyWeDot } from "./common/Icon";

// WhyWe component
const WhyWe = () => {
  // Slider settings
  const whySlider = {
    dots: false,
    arrow: false,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="pt-28 relative md:pb-32 pb-20" id="why_we">
      {/* image */}
      <Image
        src="/assets/images/why_we/why_we.webp"
        width={628}
        height={113}
        className="max-w-[450px] max-h-[113px] absolute end-0 top-[5%] pointer-events-none"
        alt="choose us"
        loading="lazy"
        sizes="100vw"
      />
      {/* heading */}
      <Heading heading="WHY WE ARE " />
      <p className="font-Bahnschrift text-black font-light md:text-5xl text-3xl text-center mt-3 md:mb-12 mb-8">
        California <span className="text-orange font-bold">Sexual Abuse</span>{" "}
        Attorneys
      </p>
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex flex-wrap md:py-10 lg:justify-between justify-center">
          <div className="lg:w-6/12 sm:w-8/12 w-full lg:mt-0 mt-12 z-20 relative lg:mb-0 mb-5">
            <Image
              src="/assets/images/why_we/metting.webp"
              width={490}
              height={460}
              className="w-full lg:max-w-[540px]"
              alt="women"
              loading="lazy"
              sizes="100vw"
            />
            <span className=" absolute top-[-7%] start-[-7%] lg:block hidden">
              <WhyWeDot />
            </span>
          </div>
          <div className="lg:w-6/12 lg:px-3 relative w-full">
            {/* slider */}
            <Slider
              {...whySlider}
              className="w-full lg:overflow-[unset] overflow-hidden"
            >
              <div>
                <p className="font-Bahnschrift font-bold text-2xl text-black">
                  Nationally Recognized for Representing Sexual Abuse Survivors
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly, Stewart & Finaldi is regarded as America’s leading law
                  firm for sexual abuse cases. Our founder and managing partner,{" "}
                  <span className="text-orange font-bold">
                    attorney John C.
                  </span>{" "}
                  Manly, has been successfully representing sexual abuse victims
                  for over 20 years. He has been included in Super Lawyers® and
                  named to California’s Top 100 Attorneys by the Los Angeles
                  Daily Journal.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Victim’s advocate and California sexual abuse lawyer John
                  Manly understands that sexual abuse is an ongoing crisis and
                  has devoted himself to becoming a national leader in the legal
                  battle against these brutal crimes. As a firm that exclusively
                  handles sexual abuse cases, our California law firm offers
                  experienced representation to obtain justice for sexual abuse
                  survivors, harassment, and discrimination.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly Stewart & Finaldi is currently investigating alleged{" "}
                  <span className="text-orange font-bold">
                    sexual abuse by Dr. Robert E. Anderson at the University of
                    Michigan.
                  </span>{" "}
                  Contact our firm today if you were affected.
                </p>
              </div>
              <div>
                <p className="font-Bahnschrift font-bold text-2xl text-black">
                  Nationally Recognized for Representing Sexual Abuse Survivors
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly, Stewart & Finaldi is regarded as America’s leading law
                  firm for sexual abuse cases. Our founder and managing partner,{" "}
                  <span className="text-orange font-bold">
                    attorney John C.
                  </span>{" "}
                  Manly, has been successfully representing sexual abuse victims
                  for over 20 years. He has been included in Super Lawyers® and
                  named to California’s Top 100 Attorneys by the Los Angeles
                  Daily Journal.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Victim’s advocate and California sexual abuse lawyer John
                  Manly understands that sexual abuse is an ongoing crisis and
                  has devoted himself to becoming a national leader in the legal
                  battle against these brutal crimes. As a firm that exclusively
                  handles sexual abuse cases, our California law firm offers
                  experienced representation to obtain justice for sexual abuse
                  survivors, harassment, and discrimination.
                </p>
                <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                  Manly Stewart & Finaldi is currently investigating alleged{" "}
                  <span className="text-orange font-bold">
                    sexual abuse by Dr. Robert E. Anderson at the University of
                    Michigan.
                  </span>{" "}
                  Contact our firm today if you were affected.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
