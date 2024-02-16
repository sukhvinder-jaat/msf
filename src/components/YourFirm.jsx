import Image from "next/image";
import React from "react";
import Heading from "./common/Heading";
import { firmCard } from "./common/Helper";

const YourFirm = () => {
  return (
    <div className=" bg-white pt-20  pb-[103px] relative">
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <Heading heading="Our firm in the news" />
      </div>

      <div className="flex flex-wrap  max-w-[912px] mx-auto mt-10">
        {firmCard.map((value, index) => {
          return (
            <div key={index} className="lg:w-[20%] sm:w-4/12 w-6/12 px-3 py-3">
              <div className=" bg-white hover:shadow-[0px_11px_24px_0px_#0000001A] transition-all ease-in-out duration-300 w-full min-h-[120px] flex items-center justify-center px-3 py-4 h-full max-w-[210px] max-h-[120px]">
                <Image
                  className={`${value.width}`}
                  src={value.path}
                  width={141}
                  height={87}
                  alt="card"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourFirm;
