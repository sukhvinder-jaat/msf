import React from "react";
import Header from "./Header";
import Image from "next/image";
import BlueButton from "./common/BlueButton";

const Hero = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
        <Header />
        <Image
          src="/assets/images/hero/white_dot.png"
          width={30}
          height={84}
          alt="line"
          sizes="100vw"
          loading="lazy"
          className="w-full xl:max-w-[30px] max-w-[31px] absolute xl:top-[30%] top-[15%] start-0 max-h-[84px] pointer-events-none sm:block hidden"
        />
        <Image
          src="/assets/images/hero/semi_circle.png"
          width={84}
          height={84}
          alt="line"
          sizes="100vw"
          loading="lazy"
          className="w-full xl:max-w-[30px] max-w-[41px] absolute bottom-[10%] start-[-2px] max-h-[84px] pointer-events-none sm:block hidden"
        />
        <div className="flex-grow-[1] md:pt-28 pt-10 pb-12 xl:max-w-[1140px] mx-auto xl:px-0 px-3 flex flex-col justify-center h-full w-full">
          <div className=" flex lg:items-center lg:flex-row flex-col-reverse">
            <p className=" lg:text-8xl text-6xl font-Bahnschrift font-bold text-white lg:leading-[96px] me-8 md:flex hidden relative z-10">
              America’s Leading
            </p>
            <Image
              src="/assets/images/hero/line.svg"
              width={385}
              height={121}
              alt="line"
              sizes="100vw"
              loading="lazy"
              className="w-full xl:max-w-[385px] max-w-[300px]"
            />
          </div>
          <p className="lg:text-8xl sm:text-6xl text-3xl font-Bahnschrift font-bold text-white lg:leading-[96px] mb-9  relative z-10">
            <span className=" md:hidden"> America’s Leading</span>{" "}
            <span className=" text-orange font-light">Sexual Abuse</span> Law
            Firm
          </p>
          <div className=" flex flex-wrap lg:flex-row flex-col-reverse lg:items-center relative z-10">
            <div className="lg:w-5/12 w-full">
              <p className=" text-dustWhite font-Poppins font-normal leading-[150%] text-base max-w-[385px] lg:mt-0 mt-5">
                We are one of the nation’s leading law firms for representing
                survivors of sexual violence. our renowned sexual abuse
                attorneys are not afraid to stand up to any institution.
              </p>
              <Image
                src="/assets/images/hero/arrow_line.svg"
                width={193}
                height={1}
                alt="line"
                sizes="100vw"
                loading="lazy"
                className="w-full xl:max-w-[193px] max-w-[100px] mt-6 mb-9"
              />
              <BlueButton title="Request A Free Consultation" />
            </div>
            <div className="lg:w-7/12 w-full relative xl:max-w-[707px] max-w-[700px]">
              <Image
                src="/assets/images/hero/women.png"
                width={707}
                height={378}
                alt="line"
                sizes="100vw"
                loading="lazy"
                className="w-full xl:max-w-[707px] max-w-[700px] relative z-10"
              />
              <Image
                src="/assets/images/hero/play_btn.svg"
                width={51}
                height={51}
                alt="line"
                sizes="100vw"
                loading="lazy"
                className="w-full xl:max-w-[51px] max-w-[41px] absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer z-20"
              />
              <Image
                src="/assets/images/hero/dots.png"
                width={84}
                height={84}
                alt="line"
                sizes="100vw"
                loading="lazy"
                className="w-full xl:max-w-[84px] max-w-[41px] absolute top-[-5%] end-[-3.5%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
