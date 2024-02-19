"use client";
import Heading from "./common/Heading";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogCard } from "./common/Helper";
import Image from "next/image";
import { Calender, CircleArrow, Comment, TopArrow } from "./common/Icon";
const Blog = () => {
  const sliderRef = useRef(null);
  var blogSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const prevSlideHandler = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlideHandler = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className=" bg-white pt-20 pb-0 overflow-hidden relative">
      <Image
        src="/assets/images/blog/our_blog.png"
        width={628}
        height={113}
        className="max-w-[450px] max-h-[113px] absolute start-0 top-[5%] pointer-events-none"
        alt="choose us"
        loading="lazy"
        sizes="100vw"
      />
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <Heading heading="OUR BLOGS" />
        <p className=" font-Bahnschrift font-light md:text-5xl sm:text-4xl text-3xl text-black text-center mt-3 leading-[normal]">
          In the Spotlight:
          <span className=" text-orange font-bold">Featured</span> Stories
        </p>
        <div className="relative">
          <div className=" overflow-hidden pt-[67px]">
            <Slider {...blogSlider} ref={sliderRef} className="blog">
              {blogCard.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="p-3 relative">
                      <div
                        className={`w-full h-full rounded border border-darkWhite flex items-start flex-col justify-center p-[10px] transition-all ease-linear duration-300`}
                      >
                        <Image
                          src={value.image}
                          alt="image"
                          className="w-full"
                          width={341}
                          height={225}
                          loading="lazy"
                          sizes="100vw"
                        />
                        <div className=" mt-5 mb-4 flex items-center">
                          <div className=" flex items-center border-e border-baba pe-3 me-3">
                            <Calender />
                            <p className="ms-1 font-Poppins font-medium text-sm">
                              Feb 15, 2023
                            </p>
                          </div>
                          <div className=" flex items-center">
                            <Comment />
                            <p className="ms-1 font-Poppins font-medium text-sm">
                              Comment (2)
                            </p>
                          </div>
                        </div>
                        <p className="font-Bahnschrift font-semibold md:text-lg text-base leading-[175%] text-black md:mb-8 mb-4">
                          {value.title}
                        </p>
                        <p className=" cursor-pointer flex items-center gap-1 font-medium font-Poppins text-lg mb-1 read">
                          Read More
                          <TopArrow />
                        </p>
                        <div className="absolute bottom-0 w-[229px] h-[10px] start-[50%] bg-transparent translate-x-[-50%]  transition-all ease-linear duration-300"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className=" flex items-center justify-center w-full gap-3">
            <span
              className=" xl:absolute top-[50%] translate-y-[-3%] start-[-50px]"
              onClick={prevSlideHandler}
            >
              <CircleArrow />
            </span>
            <span
              className=" xl:absolute top-[50%] translate-y-[-3%] end-[-50px] rotate-180"
              onClick={nextSlideHandler}
            >
              <CircleArrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
