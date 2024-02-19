// Importing necessary modules and components
"use client";
import React, { useState } from "react";
import Header from "./Header"; // Importing the Header component
import Image from "next/image";
import BlueButton from "./common/BlueButton"; // Importing a BlueButton component

// Hero component
const Hero = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false); // State to track if the video is playing

  // Function to handle video play/pause
  const videoPlayHandler = () => {
    if (!isVideoPlaying) {
      setVideoPlaying(true);
      const video = document.getElementById("videoElement");
      if (video) {
        video.play(); // Playing the video
      }
    } else {
      setVideoPlaying(false); // Pausing the video
    }
  };
  return (
    <div
      className="bg-hero bg-cover bg-no-repeat min-h-screen flex flex-col justify-center relative overflow-hidden"
      id="hero"
    >
      {/* Header component */}
      <Header />
      {/* White dot image */}
      <Image
        src="/assets/images/hero/white_dot.webp"
        width={30}
        height={84}
        alt="line"
        sizes="100vw"
        loading="lazy"
        className="w-full xl:max-w-[30px] max-w-[31px] absolute xl:top-[30%] top-[15%] start-0 max-h-[84px] pointer-events-none sm:block hidden"
      />
      {/* Semi-circle image */}
      <Image
        src="/assets/images/hero/semi_circle.webp"
        width={84}
        height={84}
        alt="line"
        sizes="100vw"
        loading="lazy"
        className="w-full xl:max-w-[30px] max-w-[41px] absolute bottom-[10%] start-[-2px] max-h-[84px] pointer-events-none sm:block hidden"
      />
      {/* Main content */}
      <div className="flex-grow-[1] md:pt-28 pt-10 pb-12 xl:max-w-[1140px] mx-auto xl:px-0 px-3 flex flex-col justify-center h-full w-full">
        <div className=" flex lg:items-center lg:flex-row flex-col-reverse">
          {/* Text content */}
          <p className="lg:text-8xl text-6xl font-Bahnschrift font-bold text-white lg:leading-[96px] me-8 md:flex hidden relative z-10">
            America’s Leading
          </p>
          {/* Line image */}
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
        {/* Main title */}
        <p className="lg:text-8xl sm:text-6xl text-3xl font-Bahnschrift font-bold text-white lg:leading-[96px] mb-9  relative z-10">
          <span className="md:hidden"> America’s Leading</span>{" "}
          <span className="text-orange font-light">Sexual Abuse</span> Law Firm
        </p>
        {/* Description and button */}
        <div className="flex flex-wrap lg:flex-row flex-col-reverse lg:items-center relative z-10">
          <div className="lg:w-5/12 w-full">
            {/* Description */}
            <p className="text-dustWhite font-Poppins font-normal leading-[150%] text-base max-w-[385px] lg:mt-0 mt-5">
              We are one of the nation’s leading law firms for representing
              survivors of sexual violence. our renowned sexual abuse attorneys
              are not afraid to stand up to any institution.
            </p>
            {/* Line image */}
            <Image
              src="/assets/images/hero/arrow_line.svg"
              width={193}
              height={1}
              alt="line"
              sizes="100vw"
              loading="lazy"
              className="w-full xl:max-w-[193px] max-w-[100px] mt-6 mb-9"
            />
            {/* BlueButton component */}
            <BlueButton title="Request A Free Consultation" />
          </div>
          <div className="lg:w-7/12 w-full relative xl:max-w-[707px] max-w-[700px]">
            {/* Dots image */}
            <Image
              src="/assets/images/hero/dots.webp"
              width={84}
              height={84}
              alt="line"
              sizes="100vw"
              loading="lazy"
              className="w-full xl:max-w-[84px] max-w-[41px] absolute top-[-5%] end-[-3.5%]"
            />
            {/* Video */}
            <div className="relative rounded overflow-hidden">
              <video
                id="videoElement"
                onClick={videoPlayHandler}
                controls
                className="w-full h-full xl:max-h-[355px] max-h-[302px]"
                poster={"/assets/images/hero/women.webp"}
              >
                <source
                  src={"/assets/video/sample_video.mp4"}
                  type="video/mp4"
                />
              </video>
              {/* Play button */}
              {!isVideoPlaying && (
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    src={"/assets/images/hero/play_btn.svg"}
                    alt="play button"
                    className="sm:w-16 sm:h-16 w-10 h-10 object-contain cursor-pointer absolute translate-x-[-50%] translate-y-[-50%] top-[50%] start-[50%] z-20"
                    onClick={videoPlayHandler}
                  />
                  {/* Image */}
                  <Image
                    src="/assets/images/hero/women.webp"
                    width={707}
                    height={378}
                    alt="line"
                    sizes="100vw"
                    loading="lazy"
                    className="w-full z-10 absolute h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; // Exporting Hero component
