import React from "react";
import Link from "next/link";
import { FooterIcon, FooterLinks } from "./common/Helper"; // Importing footer icon and links data
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <div className="bg-black pt-[268px] mt-[-200px]">
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className="flex flex-wrap justify-between">
          {/* Left column */}
          <div className="xl:w-5/12 w-full flex justify-center flex-col items-center xl:items-start">
            {/* Logo */}
            <Link href="#">
              <Image
                src="/assets/images/logo/nav.svg"
                width={136}
                height={56}
                alt="Logo"
                loading="lazy"
                sizes="100vw"
                className="h-8 w-full sm:min-h-[56px] sm:max-w-[136px] max-w-[100px]"
              />
            </Link>
            {/* Footer description */}
            <p className="font-Poppins text-base text-white opacity-70 mt-4 max-w-[407px] text-center xl:text-start">
              THIS IS ATTORNEY ADVERTISING sponsored by John Manly - Manly,
              Stewart & Finaldi, a law firm located at 19100 Von Karman Ave.
              #800 Irvine, Ca.
            </p>
            {/* Social media links */}
            <div className="flex gap-3 items-center mt-6">
              {FooterIcon[0].link.map((valueIcon, i) => {
                return (
                  <Link
                    key={i}
                    href={valueIcon.path}
                    target="_blank"
                    className="hover:scale-110 transition-all duration-200 ease-in-out"
                  >
                    {valueIcon.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Right column */}
          <div className="xl:w-5/12 w-full flex flex-wrap xl:mt-0 mt-10 md:mt-16">
            {FooterLinks.map((value, index) => {
              return (
                <ul
                  key={index}
                  className="md:w-4/12 w-6/12 flex flex-col items-start gap-2 xl:ps-10 md:mb-0 mb-5"
                >
                  <li className="text-white font-Poppins font-semibold text-lg">
                    {value.title}
                  </li>
                  {/* Rendering footer links */}
                  {value.link &&
                    value.link.map((subValue, i) => {
                      return (
                        <li key={i}>
                          <Link
                            href={subValue.path}
                            className="font-Poppins text-nowrap text-dustWhite text-sm opacity-70 hover:opacity-100 transition-all ease-in-out duration-200"
                          >
                            {subValue.links}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer bottom with copyright */}
      <p className="font-Poppins flex items-center justify-center py-5 border-t-[1px] border-white text-center gap-2 opacity-50 text-white font-medium text-sm px-2 mt-12">
        Copyright © {currentYear} Manly, Stewart & Finaldi.
      </p>
    </div>
  );
};

export default Footer;
