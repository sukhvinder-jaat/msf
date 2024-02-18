import React from "react";
import Heading from "./common/Heading";
import Image from "next/image";
// import Slider from "react-slick";

const WhyWe = () => {
  //   const whyWeSlider = {
  //     dots: false,
  //     arrow: false,
  //     loop: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     vertical: true,
  //     centerMode: true,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   };
  return (
    <div className="pt-28">
      <Heading heading="WHY WE ARE " />
      <p className=" font-Bahnschrift text-black font-light text-5xl text-center mt-3 mb-12">
        California <span className=" text-orange font-bold">Sexual Abuse</span>
        Attorneys
      </p>
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <div className="flex flex-wrap py-10 lg:justify-between justify-center">
          <div className=" lg:w-6/12 sm:w-8/12 lg:mt-0 mt-12 relative z-20">
            <Image
              src="/assets/images/why_we/metting.png"
              width={490}
              height={460}
              className="w-full lg:max-w-[495px]"
              alt="women"
              loading="lazy"
              sizes="100vw"
            />
            <p className=" font-Bahnschrift font-normal text-3xl text-white text-center mt-8">
              Global Settlement’s
            </p>
          </div>
          <div className=" lg:w-6/12 px-3 relative">
            {/* slider */}
            {/* <Slider
              {...whyWeSlider}
              className="w-full lg:overflow-[unset] overflow-hidden"
            > */}
            {/* {globalCard.map((value, index) => ( */}
            <div>
              <p className=" font-Bahnschrift font-bold text-2xl text-black">
                Nationally Recognized for Representing Sexual Abuse Survivors
              </p>
              <p className=" mt-4 font-normal text-base text-lightBlack leading-[170%]">
                Manly, Stewart & Finaldi is regarded as America’s leading law
                firm for sexual abuse cases. Our founder and managing partner,{" "}
                <span className=" text-orange font-bold">attorney John C.</span>{" "}
                Manly, has been successfully representing sexual abuse victims
                for over 20 years. He has been included in Super Lawyers® and
                named to California’s Top 100 Attorneys by the Los Angeles Daily
                Journal.
              </p>
              <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                Victim’s advocate and California sexual abuse lawyer John Manly
                understands that sexual abuse is an ongoing crisis and has
                devoted himself to becoming a national leader in the legal
                battle against these brutal crimes. As a firm that exclusively
                handles sexual abuse cases, our California law firm offers
                experienced representation to obtain justice for sexual abuse
                survivors, harassment, and discrimination.
              </p>
              <p className="mt-4 font-normal text-base text-lightBlack leading-[170%]">
                Manly Stewart & Finaldi is currently investigating alleged{" "}
                <span className=" text-orange font-bold">
                  sexual abuse by Dr. Robert E. Anderson at the University of
                  Michigan.
                </span>{" "}
                Contact our firm today if you were affected.
              </p>
            </div>
            {/* ))} */}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
