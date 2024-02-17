import React from "react";

const Attorneys = () => {
  return (
    <div className=" mt-16 relative z-0">
      <div className="container xl:max-w-[1140px] mx-auto  px-3">
        <div className=" bg-slat py-11 rounded flex flex-col justify-center items-center px-4">
          <h2 className=" font-bahnschrift md:text-4xl text-3xl lg:text-5xl text-white max-w-[700px] mx-auto text-center font-light leading-[normal]">
            Attorneys:
            <span className=" font-bold"> Refer Your Sexual Abuse </span> Case
            to Us
          </h2>
          <p className=" font-Poppins font-normal text-base text-white max-w-[720px] mx-auto mt-4 opacity-70 text-center">
            Give us a call regarding the potential referral of your sexual abuse
            case. We will provide, free-of charge, a thoughtful and reasoned
            evaluation of your potential or pending case.
          </p>
          <button className=" font-Poppins font-medium text-lg border border-transparent bg-white py-[18px] md:px-9 px-4 text-black rounded-[500px] mt-[42px] hover:bg-main hover:border hover:border-white hover:text-white hover:bg-slat transition-all ease-in-out duration-300">
            Join Our Team Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attorneys;
