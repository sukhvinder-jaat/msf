// Importing necessary modules and components
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { navBarLink } from "./common/Helper";
import { DownArrow } from "./common/Icon";

// NavBar component
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  // Function to toggle sidebar visibility
  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden"); // Adding/removing class to body for mobile scroll
  };

  return (
    <nav
      className="bg-lightWhite py-4 flex-grow-0 md:min-h-[90px] flex items-center"
      id="home"
    >
      <div className="flex items-center justify-between w-full xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        {/* Logo */}
        <Image
          src="/assets/images/logo/nav.svg"
          width={136}
          height={56}
          alt="Logo"
          loading="lazy"
          sizes="100vw"
          className="h-8 w-full sm:min-h-[56px] sm:max-w-[136px] max-w-[100px]"
        />
        {/* Desktop links */}
        <ul className="hidden lg:flex space-x-6">
          {navBarLink.map((link, index) => {
            const hideArrow =
              link.title === "Home" ||
              link.title === "Results" ||
              link.title === "Contact";
            return (
              <li
                key={index}
                className="text-white font-Poppins font-semibold text-base leading-[150%] group relative"
              >
                <Link
                  href={link.path}
                  className="flex items-center gap-1 relative group hover_stroke"
                >
                  {link.title}
                  <span
                    className={`${
                      hideArrow
                        ? "hidden"
                        : "block group-hover:rotate-180 transition-all ease-linear duration-[0.3s]"
                    }`}
                  >
                    <DownArrow />
                  </span>
                </Link>
                <div
                  className={`absolute opacity-0 group-hover:opacity-100 group-hover:z-10 -z-10 w-full flex flex-col gap-3 top-[100%] transition-all ease-linear duration-[0.3s] ${
                    hideArrow ? "hidden" : "block"
                  }`}
                >
                  {link.option.map((options, subIndex) => {
                    return (
                      <Link
                        className="hover:text-orange"
                        key={subIndex}
                        href={options.subLink}
                      >
                        {options.subPath}
                      </Link>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
        {/* Sidebar toggle button for mobile */}
        <button
          className="block lg:hidden text-orange text-3xl"
          onClick={sidebarHandler}
          aria-label="sidebar handler"
        >
          <HiOutlineBars3 />
        </button>
      </div>
      {/* Sidebar for mobile */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-[0.3s] ease-in-out`}
      >
        <div className="p-4 flex flex-col justify-center items-center h-full relative z-50">
          {/* Close button for sidebar */}
          <button
            className="text-orange text-3xl absolute top-6 end-4"
            onClick={sidebarHandler}
            aria-label="sidebar handler"
          >
            <span className="relative z-50">
              <RxCross2 />
            </span>
          </button>
          {/* Sidebar links */}
          <ul className="flex flex-col items-center space-y-4 my-5 relative z-50">
            {navBarLink.map((link, index) => {
              const hideArrow =
                link.title === "Home" ||
                link.title === "Results" ||
                link.title === "Contact";
              return (
                <li
                  key={index}
                  className="text-white font-Poppins font-semibold text-base leading-[150%] relative group"
                >
                  <Link
                    href={link.path}
                    className="flex items-center gap-1 relative hover_stroke"
                  >
                    {link.title}
                    <span
                      className={`${
                        hideArrow
                          ? "hidden"
                          : "block group-hover:rotate-180 transition-all ease-linear duration-[0.3s]"
                      }`}
                    >
                      <DownArrow />
                    </span>
                  </Link>
                  <div
                    className={`absolute hidden group-hover:opacity-100  group-hover:flex group-hover:z-10 -z-10 bg-black right-0 flex-col gap-3 top-[100%] transition-all ease-linear duration-[0.3s] px-2  ${
                      hideArrow ? "hidden" : "block"
                    }`}
                  >
                    {link.option.map((options, subIndex) => {
                      return (
                        <Link
                          className="hover:text-orange"
                          key={subIndex}
                          href={options.subLink}
                          onClick={sidebarHandler}
                        >
                          {options.subPath}
                        </Link>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header; // Export NavBar component
