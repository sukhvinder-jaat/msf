import React from "react";
import BlueButton from "./common/BlueButton";
import Image from "next/image";
import { HalfCircle } from "./common/Icon";

const California = () => {
  return (
    <div className=" bg-black py-[88px] relative">
      <Image
        src="/assets/images/calfornia/circle.png"
        alt="circle"
        className="w-full max-w-[147px] absolute top-[10%] start-[1%] md:block hidden"
        width={147}
        height={147}
        loading="lazy"
        sizes="100vw"
      />
      <span className=" absolute end-0 lg:top-[50%] top-3">
        <HalfCircle />
      </span>
      <div className="xl:max-w-[1140px] mx-auto xl:px-0 px-3 relative z-10">
        <p className=" font-Bahnschrift font-light md:text-5xl sm:text-4xl text-3xl text-white text-center max-w-[716px] mx-auto leading-[normal]">
          California{" "}
          <span className=" text-orange font-bold">Sexual Abuse Lawyers</span>{" "}
          Who Are Here for You
        </p>
        <p className=" mt-6 font-Poppins font-normal text-sm md:text-base text-baba text-center max-w-[868px] mx-auto">
          No case is too challenging for our lawyers. When we say that we aren’t
          afraid to stand up to any major institution, we have the track record
          to prove it. The firm has recovered more than $2 billion dollars on
          behalf of clients from the nation’s largest school districts,
          religious institutions, municipalities, sports and youth organizations
          and Fortune 500 companies.
        </p>
        <p className="font-Poppins font-normal text-sm md:text-base text-baba text-center max-w-[868px] mx-auto mt-4">
          If you or a loved one is a survivor of sexual violence and abuse,
          please{" "}
          <span className=" font-bold text-slat">
            contact our law offices in Southern California
          </span>{" "}
          for a free, 100% confidential consultation regarding your case.
        </p>
        <p className="font-Poppins font-normal text-sm md:text-base text-baba text-center max-w-[868px] mx-auto mt-4 mb-12">
          You deserve closure, and any responsible parties deserve justice for
          their despicable actions. Let a trusted California sexual abuse lawyer
          at our firm help you today.
        </p>
        <div className="w-full flex items-center justify-center">
          <BlueButton title="Request A Free Consultation" />
        </div>
      </div>
    </div>
  );
};

export default California;
