import React, { useState } from "react";
import Button from "../Button";
import Image from "../Image";
import bannerImg from "/src/assets/bannerImg.png";
import bRight from "/src/assets/bRight.png";
import logo from "/src/assets/logo.png";
import dropDownImg from "/src/assets/dropDownImg.png";
import Icons from "../Icons";
import { FaFacebookMessenger } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-5 pb-10 bg-white dark:bg-bg-dark-main text-common dark:text-white transition-colors duration-300">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="container mx-auto flex items-end justify-between gap-10 min-h-150">
          {/* Left */}
          <div className="w-[25%] z-30 pb-50">
            <h3 className="font-rajdhani font-bold text-[28px] text-text-main uppercase">
              Hello i'm
            </h3>
            <h1 className="font-rajdhani font-bold text-[80px] text-text-main uppercase leading-22.5 py-4">
              Brooklyn <br /> Simmons
            </h1>
            <Button btnText={"View Portfolio"} />
          </div>

          {/* Middle */}
          <div className="relative flex justify-center items-end w-[50%]">
            {/* Back text */}
            <h1 className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[150px] xl:text-[170px] font-bold text-transparent uppercase tracking-wider [-webkit-text-stroke:2px_#141414] dark:[-webkit-text-stroke:2px_#ffffff] z-0 opacity-20 whitespace-nowrap select-none font-rajdhani leading-none">
              WEB DESIGN
            </h1>

            {/* Image */}
            <div className="relative z-10">
              <Image
                src={bannerImg}
                className="h-150 xl:h-175 w-auto object-contain object-bottom"
              />
            </div>

            {/* Front red text */}
            <h1
              className="absolute -bottom-15 left-65 -translate-x-1/2 text-[120px] xl:text-[140px] font-bold text-transparent uppercase tracking-tight [-webkit-text-stroke:1.5px_red] z-20 pointer-events-none select-none font-rajdhani whitespace-nowrap leading-none"
              aria-hidden="true"
            >
              WEB DESIGN
            </h1>
          </div>

          {/* Right */}
          <div className="w-[25%] z-30 pb-65 space-y-6">
            <div>
              <p className="font-rubik text-base text-text-main font-medium">
                About Me
              </p>
              <p className="font-rubik text-sm text-[#5D6570] dark:text-[#A3AED0] leading-7 pt-3 max-w-70">
                A personal <span className="text-red">portfolio</span> is a
                collection of to your work, that is achievements, and a skills
                that <span className="text-red">web design</span> highlights in
                your
              </p>
            </div>
            <div>
              <p className="font-rubik text-base text-text-main font-medium mb-3">
                Find me on
              </p>
              <Icons />
            </div>
          </div>
        </div>
      </div>

      {/* messenger button */}
      <div className="hidden lg:block fixed bottom-16 right-5 z-40">
        <div
          onClick={() => setOpen(true)}
          className="p-4 text-[28px] text-white rounded-full bg-red shadow-lg cursor-pointer hover:scale-110 transition-transform"
        >
          <FaFacebookMessenger />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        {/* Image */}
        <div className="flex justify-center">
          <Image src={bannerImg} className="w-[80%] max-w-75 object-contain" />
        </div>

        {/* Content below image */}
        <div className="px-5 pt-2 pb-10">
          <h3 className="font-rajdhani font-bold text-[18px] text-text-main uppercase">
            Hello I'm
          </h3>
          <h1 className="font-rajdhani font-bold text-[46px] text-text-main uppercase leading-tight">
            Brooklyn <br /> Simmons
          </h1>

          <div className="flex items-center gap-4 mt-4">
            <Button btnText={"View Portfolio"} />
            <div
              onClick={() => setOpen(true)}
              className="p-3.5 text-[22px] text-white rounded-full bg-red shadow-lg cursor-pointer hover:scale-110 transition-transform"
            >
              <FaFacebookMessenger />
            </div>
          </div>

          <div className="mt-8">
            <p className="font-rubik text-base text-text-main font-medium">
              About Me
            </p>
            <p className="font-rubik text-base text-[#5D6570] dark:text-[#A3AED0] leading-7 pt-3">
              A personal <span className="text-red">portfolio</span> is a
              collection of to your work, that is achievements, and a skills
              that <span className="text-red">web design</span> highlights in
              your
            </p>
          </div>

          <div className="mt-6">
            <p className="font-rubik text-base text-text-main font-medium mb-3">
              Find me on
            </p>
            <Icons />
          </div>
        </div>
      </div>

      {/* Right badge */}
      <div className="flex rotate-90 fixed lg:top-88 top-100 right-0 lg:-right-23 z-30">
        <div className="py-5 px-6 bg-[#1F242E] dark:bg-[#1A1F2C] border border-[#ffffff]/10">
          <h3 className="text-[10px] lg:text-base text-white font-medium font-rajdhani uppercase rotate-180">
            48 Pre-built sites
          </h3>
        </div>
        <div className="py-2 px-3 bg-[#48A133]">
          <img className="rotate-275" src={bRight} alt="" />
        </div>
      </div>

      {/* Slider part */}
      <div
        className={`fixed top-0 right-0 h-full w-87.5 lg:w-100 bg-card-bg shadow-2xl transition-transform duration-400 z-50 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 bg-[#EDEDED] dark:bg-[#141414] flex justify-between items-center border-b dark:border-white/5">
          <Image className="w-24 dark:brightness-0 dark:invert" src={logo} alt="Logo" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 bg-text-main/5 dark:bg-white/10 text-text-main dark:text-white rounded-full hover:bg-red hover:text-white dark:hover:bg-red transition-colors"
          >
            <RxCross2 size={24} />
          </button>
        </div>

        <div className="p-8">
          <Image
            className="w-full rounded-lg"
            src={dropDownImg}
            alt="Profile"
          />
          <h3 className="text-text-main text-xl font-bold font-rubik mt-6 leading-7">
            Freelancer delivering <br /> exceptional Webflow, and Next.js
            solutions.
          </h3>
          <p className="text-[#5D6570] dark:text-[#A3AED0] text-base font-rubik mt-4 leading-relaxed">
            I am a skilled freelancer specializing in Webflow development, Figma
            design, and Next.js projects. I deliver creative, dynamic, and
            user-centric web solutions.
          </p>
          <div className="mt-10 space-y-6">
            <ContactInfo
              icon={<IoCall />}
              title="Call Now"
              detail="+92 (8800) - 98670"
            />
            <ContactInfo
              icon={<MdEmail />}
              title="Mail Us"
              detail="example@info.com"
            />
            <ContactInfo
              icon={<IoMdLocate />}
              title="My Address"
              detail="66 Broklyant, New York 3269"
            />
          </div>
          <div className="mt-10">
            <p className="font-bold mb-4 text-text-main">FIND WITH ME</p>
            <Icons />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 border-2 border-text-main/10 dark:border-white/10 bg-text-main/5 dark:bg-white/5 rounded-[5px] text-[#5D6570] dark:text-[#A3AED0]">
      {icon}
    </div>
    <div>
      <p className="text-[15px] font-rajdhani font-semibold text-red uppercase">
        {title}
      </p>
      <p className="text-base text-text-main font-rubik">{detail}</p>
    </div>
  </div>
);

export default Banner;