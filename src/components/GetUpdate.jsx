"use client";
import React, { useRef, useState } from "react";
import Heading from "./common/Heading";
import CommonInput from "./common/CommonInput";
import emailjs from "@emailjs/browser";
import { cityInput, radioInput } from "./common/Helper";
import CustomRadio from "./common/CustomRadio";
import CommonSelect from "./common/CommonSelect";
import CommonTextArea from "./common/CommonTextArea";
import BlueButton from "./common/BlueButton";
import { HalfCircle } from "./common/Icon";

const GetUpdate = () => {
  const form = useRef();
  // form data save useState
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    last: "",
    phone: "",
    radio: "",
    inquiry: "",
    city: "",
    checkBox: false,
  });
  // input handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    // Enforce maximum one digit at a time for phone number input
    if (name === "phone" && value.length > 10) {
      return;
    }
    SetFormData({ ...formData, [name]: value });
  };
  // error useState
  const [error, setError] = useState(false);
  // email regex
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // phone regex
  const phoneRegex = /^\d{10}$/;
  // form handler
  const FormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() !== "" &&
      formData.checkBox &&
      phoneRegex.test(formData.phone) &&
      formData.email.trim() !== "" &&
      emailRegex.test(formData.email) &&
      formData.inquiry.trim() !== "" &&
      formData.radio.trim() !== "" &&
      formData.last.trim() !== "" &&
      formData.city.trim() !== "country"
    ) {
      setError(false);
      // email js
      emailjs
        .sendForm(
          "service_rhvi6ne",
          "template_pl3c38x",
          form.current,
          "VdFIJa-Q4kIcZzKM7"
        )
        .then(() => {
          SetFormData({
            name: "",
            email: "",
            checkBox: false,
            last: "",
            phone: "",
            radio: "",
            city: "",
            inquiry: "",
          });
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className=" bg-white md:pt-36 pt-20 relative" id="contact">
      <span className=" absolute top-[31%] start-[-5px] xl:block hidden">
        <HalfCircle />
      </span>
      <span className=" absolute bottom-[13%] end-[-5px] xl:block hidden">
        <HalfCircle />
      </span>
      <div className="xl:max-w-[845px] mx-auto xl:px-0 px-3">
        <Heading heading="GET UPDATED WITH US" />
        <p className=" font-Bahnschrift font-light md:text-5xl text-3xl text-center mt-3 mb-4">
          Request <span className=" font-bold text-orange">Your Free</span>{" "}
          Consultation
        </p>
        <p className=" font-normal font-Poppins text-base text-lightBlack leading-[150%] max-w-[650px] text-center mx-auto mb-12">
          Send us an email or call{" "}
          <span className=" text-orange">(800) 700-8450</span> for answers to
          anything and everything you would like to know about your case.
        </p>
        <form ref={form} onSubmit={FormSubmit}>
          <div className="flex flex-wrap">
            {/* first name input */}
            <div className=" w-6/12 relative pb-7 md:pe-5 pe-2">
              <CommonInput
                type="text"
                placeholder="First Name"
                value={formData.name}
                onChange={inputHandler}
                id="name"
                name="name"
                error={error}
                label="First Name"
              />
            </div>
            {/* last name input */}
            <div className=" w-6/12 relative pb-7 md:ps-5 ps-2">
              <CommonInput
                type="text"
                placeholder="Last Name"
                value={formData.last}
                onChange={inputHandler}
                id="last"
                name="last"
                error={error}
                label="Last Name"
              />
            </div>
            {/* phoone number input */}
            <div className=" w-6/12 relative pb-7 md:pe-5 pe-2">
              <CommonInput
                type="number"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={inputHandler}
                id="phone"
                name="phone"
                error={error}
                label="Phone Number"
              />
            </div>
            {/* email input */}
            <div className=" w-6/12 relative pb-7 md:ps-5 ps-2">
              <CommonInput
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={inputHandler}
                id="email"
                name="email"
                error={error}
                label="Email"
              />
            </div>
            {/* custom select */}
            <div className="relative w-full mb-7">
              <CommonSelect
                value={formData.city}
                onChange={inputHandler}
                id="city"
                name="city"
                map={cityInput}
                error={error}
              />
            </div>
            {/* radio btn */}
            <div>
              <p className=" text-black md:text-2xl text-xl font-Poppins font-medium mb-6">
                Institution Involved <span className=" text-slat">*</span>
              </p>
              <CustomRadio
                options={radioInput}
                selectedValue={formData.radio}
                onChange={inputHandler}
                value={formData.radio}
                id="radio"
                name="radio"
                error={error}
              />
            </div>
            {/* text area */}
            <div className=" w-full my-7">
              <CommonTextArea
                type="text"
                placeholder="Reason for inquiry"
                value={formData.inquiry}
                onChange={inputHandler}
                id="inquiry"
                name="inquiry"
                error={error}
                label="Reason for inquiry"
              />
            </div>
            <div>
              <p className=" font-bold text-orange font-Poppins md:text-2xl text-xl mb-2">
                Disclaimer*
              </p>
              <p className=" text-lightBlack font-normal font-Poppins md:text-base text-sm">
                The use of this website or contact form to communicate with this
                firm or any of its attorneys/members does not establish an
                attorney-client relationship. Time-sensitive information should
                not be sent through this form. All information provided will be
                kept strictly confidential.
              </p>
              <div className=" flex items-center gap-5 mt-7 relative">
                {/* DISCLAIMER checkbox */}
                <div className=" relative">
                  <input
                    type="checkbox"
                    checked={formData.checkBox}
                    onChange={() =>
                      SetFormData((prevState) => ({
                        ...prevState,
                        checkBox: !prevState.checkBox,
                      }))
                    }
                    className="assent_slat w-6 h-5"
                  />
                  {error && formData.checkBox === false && (
                    <p className="text-red-900 uppercase text-[12px] font-Bahnschrift font-normal flex items-start absolute bottom-[-15px] text-nowrap">
                      check if you HAVE READ THIS DISCLAIMER
                    </p>
                  )}
                </div>
                <p className=" font-Poppins font-semibold md:text-lg text-base text-slat">
                  I HAVE READ THIS DISCLAIMER
                </p>
              </div>
            </div>
          </div>
          {/* send message btn */}
          <div className="flex justify-center mt-12 mb-24">
            <BlueButton title="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetUpdate;
